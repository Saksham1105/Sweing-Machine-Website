import { useState, useMemo } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Search, 
  X, 
  MessageSquare, 
  CheckCircle2, 
  Info, 
  Sparkles, 
  Layers, 
  Filter,
  Check,
  ChevronRight,
  Phone,
  HelpCircle,
  Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MachineProduct {
  id: string;
  name: Record<string, string>;
  brand: string;
  category: 'manual' | 'electric' | 'computerized' | 'industrial' | 'overlock' | 'embroidery';
  description: Record<string, string>;
  price: string;
  availability: 'in_stock' | 'limited' | 'out_of_stock';
  image: string;
  features: Record<string, string[]>;
  specs: Record<string, Record<string, string>>;
}

// Complete localized translations for structural labels and text components


// Rich product dataset covering all requested categories, with 100% accurate localization

import imgMach1 from '../assets/images/singer_promise_1787917439528.webp';
import imgMach2 from '../assets/images/usha_janome_1787917423551.webp';
import imgMach3 from '../assets/images/merritt_deluxe_1787917475818.webp';
import imgMach4 from '../assets/images/domestic_machine_1787917842224.webp';
import imgMach5 from '../assets/images/singer_promise_1787917439528.webp';
import imgMach6 from '../assets/images/usha_janome_1787917423551.webp';
import imgMach7 from '../assets/images/jack_f5_1787917457448.webp';
import imgMach8 from '../assets/images/industrial_machine_1787917855508.webp';
import imgMach9 from '../assets/images/sewing_parts_1787917897263.webp';
import imgMach10 from '../assets/images/sewing_machine_closeup_1787917970256.webp';
import imgMach11 from '../assets/images/embroidery_machine_1787917883730.webp';
import imgMach12 from '../assets/images/embroidery_machine_1787917883730.webp';

const productsData: MachineProduct[] = [
  // 1. MANUAL MACHINES
  {
    id: "usha-bandhan",
    name: {
      en: "Usha Bandhan Straight Stitch",
      hi: "ऊषा बंधन सीधी सिलाई मशीन",
      hinglish: "Usha Bandhan Straight Stitch"
    },
    brand: "USHA",
    category: "manual",
    description: {
      en: "The classic and legendary straight-stitch sewing machine. Extremely rugged, easy to maintain, and works beautifully with a hand attachment, foot treadle, or electric motor.",
      hi: "क्लासिक और प्रसिद्ध सीधी-सिलाई मशीन। बेहद मजबूत, कम रख-रखाव वाली और हाथ के हैंडल, पैरों के स्टैंड या इलेक्ट्रिक मोटर के साथ सुचारू रूप से काम करती है।",
      hinglish: "Classic and highly trusted manual straight-stitch machine. Bohot durable hai, low maintenance hai aur ise hand, pair stand ya external motor se chala sakte hain."
    },
    price: "₹6,800",
    availability: "in_stock",
    image: imgMach1,
    features: {
      en: ["Full metal body construction", "Link-type thread take-up", "Auto-tripping spring loaded bobbin winder", "Compatible with hand/foot/motor"],
      hi: ["पूर्ण धातु (लोहे की) मजबूत बॉडी", "लिंक-टाइप थ्रेड टेक-अप", "ऑटो-ट्रिपिंग स्प्रिंग लोडेड बॉबिन वाइंडर", "हाथ/पैर/मोटर तीनों के अनुकूल"],
      hinglish: ["Full metal strong cast-iron body", "Smooth link-type thread take-up", "Auto bobbin winder mechanism", "Hand lever, foot pedal or motor attachment support"]
    },
    specs: {
      en: { "Stitch Speed": "850 SPM", "Body Material": "Cast Iron", "Stitch Length": "Max 4.6 mm", "Stitching Type": "Straight Stitch Only", "Warranty": "1 Year Official Warranty" },
      hi: { "सिलाई गति": "850 टांके प्रति मिनट", "बॉडी मटेरियल": "कच्चा लोहा (कास्ट आयरन)", "टांके की लंबाई": "अधिकतम 4.6 मिमी", "सिलाई का प्रकार": "केवल सीधी सिलाई", "वारंटी": "1 साल की कंपनी वारंटी" },
      hinglish: { "Stitch Speed": "850 SPM", "Body Material": "Cast Iron", "Stitch Length": "Max 4.6 mm", "Stitch Type": "Straight Stitch Only", "Warranty": "1 Year Brand Warranty" }
    }
  },
  {
    id: "merritt-domestic-deluxe",
    name: {
      en: "Merritt Deluxe Domestic",
      hi: "मेरिट डीलक्स डोमेस्टिक",
      hinglish: "Merritt Deluxe Domestic"
    },
    brand: "MERRITT",
    category: "manual",
    description: {
      en: "Traditional heavy-duty straight-stitching machine built for local household tailoring and continuous garment alterations. Trusted by tailors across Rajasthan for decades.",
      hi: "पारंपरिक हैवी-ड्यूटी सीधी-सिलाई मशीन जो घरेलू काम और लगातार कपड़ों में सुधार के लिए बनाई गई है। दशकों से राजस्थान के दर्जी इस पर विश्वास करते हैं।",
      hinglish: "Traditional straight stitch sewing machine jo heavy work aur daily household tailoring ke liye bani hai. Decades se local tailors ka trusted choice."
    },
    price: "₹7,200",
    availability: "in_stock",
    image: imgMach2,
    features: {
      en: ["Lever-type stitch regulator for reverse stitch", "Chromium plated parts for rust prevention", "Hassle-free oiling layout", "Durable wooden base box included"],
      hi: ["रिवर्स सिलाई के लिए लीवर-टाइप स्टिच रेगुलेटर", "जंग से बचाव के लिए क्रोमियम कोटेड पार्ट्स", "आसान ऑयलिंग डिज़ाइन", "मजबूत लकड़ी का कवर बॉक्स शामिल"],
      hinglish: ["Lever-type stitch regulator for back stitching", "Anti-rust chromium plated components", "Easy oil points for home servicing", "Premium wooden base box included"]
    },
    specs: {
      en: { "Stitch Speed": "800 SPM", "Weight": "12.5 Kg", "Drive Options": "Foot Treadle or Hand Crank", "Stitch Width": "N/A", "Warranty": "1 Year Shop Warranty" },
      hi: { "सिलाई गति": "800 टांके प्रति मिनट", "वजन": "12.5 किलोग्राम", "संचालन विकल्प": "पैर का स्टैंड या हाथ का हैंडल", "टांके की चौड़ाई": "लागू नहीं", "वारंटी": "1 साल की शॉप वारंटी" },
      hinglish: { "Stitch Speed": "800 SPM", "Weight": "12.5 Kg", "Drive Type": "Foot Treadle or Hand Crank", "Stitch Width": "N/A", "Warranty": "1 Year Shop Warranty" }
    }
  },

  // 2. ELECTRIC MACHINES
  {
    id: "usha-dream-stitch",
    name: {
      en: "Usha Janome Dream Stitch",
      hi: "ऊषा जनोम ड्रीम स्टिच",
      hinglish: "Usha Janome Dream Stitch"
    },
    brand: "USHA",
    category: "electric",
    description: {
      en: "A highly compact and automatic electric zigzag sewing machine. Ideal for fashion design students, home hobbyists, and quick mending tasks with simple dial selection.",
      hi: "एक बेहद कॉम्पैक्ट और ऑटोमैटिक इलेक्ट्रिक ज़िगज़ैग सिलाई मशीन। फैशन डिज़ाइन के छात्रों, घरेलू सिलाई के शौकीनों और त्वरित मरम्मत कार्यों के लिए बेहतरीन।",
      hinglish: "Highly compact automatic electric zigzag sewing machine. Fashion designing students aur home hobbyists ke liye best with easy dial pattern selection."
    },
    price: "₹10,500",
    availability: "in_stock",
    image: imgMach3,
    features: {
      en: ["7 built-in decorative stitches", "4-step buttonholer for clean finishes", "Free arm for circular stitching like sleeves", "In-built sewing light for clear visibility"],
      hi: ["7 इन-बिल्ट सुंदर सिलाई डिज़ाइन्स", "साफ फिनिशिंग के लिए 4-स्टेप बटनहोलर", "बाजू/आस्तीन सिलने के लिए फ्री आर्म डिज़ाइन", "बेहतर रोशनी के लिए इन-बिल्ट सिलाई लाइट"],
      hinglish: ["7 decorative built-in stitches", "4-step easy buttonhole maker", "Free arm for circular sleeves stitching", "Integrated bright LED sewing light"]
    },
    specs: {
      en: { "Stitch Speed": "550 SPM", "Stitch Width": "Max 5 mm", "Stitch Patterns": "7 Built-in Patterns", "Power Consumption": "70W Motor", "Warranty": "2 Years Official Warranty" },
      hi: { "सिलाई गति": "550 टांके प्रति मिनट", "टांके की चौड़ाई": "अधिकतम 5 मिमी", "पैटर्न": "7 इन-बिल्ट विकल्प", "बिजली खपत": "70 वाट मोटर", "वारंटी": "2 साल की कंपनी वारंटी" },
      hinglish: { "Stitch Speed": "550 SPM", "Stitch Width": "Max 5 mm", "Stitch Patterns": "7 Built-in", "Power": "70W Motor", "Warranty": "2 Years Brand Warranty" }
    }
  },
  {
    id: "singer-promise-1409",
    name: {
      en: "Singer Promise 1409 Electric",
      hi: "सिंगर प्रॉमिस 1409 इलेक्ट्रिक",
      hinglish: "Singer Promise 1409 Electric"
    },
    brand: "SINGER",
    category: "electric",
    description: {
      en: "Simple, motorized electric machine featuring fundamental utility stitches. Offers easy thread paths and automatic bobbin winding, making it super friendly for starters.",
      hi: "मूल उपयोगी सिलाई डिज़ाइनों वाली सरल और मोटर चालित इलेक्ट्रिक मशीन। आसान थ्रेडिंग और ऑटोमैटिक बॉबिन वाइंडिंग इसे शुरुआती लोगों के लिए बेहद अनुकूल बनाती है।",
      hinglish: "Simple, compact motorized electric sewing machine containing basic utility stitches. Easy threading guides aur automatic bobbin winding makes it great for beginners."
    },
    price: "₹11,200",
    availability: "in_stock",
    image: imgMach4,
    features: {
      en: ["9 decorative & utility stitches", "Heavy duty metal frame inside for stability", "Snap-on presser feet for quick change", "Reverse leverage for locking stitch ends"],
      hi: ["9 सजावटी और उपयोगी सिलाई पैटर्न्स", "स्थिरता के लिए अंदर मजबूत मेटल फ्रेम ढांचा", "जल्दी बदलने योग्य स्नैप-ऑन प्रेशर फुट", "मजबूत सिलाई लॉक के लिए रिवर्स लीवर"],
      hinglish: ["9 stitch patterns including decorative", "Internal heavy-duty metal frame for no vibration", "Snap-on presser feet for fast switching", "Reverse stitching lever for locking ends"]
    },
    specs: {
      en: { "Stitch Speed": "750 SPM", "Built-in Stitches": "9 Designs", "Stitch Selector": "Easy Dial", "Machine Type": "Electric Portable", "Warranty": "2 Years Brand Warranty" },
      hi: { "सिलाई गति": "750 टांके प्रति मिनट", "इन-बिल्ट टांके": "9 डिज़ाइन", "पैटर्न चयन": "आसान डायल रोटेशन", "मशीन का प्रकार": "इलेक्ट्रिक पोर्टेबल", "वारंटी": "2 साल की ब्रांड वारंटी" },
      hinglish: { "Stitch Speed": "750 SPM", "Built-in Stitches": "9 Designs", "Selector": "Easy Dial Adjuster", "Type": "Electric Portable", "Warranty": "2 Years Singer Warranty" }
    }
  },

  // 3. COMPUTERIZED MACHINES
  {
    id: "usha-allure-dlx",
    name: {
      en: "Usha Janome Allure DLX",
      hi: "ऊषा जनोम एलयूर डीएलएक्स",
      hinglish: "Usha Janome Allure DLX"
    },
    brand: "USHA",
    category: "computerized",
    description: {
      en: "Premium computerized sewing machine featuring automatic stitch stretch and width controls. Designed with dual needle capability and digital dialers for modern boutiques.",
      hi: "स्वचालित टांका चौड़ाई और डिजिटल नियंत्रण वाली प्रीमियम कंप्यूटराइज्ड सिलाई मशीन। आधुनिक बुटीक के लिए डबल सुई (डुअल नीडल) सुविधा के साथ डिज़ाइन की गई है।",
      hinglish: "Premium computerized sewing machine. Isme automatic stitch width aur length control panel hai. Dual needle support aur beautiful embroidery designs ke sath boutique owners ke liye best choice."
    },
    price: "₹15,499",
    availability: "in_stock",
    image: imgMach5,
    features: {
      en: ["13 built-in stretch stitches", "Stitch width control dial up to 5mm", "Double-needle capability for twin stitching", "Comes with premium hard cover protection"],
      hi: ["13 इन-बिल्ट स्ट्रेच और सजावटी टांके", "5 मिमी तक टांका चौड़ाई एडजस्ट करने का डायल", "ट्विन सिलाई के लिए डबल सुई लगाने की क्षमता", "सुरक्षा के लिए प्रीमियम मजबूत हार्ड कवर बॉक्स"],
      hinglish: ["13 stretch and embroidery built-in stitches", "Up to 5mm stitch width customization dial", "Double-needle support for dual colors", "Comes with hard cover protection shell"]
    },
    specs: {
      en: { "Stitch Speed": "860 SPM", "Stitch Designs": "13 Designs", "Stitch Width": "Max 5mm", "Double Needle": "Yes Supported", "Warranty": "2 Years Official Warranty" },
      hi: { "सिलाई गति": "860 टांके प्रति मिनट", "सिलाई डिज़ाइन्स": "13 प्रकार", "टांके की चौड़ाई": "अधिकतम 5 मिमी", "डबल सुई": "हाँ, समर्थित", "वारंटी": "2 साल की कंपनी वारंटी" },
      hinglish: { "Stitch Speed": "860 SPM", "Stitch Designs": "13 Patterns", "Width Control": "Max 5mm", "Double Needle": "Yes", "Warranty": "2 Years Brand Warranty" }
    }
  },
  {
    id: "singer-fashion-maker-8280",
    name: {
      en: "Singer Fashion Maker 8280",
      hi: "सिंगर फैशन मेकर 8280",
      hinglish: "Singer Fashion Maker 8280"
    },
    brand: "SINGER",
    category: "computerized",
    description: {
      en: "Compact computerized utility machine featuring dynamic needle positions. Ideal for zip insertion, satin stitching, decorative edging, and professional home-tailored projects.",
      hi: "विभिन्न सुई स्थितियों (Needle Positions) वाली कॉम्पैक्ट कंप्यूटराइज्ड मशीन। चेन लगाने, साटन सिलाई, सजावटी किनारों और सुंदर डिज़ाइनों के लिए उत्कृष्ट विकल्प।",
      hinglish: "Multi-purpose computerized utility machine with adjustable needle positions. Zip insertion, satin stitching, and decorative border embroidery ke liye bohot suitable model."
    },
    price: "₹11,990",
    availability: "limited",
    image: imgMach6,
    features: {
      en: ["7 built-in stitches with 24 custom functions", "Variable needle positions for precise piping & zippers", "Heavy motor with stable metal chassis", "Free accessories kit in the extension table"],
      hi: ["24 विभिन्न सिलाई कार्यों के साथ 7 इन-बिल्ट डिज़ाइन्स", "पाइपिंग और चेन लगाने के लिए समायोज्य सुई स्थिति", "मजबूत मेटल चेसिस के साथ शक्तिशाली मोटर", "विस्तार योग्य टेबल में मुफ़्त एसेसरीज किट शामिल"],
      hinglish: ["7 built-in stitches with 24 application functions", "Adjustable needle position for piping & zip borders", "Heavy motor with zero vibration metal chassis", "Free utility accessories kit included in side tray"]
    },
    specs: {
      en: { "Speed": "800 SPM", "Built-in Patterns": "7 Patterns", "Needle Positions": "Variable", "Accessories Kit": "Yes Included", "Warranty": "2 Years Singer Warranty" },
      hi: { "सिलाई गति": "800 टांके प्रति मिनट", "पैटर्न्स": "7 प्रकार", "सुई की स्थिति": "बदलने योग्य", "एसेसरीज किट": "हाँ, बॉक्स में शामिल", "वारंटी": "2 साल की कंपनी वारंटी" },
      hinglish: { "Stitch Speed": "800 SPM", "Patterns": "7 Designs", "Needle Positions": "Variable", "Accessory Kit": "Yes", "Warranty": "2 Years Singer Warranty" }
    }
  },

  // 4. INDUSTRIAL MACHINES
  {
    id: "jack-f5-direct-drive",
    name: {
      en: "Jack F5 Direct-Drive Smart Power",
      hi: "जैकी F5 डायरेक्ट-ड्राइव स्मार्ट सिलाई मशीन",
      hinglish: "Jack F5 Direct-Drive Smart Power"
    },
    brand: "JACK",
    category: "industrial",
    description: {
      en: "Heavy-duty smart industrial single needle lockstitch machine. Equipped with an in-built direct drive silent motor that saves up to 70% electricity compared to clutch motors.",
      hi: "हैवी-ड्यूटी स्मार्ट औद्योगिक सिंगल सुई सिलाई मशीन। इन-बिल्ट डायरेक्ट ड्राइव मूक (silent) मोटर से लैस, जो क्लच मोटर की तुलना में 70% तक बिजली बचाती है।",
      hinglish: "Heavy-duty high-speed single needle lockstitch machine. Direct-drive silent motor electricity up to 70% save karti hai, tailor shops aur boutique units ke liye standard industrial machine."
    },
    price: "₹21,500",
    availability: "in_stock",
    image: imgMach7,
    features: {
      en: ["Smart direct-drive power saving silent motor", "Adjustable digital sewing speed selector panel", "Built-in co-axial needle position LED light", "Integrated standby mode to save electricity when idle"],
      hi: ["स्मार्ट डायरेक्ट-ड्राइव बिजली बचाने वाली शांत मोटर", "समायोज्य डिजिटल सिलाई गति (Speed) चयन पैनल", "इन-बिल्ट सुई की स्थिति को दिखाने वाली एलईडी लाइट", "चालू न होने पर बिजली बचाने के लिए ऑटो स्टैंडबाय मोड"],
      hinglish: ["Integrated silent direct-drive motor (70% power saving)", "Digital speed selector panel directly on machine head", "Co-axial LED light for zero-shadow sewing", "Automatic standby mode when machine is idle"]
    },
    specs: {
      en: { "Stitch Speed": "Max 5000 SPM", "Needle Type": "DBx1 (#11-#18)", "Power Rating": "550W Direct Drive", "Stitch Length": "0 - 5 mm", "Warranty": "1 Year Motor Warranty" },
      hi: { "सिलाई गति": "अधिकतम 5000 टांके प्रति मिनट", "सुई प्रकार": "DBx1 (#11-#18)", "पावर रेटिंग": "550 वाट डायरेक्ट ड्राइव", "टांके की लंबाई": "0 से 5 मिमी", "वारंटी": "1 साल मोटर वारंटी" },
      hinglish: { "Stitch Speed": "Max 5000 SPM", "Needle Type": "DBx1 (#11 to #18)", "Power": "550W", "Stitch Length": "0 - 5 mm", "Warranty": "1 Year Motor Warranty" }
    }
  },
  {
    id: "juki-ddl-8100e",
    name: {
      en: "Juki DDL-8100e Single Needle Lockstitch",
      hi: "जुकी DDL-8100e इंडस्ट्रियल मशीन",
      hinglish: "Juki DDL-8100e Industrial Stitcher"
    },
    brand: "JUKI",
    category: "industrial",
    description: {
      en: "The absolute global gold-standard in high-speed sewing. Offers responsive sewing, consistent tension, and a robust build that runs smoothly for 12+ hours of continuous daily usage.",
      hi: "हाई-स्पीड औद्योगिक सिलाई में पूर्ण वैश्विक मानक। दैनिक उपयोग के लगातार 12+ घंटे सुचारू रूप से चलने वाला अत्यंत मजबूत ढांचा और सही धागा तनाव (tension) प्रदान करता है।",
      hinglish: "High-speed sewing ka global gold-standard machine. Responsive stitch feedback, perfect thread tension control aur ultra-robust body jo continuous daily 12+ hours chalne ke liye bani hai."
    },
    price: "₹24,800",
    availability: "in_stock",
    image: imgMach8,
    features: {
      en: ["Automatic pressurized lubrication system", "High response stitch dial and feed mechanism", "Excellent balance of sewing head for minimum vibration", "Perfect for cotton, denim, leather and synthetic fabrics"],
      hi: ["ऑटोमैटिक दबावयुक्त सेल्फ-ऑयलिंग प्रणाली", "अत्यंत सटीक सिलाई डायल और फीड डॉग मैकेनिज्म", "न्यूनतम कंपन के लिए शानदार संतुलित सिलाई हेड", "सूती कपड़े, डेनिम (जींस), चमड़े और सिंथेटिक कपड़ों के लिए उपयुक्त"],
      hinglish: ["Self-oil pressurized lubrication system", "Highly responsive stitch regulator dial", "Perfect weight balance of machine head for low noise", "Best for light, medium & heavy fabrics like denim/cotton"]
    },
    specs: {
      en: { "Stitch Speed": "5500 SPM", "Lubrication": "Juki Machine Oil Defrix No. 1", "Presser Foot Lift": "By Hand 5.5mm, By Knee 13mm", "Stitch Range": "0 - 5 mm", "Warranty": "1 Year Brand Warranty" },
      hi: { "सिलाई गति": "5500 टांके प्रति मिनट", "स्नेहन (Oiling)": "जुकी ऑयल डिफ्रिक्स नं. 1", "प्रेशर फुट लिफ्ट": "हाथ से 5.5 मिमी, घुटने से 13 मिमी", "टांका रेंज": "0 से 5 मिमी", "वारंटी": "1 साल की अधिकृत वारंटी" },
      hinglish: { "Stitch Speed": "5500 SPM", "Lubrication": "Automatic oil bath", "Foot Lift": "Hand 5.5mm, Knee 13mm", "Stitch Range": "0 - 5 mm", "Warranty": "1 Year Juki Warranty" }
    }
  },

  // 5. OVERLOCK MACHINES
  {
    id: "singer-14hd854",
    name: {
      en: "Singer 14HD854 Heavy Duty Overlock",
      hi: "सिंगर 14HD854 हैवी ड्यूटी ओवरलॉक",
      hinglish: "Singer 14HD854 Heavy Duty Overlock"
    },
    brand: "SINGER",
    category: "overlock",
    description: {
      en: "Professional heavy-duty interlock and overlock system featuring a 4-thread structure. Trims excess fabric and seals seams perfectly in a single fast action.",
      hi: "4-धागों वाली संरचना वाला पेशेवर हैवी-ड्यूटी इंटरलॉक और ओवरलॉक सिस्टम। यह अतिरिक्त कपड़े को काटता है और एक ही त्वरित क्रिया में सीम को पूरी तरह से सील करता है।",
      hinglish: "Professional heavy duty interlock & overlock sewing machine 4-thread structure ke sath. Ek hi fast stroke me extra fabric ko trim karke perfect interlocking seams banata hai."
    },
    price: "₹23,500",
    availability: "limited",
    image: imgMach9,
    features: {
      en: ["2-3-4 thread capability for diverse stitch types", "High-speed steel cutter knife to trim borders cleanly", "Differential feed to prevent puckering or stretching", "Easy color-coded thread pathways"],
      hi: ["विभिन्न सिलाई प्रकारों के लिए 2-3-4 धागे की क्षमता", "किनारों को साफ से काटने के लिए हाई-स्पीड स्टील कटर ब्लेड", "कपड़े को सिकुड़ने या खिंचने से बचाने के लिए डिफरेंशियल फीड", "धागा पिरोने के लिए आसान कलर-कोडेड थ्रेडिंग मार्ग"],
      hinglish: ["2-3-4 thread options for different overlock styles", "Sharp high-speed steel cutting knife", "Differential feed adjustment to avoid fabric stretching", "Color-coded thread tracks for easy loop threading"]
    },
    specs: {
      en: { "Stitch Speed": "1300 SPM", "Threads Count": "4 / 3 / 2 threads", "Differential Feed Ratio": "0.7 to 2.0", "Machine Type": "Heavy Duty Serger", "Warranty": "2 Years Official Warranty" },
      hi: { "सिलाई गति": "1300 टांके प्रति मिनट", "धागे की संख्या": "4 / 3 / 2 धागे", "डिफरेंशियल फीड अनुपात": "0.7 से 2.0", "मशीन का प्रकार": "हैवी ड्यूटी सर्जर", "वारंटी": "2 साल की ब्रांड वारंटी" },
      hinglish: { "Stitch Speed": "1300 SPM", "Threads": "4 / 3 / 2 Threads", "Differential Ratio": "0.7 - 2.0", "Type": "Heavy Duty Serger", "Warranty": "2 Years Brand Warranty" }
    }
  },
  {
    id: "usha-my-fab-overlock",
    name: {
      en: "Usha My Fab Overlock & Pico",
      hi: "ऊषा माई फैब ओवरलॉक और पीको",
      hinglish: "Usha My Fab Overlock & Pico"
    },
    brand: "USHA",
    category: "overlock",
    description: {
      en: "Versatile household overlock machine equipped for rolled hemming, Pico, and interlining seams. Gives a high-quality readymade-like finish to your boutique garments.",
      hi: "रोल्ड हेमिंग, पीको और इंटरलाइनिंग सीम के लिए सुसज्जित बहुमुखी घरेलू ओवरलॉक मशीन। आपके बुटीक कपड़ों को उच्च गुणवत्ता वाली रेडीमेड जैसी फिनिशिंग देती है।",
      hinglish: "Boutique aur clothing designers ke liye customized rolled hemming, Pico aur overlock finish machine. Readymade garments jaisa high quality locking finish deti hai."
    },
    price: "₹18,200",
    availability: "in_stock",
    image: imgMach10,
    features: {
      en: ["Rolled hemming and Pico stitching switch", "Adjustable cutting width selector", "Built-in scrap catcher box to keep workspace clean", "Includes a free starter pack of 4 overlock threads"],
      hi: ["रोल्ड हेमिंग और पीको सिलाई स्विच", "काटने की चौड़ाई बदलने का नियंत्रक", "कटे धागों को इकट्ठा करने के लिए इन-बिल्ट स्क्रैप बॉक्स", "4 ओवरलॉक धागों का मुफ्त शुरुआती पैक शामिल"],
      hinglish: ["Rolled hemming & Pico stitching switches", "Adjustable fabric cutting width selector", "In-built dust scrap collector tray", "Free starter set of 4 overlock thread spools"]
    },
    specs: {
      en: { "Stitch Speed": "1200 SPM", "Number of Threads": "3 or 4 Threads", "Seam Width": "3.0 - 5.0 mm", "Lighting": "In-built Lamp", "Warranty": "2 Years Official Warranty" },
      hi: { "सिलाई गति": "1200 टांके प्रति मिनट", "धागे की संख्या": "3 या 4 धागे", "सीम की चौड़ाई": "3.0 से 5.0 मिमी", "लाइटिंग": "इन-बिल्ट लैंप", "वारंटी": "2 साल की कंपनी वारंटी" },
      hinglish: { "Stitch Speed": "1200 SPM", "Threads": "3 or 4 Threads", "Seam Width": "3.0 - 5.0 mm", "Light": "In-built lamp", "Warranty": "2 Years Brand Warranty" }
    }
  },

  // 6. EMBROIDERY MACHINES
  {
    id: "brother-m370",
    name: {
      en: "Brother Innov-is M370 Embroidery",
      hi: "ब्रदर इन्नोव-इस M370 कढ़ाई मशीन",
      hinglish: "Brother Innov-is M370 Embroidery"
    },
    brand: "BROTHER",
    category: "embroidery",
    description: {
      en: "Top tier smart computerized embroidery and sewing machine. Comes with a color LCD touch screen and built-in WiFi to upload custom designs directly from your smartphone.",
      hi: "शीर्ष स्तरीय स्मार्ट कंप्यूटराइज्ड कढ़ाई और सिलाई मशीन। रंगीन एलसीडी टच स्क्रीन और इन-बिल्ट वाईफाई के साथ आती है, जिससे आप सीधे अपने स्मार्टफोन से कस्टम डिज़ाइन अपलोड कर सकते हैं।",
      hinglish: "Top-tier smart computerized embroidery and sewing machine. Color LCD touch screen aur in-built WiFi connectivity ke sath smartphone se custom embroidery designs upload karein."
    },
    price: "₹82,000",
    availability: "limited",
    image: imgMach11,
    features: {
      en: ["135 built-in embroidery patterns & 181 sewing stitches", "Large 3.7 inch color LCD touchscreen", "In-built WiFi & USB port to import custom patterns", "Advanced automatic needle threader"],
      hi: ["135 इन-बिल्ट कढ़ाई डिज़ाइन्स और 181 सिलाई टांके", "बड़ा 3.7 इंच का रंगीन एलसीडी टचस्क्रीन", "कस्टम डिज़ाइन इम्पोर्ट करने के लिए इन-बिल्ट वाईफाई और यूएसबी पोर्ट", "उन्नत स्वचालित सुई थ्रेडर"],
      hinglish: ["135 built-in embroidery designs & 181 regular stitches", "Generous 3.7-inch high resolution LCD touchscreen", "WiFi & USB support to import any internet design", "Advanced automatic needle threader mechanism"]
    },
    specs: {
      en: { "Embroidery Area": "100 x 100 mm", "Screen Size": "3.7\" Touch LCD", "Designs Upload": "WiFi / USB", "Stitch Patterns": "181 Utility + 135 Embroidery", "Warranty": "1 Year Official Warranty" },
      hi: { "कढ़ाई क्षेत्र": "100 x 100 मिमी", "स्क्रीन का आकार": "3.7 इंच टच एलसीडी", "डिज़ाइन अपलोड": "वाईफ़ाई / यूएसबी सपोर्ट", "सिलाई प्रकार": "181 सिलाई + 135 कढ़ाई पैटर्न", "वारंटी": "1 साल की ब्रदर कंपनी वारंटी" },
      hinglish: { "Embroidery Area": "100 x 100 mm", "Screen": "3.7 inch Color Touch", "Design Load": "WiFi & USB Pen Drive", "Total Patterns": "181 Sewing + 135 Embroidery", "Warranty": "1 Year Brother Warranty" }
    }
  },
  {
    id: "singer-legacy-se300",
    name: {
      en: "Singer Legacy SE300 Embroidery",
      hi: "सिंगर लिगेसी SE300 कढ़ाई मशीन",
      hinglish: "Singer Legacy SE300 Embroidery"
    },
    brand: "SINGER",
    category: "embroidery",
    description: {
      en: "A professional-grade computerized embroidery powerhouse featuring a large embroidery field and dual snaps. Provides perfect stitch quality and precise alignment for sarees and heavy lehengas.",
      hi: "एक पेशेवर स्तर की कंप्यूटराइज्ड कढ़ाई मशीन जिसमें विशाल कढ़ाई क्षेत्र (embroidery field) और डबल स्नैप्स हैं। साड़ियों और भारी लहंगों के लिए सटीक संरेखण (alignment) और सिलाई प्रदान करती है।",
      hinglish: "Professional grade heavy computerized embroidery machine large sewing field aur dual frames ke sath. Saree embroidery aur heavy wedding lehengas design karne ke liye best model."
    },
    price: "₹1,15,000",
    availability: "limited",
    image: imgMach12,
    features: {
      en: ["Large embroidery area (up to 260mm x 150mm)", "250 built-in stitch patterns & 200 embroidery designs", "LCD touch screen control panel with thread warning sensor", "Heavy duty metal construction for high-speed embroidery stability"],
      hi: ["बड़ा कढ़ाई क्षेत्र (260 मिमी x 150 मिमी तक)", "250 इन-बिल्ट सिलाई टांके और 200 कढ़ाई डिज़ाइन", "धागा टूटने की सूचना देने वाला सेंसर और एलसीडी टच स्क्रीन", "तेज गति पर स्थिरता के लिए हैवी-ड्यूटी मेटल बॉडी फ्रेम"],
      hinglish: ["Extra-large embroidery area (up to 260mm x 150mm)", "250 utility stitch patterns & 200 embroidery layouts", "LCD Touch Screen console with thread sensor notifications", "Heavy metal chassis to prevent vibration during high speeds"]
    },
    specs: {
      en: { "Embroidery Speed": "700 SPM", "Stitch Speed": "800 SPM", "Embroidery Area": "Max 260 x 150 mm", "Built-in Designs": "200 Embroidery + 250 Sewing", "Warranty": "2 Years Singer Warranty" },
      hi: { "कढ़ाई गति": "700 टांके प्रति मिनट", "सिलाई गति": "800 टांके प्रति मिनट", "कढ़ाई क्षेत्र": "अधिकतम 260 x 150 मिमी", "डिज़ाइन्स": "200 कढ़ाई + 250 सामान्य सिलाई", "वारंटी": "2 साल की कंपनी वारंटी" },
      hinglish: { "Embroidery Speed": "700 SPM", "Sewing Speed": "800 SPM", "Embroidery Area": "Max 260 x 150 mm", "Built-in Designs": "200 Embroidery + 250 Utility", "Warranty": "2 Years Singer Warranty" }
    }
  }
];

export default function Machines() {
  const { language, tObj } = useLanguage();
  
  // Safe fallback to 'hinglish' if active language isn't explicitly defined
  const ui = tObj('machines');

  // State for Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  // State for Product Details Modal
  const [selectedProduct, setSelectedProduct] = useState<MachineProduct | null>(null);

  // Derive unique brands in the database for dynamic filter list
  const uniqueBrands = useMemo(() => {
    const brands = productsData.map(p => p.brand);
    return ['all', ...Array.from(new Set(brands))];
  }, []);

  // Filter products based on search, category, and brand selection
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      // 1. Search Query filter (checks product name, brand, description, features)
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === '' || 
        product.brand.toLowerCase().includes(query) ||
        product.name.en.toLowerCase().includes(query) ||
        product.name.hi.toLowerCase().includes(query) ||
        product.name.hinglish.toLowerCase().includes(query) ||
        product.description.en.toLowerCase().includes(query) ||
        product.description.hi.toLowerCase().includes(query) ||
        product.description.hinglish.toLowerCase().includes(query);

      // 2. Category filter
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      // 3. Brand filter
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchQuery, selectedCategory, selectedBrand]);

  // Handle inquiry send on WhatsApp
  const handleWhatsAppInquiry = (product: MachineProduct) => {
    const localizedName = product.name[language] || product.name['en'];
    const text = encodeURIComponent(`Hello Kamal Sewing Machines! I am interested in inquiring about the "${localizedName}" (${product.brand}) sewing machine. Please send current pricing and stock availability.`);
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'referrerpolicy=no-referrer');
  };

  // Clear all filters back to default
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
  };

  return (
    <div id="machines-page-catalog" className="space-y-10 py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      
      {/* 1. PAGE HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-primary rounded-lg text-xs font-bold uppercase tracking-widest border border-slate-100 shadow-3xs">
          <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span>Kamal Authorized Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-none">
          {ui.title}
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
          {ui.subtitle}
        </p>
      </div>

      {/* 2. ADVANCED FILTER BAR */}
      <section id="catalog-filter-bar" className="bg-white border border-slate-100 p-5 rounded-3xl shadow-3xs space-y-5">
        
        {/* Row 1: Search and Category Pills Title */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar input with clear indicator */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              id="product-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ui.searchPlaceholder}
              className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:border-accent focus:bg-white transition-all text-slate-700"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Counter label */}
          <div className="text-xs font-bold text-slate-400 flex items-center gap-2 select-none shrink-0">
            <Layers className="w-4 h-4 text-accent" />
            <span>{filteredProducts.length} Machines listed</span>
          </div>
        </div>

        {/* Row 2: Category Selector Pills */}
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Filter className="w-3 h-3 text-primary" />
            <span>{ui.filterCategory}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {/* 'All' option pill */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/50'
              }`}
            >
              {ui.allCategories}
            </button>
            {/* Category items pills */}
            {Object.keys(ui.categories).map((catKey) => (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === catKey
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/50'
                }`}
              >
                {ui.categories[catKey]}
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Brand Selector Pills */}
        <div className="space-y-2 pt-1 border-t border-slate-50">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-accent" />
            <span>{ui.filterBrand}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {uniqueBrands.map((brandKey) => (
              <button
                key={brandKey}
                onClick={() => setSelectedBrand(brandKey)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all tracking-wider ${
                  selectedBrand === brandKey
                    ? 'bg-accent text-white shadow-3xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-500 border border-slate-200/40'
                }`}
              >
                {brandKey === 'all' ? ui.allBrands : brandKey}
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* 3. PRODUCT GRID */}
      <section id="products-catalog-section" className="space-y-6">
        
        {filteredProducts.length === 0 ? (
          /* Empty search result container */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 px-6 bg-white border border-slate-100 rounded-3xl space-y-4 max-w-xl mx-auto"
          >
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-primary">{ui.noProducts}</h3>
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold hover:bg-opacity-90 transition-all"
            >
              <span>{ui.clearFilters}</span>
            </button>
          </motion.div>
        ) : (
          /* Responsive Product Card Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const productName = product.name[language] || product.name['en'];
              const productDesc = product.description[language] || product.description['en'];
              
              // Colors for availability tag
              const statusColors = {
                in_stock: "bg-emerald-50 text-emerald-700 border-emerald-200",
                limited: "bg-amber-50 text-amber-700 border-amber-200",
                out_of_stock: "bg-rose-50 text-rose-700 border-rose-200"
              };

              return (
                <div 
                  key={product.id}
                  id={`product-card-${product.id}`}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-secondary hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Card Header: Product Image and Badges */}
                  <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={productName} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    
                    {/* Dark gradient shadow inside photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                    {/* Left overlay badge: Brand */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary/90 text-white rounded-lg text-[10px] font-black uppercase tracking-wider backdrop-blur-xs">
                      {product.brand}
                    </span>

                    {/* Right overlay badge: Availability */}
                    <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold border ${statusColors[product.availability]} backdrop-blur-xs`}>
                      {ui.availability[product.availability]}
                    </span>
                  </div>

                  {/* Card Content body */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                        {ui.categories[product.category]}
                      </p>
                      
                      <h3 className="font-extrabold text-sm sm:text-base text-primary leading-snug group-hover:text-accent transition-colors">
                        {productName}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-3">
                        {productDesc}
                      </p>
                    </div>

                    {/* Price and Details row */}
                    <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{ui.priceText}</p>
                        <p className="text-sm font-black text-primary">{product.price || ui.priceOnRequest}</p>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:text-primary transition-colors py-1 px-2 hover:bg-slate-50 rounded-lg"
                      >
                        <span>{ui.btnDetails}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Card Action footer: Quick WhatsApp Enquiry */}
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleWhatsAppInquiry(product)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-3xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>{ui.btnWhatsapp}</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. PRODUCT DETAILS OVERLAY DIALOG / MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div 
            id="product-detail-modal-container"
            className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 w-full max-w-3xl overflow-hidden relative max-h-[90vh] flex flex-col justify-between"
            >
              
              {/* Modal Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable Content wrapper */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                
                {/* Visual Top block: Local Header and Image Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  
                  {/* Left: Picture */}
                  <div className="rounded-2xl overflow-hidden border border-slate-100 aspect-video md:aspect-square bg-slate-50 relative">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name[language] || selectedProduct.name['en']} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-accent text-white text-[10px] font-black rounded-lg uppercase tracking-wider shadow-xs">
                      {selectedProduct.brand}
                    </div>
                  </div>

                  {/* Right: Metadata */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-secondary px-2.5 py-0.5 rounded-md">
                        {ui.categories[selectedProduct.category]}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-primary leading-tight">
                        {selectedProduct.name[language] || selectedProduct.name['en']}
                      </h2>
                    </div>

                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{ui.priceText}</p>
                        <p className="text-lg font-black text-primary">{selectedProduct.price || ui.priceOnRequest}</p>
                      </div>
                      <div className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Availability</p>
                        <p className="text-xs font-bold text-emerald-600 uppercase mt-0.5">
                          {ui.availability[selectedProduct.availability]}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {selectedProduct.description[language] || selectedProduct.description['en']}
                    </p>

                    <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 border border-slate-100 rounded-lg py-1.5 px-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{ui.modal.warrantyBadge}</span>
                    </div>
                  </div>

                </div>

                {/* Bottom block: Features and Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-sm text-primary uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span>{ui.modal.keyFeatures}</span>
                    </h3>
                    <ul className="space-y-2">
                      {(selectedProduct.features[language] || selectedProduct.features['en']).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications Table */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-sm text-primary uppercase tracking-wider flex items-center gap-2">
                      <Info className="w-4 h-4 text-primary" />
                      <span>{ui.modal.techSpecs}</span>
                    </h3>
                    <div className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-100/70 border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            <th className="py-2 px-3">{ui.modal.specField}</th>
                            <th className="py-2 px-3">{ui.modal.specValue}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(selectedProduct.specs[language] || selectedProduct.specs['en']).map(([field, val]) => (
                            <tr key={field} className="border-b border-slate-100 hover:bg-slate-100/30">
                              <td className="py-2 px-3 font-semibold text-slate-500">{field}</td>
                              <td className="py-2 px-3 font-medium text-slate-700">{val}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                {/* Showroom Live Demo Announcement */}
                <div className="p-4 bg-secondary/30 border border-secondary/80 rounded-2xl text-center text-xs text-primary font-bold">
                  📍 {ui.modal.visitShop}
                </div>

              </div>

              {/* Modal Action buttons panel */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleWhatsAppInquiry(selectedProduct)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{ui.btnWhatsapp} ({selectedProduct.brand})</span>
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="sm:px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all"
                >
                  {ui.modal.closeBtn}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. BRAND FOOTER GRID */}
      <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/50">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-black text-primary tracking-tight">Authorized Deals & Genuine Parts</h3>
            <p className="text-xs text-slate-400 max-w-lg mx-auto font-light leading-relaxed">
              We coordinate directly with companies to secure genuine sewing machinery, electrical motors, authentic brand needles, and authorized spare components for clients in Rajasthan.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-3 max-w-4xl mx-auto">
            {["USHA", "SINGER", "BROTHER", "MERRITT", "JACK & JUKI"].map((brand) => (
              <div 
                key={brand} 
                className="bg-white py-4 px-6 rounded-xl border border-slate-200/60 text-xs font-black text-slate-500 tracking-[0.2em] flex items-center justify-center shadow-3xs"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
