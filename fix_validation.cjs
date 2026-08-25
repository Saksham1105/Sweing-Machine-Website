const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'hi.json', 'hinglish.json'];

const additions = {
    en: { contact: { phoneValidation: "Please enter 10 digit mobile number" } },
    hi: { contact: { phoneValidation: "कृपया 10 अंकों का मोबाइल नंबर दर्ज करें" } },
    hinglish: { contact: { phoneValidation: "Kripya 10 digit ka mobile number daalein" } }
};

files.forEach(file => {
    const lang = file.replace('.json', '');
    const data = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8'));
    data.contact.phoneValidation = additions[lang].contact.phoneValidation;
    fs.writeFileSync(path.join(localesDir, file), JSON.stringify(data, null, 2));
});
