const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'hi.json', 'hinglish.json'];

const additions = {
    en: { 
        contact: { 
            namePlaceholder: "e.g. Ramesh Kumar",
            phonePlaceholder: "e.g. 9876543210",
            messagePlaceholder: "Tell us about your sewing machine brand, model, or timing issues..."
        },
        home: {
            namePlaceholder: "e.g. Ram Charan",
            phonePlaceholder: "e.g. 9876543210",
            messagePlaceholder: "e.g. I want to repair my Singer Tailor model sewing machine."
        }
    },
    hi: { 
        contact: { 
            namePlaceholder: "उदा. रमेश कुमार",
            phonePlaceholder: "उदा. 9876543210",
            messagePlaceholder: "अपनी मशीन का ब्रांड, मॉडल, या टाइमिंग समस्या बताएं..."
        },
        home: {
            namePlaceholder: "उदा. राम चरण",
            phonePlaceholder: "उदा. 9876543210",
            messagePlaceholder: "उदा. मुझे अपनी सिंगर टेलर मशीन की मरम्मत करानी है।"
        }
    },
    hinglish: { 
        contact: { 
            namePlaceholder: "e.g. Ramesh Kumar",
            phonePlaceholder: "e.g. 9876543210",
            messagePlaceholder: "Apni machine ka brand, model ya timing issues yahan likhein..."
        },
        home: {
            namePlaceholder: "e.g. Ram Charan",
            phonePlaceholder: "e.g. 9876543210",
            messagePlaceholder: "e.g. Mujhe meri Singer Tailor model ki repair karani hai."
        }
    }
};

files.forEach(file => {
    const lang = file.replace('.json', '');
    const data = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8'));
    
    data.contact = { ...data.contact, ...additions[lang].contact };
    data.home = { ...data.home, ...additions[lang].home };
    
    fs.writeFileSync(path.join(localesDir, file), JSON.stringify(data, null, 2));
});
