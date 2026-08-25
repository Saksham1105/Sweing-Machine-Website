const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const files = ['en.json', 'hi.json', 'hinglish.json'];

const additions = {
    en: {
        contact: {
            mapsAddressDesc: "Opposite Cinema Hall, Kesarganj, Ajmer. Open in maps for step-by-step driving directions.",
            openMapsApp: "Open in Google Maps app"
        },
        gallery: {
            visitShowroomBtn: "Visit Kesarganj Showroom!",
            visitShowroomDesc: "Want to see these machines running live? Visit our shop opposite Cinema Hall, Kesarganj, Ajmer to experience stitching demos first-hand."
        }
    },
    hi: {
        contact: {
            mapsAddressDesc: "सिनेमा हॉल के सामने, केसरगंज, अजमेर। ड्राइविंग निर्देशों के लिए मैप्स में खोलें।",
            openMapsApp: "Google Maps ऐप में खोलें"
        },
        gallery: {
            visitShowroomBtn: "केसरगंज शोरूम पर आएं!",
            visitShowroomDesc: "क्या आप इन मशीनों को लाइव चलते देखना चाहते हैं? लाइव सिलाई डेमो देखने के लिए सिनेमा हॉल, केसरगंज, अजमेर के सामने हमारी दुकान पर आएं।"
        }
    },
    hinglish: {
        contact: {
            mapsAddressDesc: "Opposite Cinema Hall, Kesarganj, Ajmer. Driving directions ke liye maps me open karein.",
            openMapsApp: "Google Maps app me open karein"
        },
        gallery: {
            visitShowroomBtn: "Kesarganj Showroom Visit Karein!",
            visitShowroomDesc: "Kya aap in machines ko live chalte dekhna chahte hain? Live stitching demo ke liye Cinema Hall, Kesarganj, Ajmer ke saamne humari shop par aayen."
        }
    }
};

files.forEach(file => {
    const lang = file.replace('.json', '');
    const data = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8'));
    
    if (!data.contact) data.contact = {};
    if (!data.gallery) data.gallery = {};
    
    data.contact = { ...data.contact, ...additions[lang].contact };
    data.gallery = { ...data.gallery, ...additions[lang].gallery };
    
    fs.writeFileSync(path.join(localesDir, file), JSON.stringify(data, null, 2));
});
