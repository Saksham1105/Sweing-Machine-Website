const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');
const localesDir = path.join(__dirname, 'src', 'locales');
const enFile = path.join(localesDir, 'en.json');
const hiFile = path.join(localesDir, 'hi.json');
const hinglishFile = path.join(localesDir, 'hinglish.json');

let en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
let hi = JSON.parse(fs.readFileSync(hiFile, 'utf8'));
let hinglish = JSON.parse(fs.readFileSync(hinglishFile, 'utf8'));

// Iterate over each file in pages
const files = fs.readdirSync(srcDir);

files.forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    
    // Attempt to extract the localizedContent object using regex or eval
    // It's tricky to parse TS with regex. But the object is defined as a simple JS object literal.
    // Let's use a regex to grab the block.
    // const localizedUI: Record<string, any> = { ... };
    
    const match = content.match(/(const localized(UI|Content|Data)[^=]*= )({[\s\S]*?\n});/);
    if (match) {
        let objStr = match[3];
        // Some files might use arrays, like productsData. We should only extract UI strings.
        // Try to evaluate it
        try {
            // Need to remove TypeScript specific things if any.
            // Usually it's just a pure JS object inside.
            const obj = eval(`(${objStr})`);
            
            const baseName = file.replace('.tsx', '').toLowerCase();
            
            if (obj.en) {
                en[baseName] = obj.en;
            }
            if (obj.hi) {
                hi[baseName] = obj.hi;
            }
            if (obj.hinglish) {
                hinglish[baseName] = obj.hinglish;
            }
            console.log("Successfully extracted from " + file);
        } catch(e) {
            console.error("Failed to parse " + file, e.message);
        }
    }
});

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(hiFile, JSON.stringify(hi, null, 2));
fs.writeFileSync(hinglishFile, JSON.stringify(hinglish, null, 2));
console.log("Done updating locale files.");
