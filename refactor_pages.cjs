const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(srcDir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    const baseName = file.replace('.tsx', '').toLowerCase();
    
    // Remove localizedData, localizedUI, localizedContent definitions entirely.
    // They span multiple lines and can be huge. We can use a regex to drop everything from `const localized...` to `};` at the end of the block.
    // To be safe, we match `const localized(UI|Content|Data): Record<string, any> = {` up to the matching closing brace.
    // However, regex for matching curly braces is hard.
    // We can just use the index.
    
    const varNames = ['localizedUI', 'localizedContent', 'localizedData'];
    for (const v of varNames) {
        const startMatch = content.indexOf(`const ${v}:`);
        if (startMatch !== -1) {
            // Find the closing brace of the top-level object
            let braceCount = 0;
            let startIndex = content.indexOf('{', startMatch);
            let endIndex = -1;
            for (let i = startIndex; i < content.length; i++) {
                if (content[i] === '{') braceCount++;
                if (content[i] === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        endIndex = i;
                        break;
                    }
                }
            }
            if (endIndex !== -1) {
                // Check if there's a semicolon
                if (content[endIndex+1] === ';') endIndex++;
                content = content.substring(0, startMatch) + content.substring(endIndex + 1);
            }
        }
    }

    // Now update the component to use `tObj(baseName)`
    content = content.replace(/const { language } = useLanguage\(\);/g, 'const { language, tObj } = useLanguage();');
    content = content.replace(/const { language, t } = useLanguage\(\);/g, 'const { language, t, tObj } = useLanguage();');
    
    // Wait, in About.tsx I might have already replaced `const c = t;` with my sed command earlier. Let's fix that.
    content = content.replace(/const c = t;/g, `const c = tObj('${baseName}');`);
    
    content = content.replace(/const c = localizedContent\[language\] \|\| localizedContent\['hinglish'\];/g, `const c = tObj('${baseName}');`);
    content = content.replace(/const ui = localizedUI\[language\] \|\| localizedUI\['hinglish'\];/g, `const ui = tObj('${baseName}');`);
    content = content.replace(/const currentLang = localizedData\[language\] \|\| localizedData\['hinglish'\];/g, `const currentLang = tObj('${baseName}');`);

    fs.writeFileSync(path.join(srcDir, file), content);
    console.log("Refactored " + file);
});
