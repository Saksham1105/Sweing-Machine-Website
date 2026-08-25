const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'hi.json', 'hinglish.json'];

const additions = {
    en: {
        nav: {
            location: "Kesarganj, Ajmer, Rajasthan",
            hours: "Mon - Sat: 10:00 AM - 8:00 PM",
            title: "Kesarganj Sewing",
            subtitle: "Sales & Service Center"
        },
        footer: {
            trustedBy: "Trusted by Ajmer's tailors, boutiques, and families since 1995.",
            salesAndServices: "Sales & Services"
        }
    },
    hi: {
        nav: {
            location: "केसरगंज, अजमेर, राजस्थान",
            hours: "सोम - शनि: सुबह 10:00 - रात 8:00",
            title: "केसरगंज सिलाई मशीन",
            subtitle: "बिक्री और सेवा केंद्र"
        },
        footer: {
            trustedBy: "1995 से अजमेर के दर्जियों, बुटीक और परिवारों का भरोसेमंद।",
            salesAndServices: "बिक्री और सेवाएं"
        }
    },
    hinglish: {
        nav: {
            location: "Kesarganj, Ajmer, Rajasthan",
            hours: "Mon - Sat: 10:00 AM - 8:00 PM",
            title: "Kesarganj Sewing",
            subtitle: "Sales & Service Center"
        },
        footer: {
            trustedBy: "1995 se Ajmer ke tailors, boutiques aur families ka bharosa.",
            salesAndServices: "Sales & Services"
        }
    }
};

files.forEach(file => {
    const lang = file.replace('.json', '');
    const data = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8'));
    
    data.nav = { ...data.nav, ...additions[lang].nav };
    data.footer = { ...data.footer, ...additions[lang].footer };
    
    fs.writeFileSync(path.join(localesDir, file), JSON.stringify(data, null, 2));
});
