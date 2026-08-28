import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Camera, 
  MapPin, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Filter, 
  Sparkles
} from 'lucide-react';

interface GalleryItem {
  id: string;
  image: string;
  category: 'shop' | 'machines' | 'repairs' | 'workshop' | 'customers' | 'installation';
  title: Record<string, string>;
  description: Record<string, string>;
}




import imgGal1 from '../assets/images/showroom_1787917810814.webp';
import imgGal2 from '../assets/images/sewing_parts_1787917897263.webp';
import imgGal3 from '../assets/images/needle_thread_1787917940769.webp';
import imgGal4 from '../assets/images/sewing_machine_closeup_1787917970256.webp';
import imgGal5 from '../assets/images/domestic_machine_1787917842224.webp';
import imgGal6 from '../assets/images/technician_repair_1787917828715.webp';
import imgGal7 from '../assets/images/sewing_workshop_1787917956853.webp';
import imgGal8 from '../assets/images/tailor_working_1787917914088.webp';
import imgGal9 from '../assets/images/pattern_cutting_1787918031149.webp';
import imgGal10 from '../assets/images/embroidery_machine_1787917883730.webp';
import imgGal12 from '../assets/images/technician_repair_1787917828715.webp';
import imgGal13 from '../assets/images/industrial_machine_1787917855508.webp';

const galleryData: GalleryItem[] = [
  // 1. SHOP
  {
    id: "shop-front-1",
    image: imgGal1,
    category: "shop",
    title: {
      en: "Authorized Showroom Display",
      hi: "अधिकृत शोरूम डिस्प्ले",
      hinglish: "Authorized Showroom Display"
    },
    description: {
      en: "A beautiful display of authorized sewing machines in our main Kamal Showroom. Customers can test any model.",
      hi: "केसरगंज में हमारे मुख्य शोरूम में अधिकृत सिलाई मशीनों का सुंदर प्रदर्शन। ग्राहक किसी भी मॉडल का परीक्षण कर सकते हैं।",
      hinglish: "Kesarganj, Ajmer showroom me sewing machines ka premium display setup. Customers yahan aakar live stitch trials le sakte hain."
    }
  },
  {
    id: "shop-parts-2",
    image: imgGal2,
    category: "shop",
    title: {
      en: "Premium Spare Parts Inventory",
      hi: "प्रीमियम स्पेयर पार्ट्स स्टॉक",
      hinglish: "Genuine Spare Parts Section"
    },
    description: {
      en: "We house original attachments, presser feet, oils, tension units, and motor carbon brushes for all top brands.",
      hi: "हमारे यहाँ सभी शीर्ष ब्रांडों के लिए असली अटैचमेंट, प्रेशर फीट, ऑयल, टेंशन यूनिट और मोटर कार्बन ब्रश उपलब्ध हैं।",
      hinglish: "Usha, Singer aur Juki ke original attachments, pressure foot, grease oil aur motors ka reliable stock shop par available hai."
    }
  },

  // 2. MACHINES
  {
    id: "machine-stitching-closeup",
    image: imgGal3,
    category: "machines",
    title: {
      en: "Precision Stitching Close-up",
      hi: "सटीक सिलाई का नज़दीकी रूप (Close-up)",
      hinglish: "Precision Stitching Close-up"
    },
    description: {
      en: "Testing double-stitch lock capability on heavy denim fabric before delivery to ensure ideal thread tension.",
      hi: "आदर्श धागे का तनाव सुनिश्चित करने के लिए डिलीवरी से पहले भारी डेनिम कपड़े पर डबल-स्टिच लॉक क्षमता का परीक्षण करना।",
      hinglish: "Delivery se pehle heavy fabric par stitch speed aur double-lock check-up perform kiya jata hai."
    }
  },
  {
    id: "machine-needle-detail",
    image: imgGal4,
    category: "machines",
    title: {
      en: "Heavy-Duty Needle Bar Setup",
      hi: "हैवी-ड्यूटी सुई बार सेटअप",
      hinglish: "Heavy-Duty Needle Bar Guide"
    },
    description: {
      en: "Close look at a premium domestic model. Hardened steel thread take-up lever and smooth needle movement mechanics.",
      hi: "एक प्रीमियम घरेलू मॉडल का नज़दीकी दृश्य। मजबूत स्टील थ्रेड टेक-अप लीवर और सुचारू सुई गति यांत्रिकी।",
      hinglish: "Hardened steel components aur smooth automatic bobbin winder mechanism testing close-up view."
    }
  },
  {
    id: "machine-electric-auto",
    image: imgGal5,
    category: "machines",
    title: {
      en: "Modern Electric Zigzag System",
      hi: "आधुनिक इलेक्ट्रिक ज़िगज़ैग प्रणाली",
      hinglish: "Modern Electric Zigzag Machine"
    },
    description: {
      en: "Automatic stretch stitching and multi-pattern dial selection designed for contemporary boutiques and fashion designers.",
      hi: "समकालीन बुटीक और फैशन डिजाइनरों के लिए डिज़ाइन की गई स्वचालित खिंचाव सिलाई और मल्टी-पैटर्न डायल चयन प्रणाली।",
      hinglish: "Computerized stretch stitching aur multiple custom design dial settings jo work ko easy banata hai."
    }
  },

  // 3. REPAIRS
  {
    id: "repair-timing-adjustment",
    image: imgGal6,
    category: "repairs",
    title: {
      en: "Shuttle Hook Calibration",
      hi: "शटल हुक का सटीक मिलान",
      hinglish: "Shuttle Hook Alignment"
    },
    description: {
      en: "Fine-tuning the loop timing between needle and rotary hook. Solves missed stitches and skipping problems permanently.",
      hi: "सुई और शटल हुक के बीच लूप टाइमिंग का सटीक समायोजन। सिलाई छोड़ने और धागा टूटने की समस्या को पूरी तरह से हल करता है।",
      hinglish: "Skipped stitch (tapp marna) aur baar-baar dhaaga tootne ki timing adjust karte hue expert mechanic."
    }
  },
  {
    id: "repair-gear-assembly",
    image: imgGal7,
    category: "repairs",
    title: {
      en: "Internal Gear Lubrication",
      hi: "आंतरिक गियर ग्रीसिंग और सफाई",
      hinglish: "Internal Gear Servicing"
    },
    description: {
      en: "Deep oil bathing and gear cleansing for a noisy industrial machine. Eliminates annoying clashing sounds.",
      hi: "शोर करने वाली औद्योगिक मशीन के लिए गहरी ऑयलिंग और गियर की सफाई। परेशान करने वाली खड़खड़ाहट की आवाज को मिटाता है।",
      hinglish: "Heavy mechanical noise clean karne ke liye oil wash aur premium high-pressure greasing treatment process."
    }
  },

  // 4. WORKSHOP
  {
    id: "workshop-class-setting",
    image: imgGal8,
    category: "workshop",
    title: {
      en: "Active Workshop & Class Support",
      hi: "सक्रिय वर्कशॉप एवं प्रशिक्षण सहायता",
      hinglish: "Active Workshop & Classes"
    },
    description: {
      en: "Our on-site training area where local tailor groups learn computerized pattern setting and advanced embroidery.",
      hi: "हमारा ऑन-साइट प्रशिक्षण क्षेत्र जहां स्थानीय दर्जी समूह कंप्यूटराइज्ड पैटर्न सेटिंग और आधुनिक कढ़ाई सीखते हैं।",
      hinglish: "Hamare classroom setup me local students aur boutique workers ko computerized panels operate karna sikhaya jata hai."
    }
  },
  {
    id: "workshop-cutting-tables",
    image: imgGal9,
    category: "workshop",
    title: {
      en: "Tailoring Layout & Testing Desk",
      hi: "कटिंग और टेस्टिंग लेआउट टेबल",
      hinglish: "Boutique Patterns Testing Layout"
    },
    description: {
      en: "Our spacious workshop tables dedicated to preparing apparel patterns and testing multi-needle stitch consistency.",
      hi: "अपैरल पैटर्न तैयार करने और मल्टी-नीडल सिलाई स्थिरता का परीक्षण करने के लिए समर्पित हमारी विशाल वर्कशॉप टेबल।",
      hinglish: "Design pattern layout testing aur heavy fabric stitch density inspect karne ka dedicated area."
    }
  },

  // 5. CUSTOMERS
  {
    id: "customer-demo-session",
    image: imgGal10,
    category: "customers",
    title: {
      en: "Live Embroidery Walkthrough",
      hi: "लाइव कढ़ाई डेमोस्ट्रेशन",
      hinglish: "Live Machine Demo for Client"
    },
    description: {
      en: "An expert mechanic showing a boutique owner how to load patterns via USB on a Brother Innov-is system.",
      hi: "एक मैकेनिक बुटीक मालकिन को ब्रदर इन्नोव-इस सिस्टम पर यूएसबी के माध्यम से पैटर्न लोड करने का तरीका सिखाते हुए।",
      hinglish: "Client ko Brother machine me USB through patterns upload aur screen adjustment navigate karna sikhate hue."
    }
  },
  // 6. INSTALLATION
  {
    id: "installation-motor-fitting",
    image: imgGal12,
    category: "installation",
    title: {
      en: "Direct-Drive Servo Motor Fitting",
      hi: "डायरेक्ट-ड्राइव सर्वो मोटर फिटिंग",
      hinglish: "Servo Motor Fitting on Industrial Machine"
    },
    description: {
      en: "Fitting a power-saving silent direct-drive motor on an industrial single-needle lockstitch machine head.",
      hi: "एक औद्योगिक सिंगल-सुई सिलाई मशीन हेड पर बिजली बचाने वाली मूक डायरेक्ट-ड्राइव मोटर की फिटिंग प्रक्रिया।",
      hinglish: "Industrial machine head me modern power saving direct-drive motor adjust and balance alignment."
    }
  },
  {
    id: "installation-heavy-setup",
    image: imgGal13,
    category: "installation",
    title: {
      en: "Industrial Table & Stand Assembly",
      hi: "औद्योगिक टेबल और स्टैंड असेंबली",
      hinglish: "Heavy Stand & Table Installation"
    },
    description: {
      en: "Precise assembly of a heavy metallic stand, wooden tabletop, and knee-lifter linkage setup for continuous production.",
      hi: "लगातार उत्पादन के लिए भारी धातु स्टैंड, लकड़ी के टेबलटॉप और घुटने-लिफ्टर लिंकेज का सटीक असेंबली कार्य।",
      hinglish: "Heavy duty work space tables setup, stand balance setting aur knee lifter rod assembly setup."
    }
  }
];

export default function Gallery() {
  const { language, tObj } = useLanguage();
  const ui = tObj('gallery');

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Filter products based on selected category pill
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryData;
    return galleryData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Handle previous image in lightbox
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeImageIndex === null) return;
    const newIdx = activeImageIndex === 0 ? filteredItems.length - 1 : activeImageIndex - 1;
    setActiveImageIndex(newIdx);
  };

  // Handle next image in lightbox
  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeImageIndex === null) return;
    const newIdx = activeImageIndex === filteredItems.length - 1 ? 0 : activeImageIndex + 1;
    setActiveImageIndex(newIdx);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setActiveImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImageIndex, filteredItems]);

  return (
    <div id="gallery-page-container" className="space-y-10 py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      
      {/* 1. HEADER SECTION */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-primary rounded-lg text-xs font-bold uppercase tracking-widest border border-slate-100 shadow-3xs">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Showcasing Excellence Since 1995</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-none">
          {ui.title}
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
          {ui.subtitle}
        </p>
      </div>

      {/* 2. FILTER PILLS */}
      <section id="gallery-filter-panel" className="bg-white border border-slate-100 p-5 rounded-3xl shadow-3xs space-y-3">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 select-none">
          <Filter className="w-3.5 h-3.5 text-primary" />
          <span>{ui.filterLabel}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {/* 'All' option pill */}
          <button
            onClick={() => {
              setSelectedCategory('all');
              setActiveImageIndex(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-primary text-white shadow-sm'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/50'
            }`}
          >
            {ui.allPhotos}
          </button>
          
          {/* Categorized option pills */}
          {Object.keys(ui.categories).map((catKey) => (
            <button
              key={catKey}
              onClick={() => {
                setSelectedCategory(catKey);
                setActiveImageIndex(null);
              }}
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
      </section>

      {/* 3. RESPONSIVE MASONRY PHOTO GRID */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-xs sm:text-sm">
          {ui.noPhotos}
        </div>
      ) : (
        <div 
          id="masonry-photos-grid" 
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]"
        >
          {filteredItems.map((item, index) => {
            const currentTitle = item.title[language] || item.title['hinglish'];
            const currentDescription = item.description[language] || item.description['hinglish'];
            const categoryLabel = ui.categories[item.category];

            return (
              <div 
                key={item.id}
                onClick={() => setActiveImageIndex(index)}
                className="break-inside-avoid group relative bg-white border border-slate-150 rounded-2xl overflow-hidden cursor-zoom-in shadow-3xs hover:shadow-2xs transition-all duration-300"
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={currentTitle} 
                    className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Category Tag Badge */}
                  <span className="absolute top-3 left-3 bg-primary text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {categoryLabel}
                  </span>

                  {/* Micro Zoom Indicator Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-white/95 text-primary shadow-sm transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Details caption */}
                <div className="p-4 space-y-1.5 border-t border-slate-50">
                  <h3 className="font-extrabold text-primary text-sm leading-snug">
                    {currentTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    {currentDescription}
                  </p>
                  <div className="pt-2 flex items-center gap-1 text-[10px] font-bold text-slate-400 border-t border-slate-50/50">
                    <MapPin className="w-3 h-3 text-accent" />
                    <span>{ui.mapLocation}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* 4. LIGHTBOX MODAL */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <div 
          id="lightbox-overlay"
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex flex-col items-center justify-center p-4 select-none"
        >
          
          {/* Close button top right */}
          <button 
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-4 right-4 z-55 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous navigation left button */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-55 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next navigation right button */}
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-55 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Central Area (Image and Captions) */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[85vh] flex flex-col items-center justify-center space-y-4 relative"
          >
            
            {/* The Image inside container */}
            <div className="relative max-h-[65vh] flex items-center justify-center overflow-hidden rounded-xl">
              <img 
                src={filteredItems[activeImageIndex].image} 
                alt={filteredItems[activeImageIndex].title[language] || filteredItems[activeImageIndex].title['hinglish']} 
                className="max-w-full max-h-[65vh] object-contain rounded-xl select-none shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Captions & Counter */}
            <div className="w-full text-center space-y-2 max-w-2xl px-4">
              
              {/* Counter Indicator */}
              <div className="text-[10px] font-bold text-accent uppercase tracking-widest">
                {ui.lightboxInfo
                  .replace('{current}', String(activeImageIndex + 1))
                  .replace('{total}', String(filteredItems.length))}
              </div>

              {/* Localized Title */}
              <h2 className="text-white text-base sm:text-xl font-extrabold tracking-tight">
                {filteredItems[activeImageIndex].title[language] || filteredItems[activeImageIndex].title['hinglish']}
              </h2>

              {/* Localized Description */}
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                {filteredItems[activeImageIndex].description[language] || filteredItems[activeImageIndex].description['hinglish']}
              </p>

              {/* Location Tag */}
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
                <MapPin className="w-3 h-3 text-accent" />
                <span>{ui.mapLocation}</span>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* 5. BRAND VALUE PROMISE CALLOUT */}
      <section id="gallery-showroom-visit-banner" className="bg-primary text-white p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-extrabold flex items-center justify-center sm:justify-start gap-2 text-accent">
            <Camera className="w-5 h-5 text-accent animate-pulse" />
            <span>{ui.visitShowroomBtn}</span>
          </h3>
          <p className="text-xs text-slate-200 max-w-xl font-light">
            {ui.visitShowroomDesc}
          </p>
        </div>
        <a 
          href="https://wa.me/919876543210?text=Hello%20Kesarganj%20Sewing%20Machine!%20I%20am%20planning%20to%20visit%20your%20showroom%20soon.%20Please%20send%20live%20location%20and%20timings."
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-xl text-xs font-black shadow-xs transition-colors shrink-0 flex items-center gap-2"
        >
          <span>Get Showroom Directions</span>
        </a>
      </section>

    </div>
  );
}
