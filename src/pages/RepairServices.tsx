import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Wrench, 
  ShieldCheck, 
  Truck, 
  Search, 
  Sliders, 
  VolumeX, 
  Settings, 
  Layers, 
  HeartHandshake, 
  PhoneCall, 
  CheckSquare, 
  Award,
  Scissors
} from 'lucide-react';
import { motion } from 'motion/react';

interface RepairService {
  id: string;
  title: Record<string, string>;
  category: Record<string, string>;
  description: Record<string, string>;
  estTime: Record<string, string>;
  image: string;
}



const repairServicesData: RepairService[] = [
  {
    id: "machine-repair",
    title: {
      en: "Machine Repair & Overhaul",
      hi: "सिलाई मशीन सामान्य मरम्मत",
      hinglish: "Sewing Machine Repair"
    },
    category: {
      en: "Mechanical Repair",
      hi: "मैकेनिकल रिपेयर",
      hinglish: "Mechanical Repair"
    },
    description: {
      en: "Fixing major mechanical jams, heavy wheel rotations, loose gears, and bent internal shafts. Restores smooth needle bar movement and perfect stitch sync.",
      hi: "मुख्य यांत्रिक खराबी, भारी चक्का घूमना, ढीले गियर और मुड़े हुए शाफ्ट ठीक करना। सुई बार की सुचारू गति और सिलाई सिंक को बहाल करता है।",
      hinglish: "Major jams, heavy wheel rotation, loose gears aur internal shaft issues ka expert solution. Stitch movement bilkul free ho jayegi."
    },
    estTime: {
      en: "1 - 2 Hours",
      hi: "1 - 2 घंटे",
      hinglish: "1 - 2 Hours"
    },
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "motor-repair",
    title: {
      en: "Motor Repair & Fitting",
      hi: "मोटर रिपेयर और फिटिंग",
      hinglish: "Motor Repair & Fitting"
    },
    category: {
      en: "Electrical Service",
      hi: "इलेक्ट्रिक सर्विस",
      hinglish: "Electrical Service"
    },
    description: {
      en: "Replacing worn copper carbons, adjusting speed pedal regulators, rewinding weak motors, and professional high-torque copper motor installations.",
      hi: "घिसे हुए कॉपर कार्बन बदलना, स्पीड पेडल रेगुलेटर ठीक करना, कमजोर मोटरों की रिवाइंडिंग और हैवी-ड्यूटी कॉपर मोटर फिटिंग का काम।",
      hinglish: "Copper carbon replacement, pedal speed regulator adjustments, motor rewinding aur new high-speed motor fitting services."
    },
    estTime: {
      en: "45 - 60 Mins",
      hi: "45 - 60 मिनट",
      hinglish: "45 - 60 Mins"
    },
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "needle-replacement",
    title: {
      en: "Needle Replacement & Check",
      hi: "सुई बदलना और जांच",
      hinglish: "Needle Replacement"
    },
    category: {
      en: "Quick Tune-Up",
      hi: "त्वरित ट्यून-अप",
      hinglish: "Quick Tune-Up"
    },
    description: {
      en: "Replacement of broken/bent needles with original Organ or Singer brand needles. Perfect calibration of needle clearance and thread-eye position.",
      hi: "टूटी या मुड़ी हुई सुइयों को हटाकर असली ऑर्गन (Organ) या सिंगर (Singer) सुई लगाना। सुई की ऊंचाई और धागे के छेद की स्थिति का सटीक मिलान करना।",
      hinglish: "Broken ya bent needles change karke high-quality original Organ or Singer needles install karna, proper clearance adjustment ke sath."
    },
    estTime: {
      en: "15 - 20 Mins",
      hi: "15 - 20 मिनट",
      hinglish: "15 - 20 Mins"
    },
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "timing-adjustment",
    title: {
      en: "Shuttle Timing Adjustment",
      hi: "शटल टाइमिंग समायोजन",
      hinglish: "Shuttle Timing Setting"
    },
    category: {
      en: "Precision Service",
      hi: "सटीक ट्यूनिंग",
      hinglish: "Precision Service"
    },
    description: {
      en: "Corrects hook-to-needle timing loops. Permanently resolves frustrating issues like skipped stitches (tapp marna) and frequent thread breakages.",
      hi: "हुक और सुई की टाइमिंग लूप को ठीक करना। बार-बार धागा टूटने और सिलाई छोड़ने (tapp marna) की समस्या का स्थायी समाधान।",
      hinglish: "Hook and needle timing adjustment. Isse baar-baar dhaaga todna (thread breakage) aur skipped stitches (tapp marna) ki problem solve hoti hai."
    },
    estTime: {
      en: "30 - 45 Mins",
      hi: "30 - 45 मिनट",
      hinglish: "30 - 45 Mins"
    },
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "noise-fix",
    title: {
      en: "Noise Fix & Lubrication",
      hi: "मशीन की आवाज़ बंद करना",
      hinglish: "Machine Noise Fix & Oiling"
    },
    category: {
      en: "Maintenance",
      hi: "रखरखाव",
      hinglish: "Maintenance"
    },
    description: {
      en: "Eliminates irritating metallic clanging noises. Deep lint removal, high-pressure oiling, and replacing worn plastic gears with heavy-duty steel options.",
      hi: "मशीन की तेज और परेशान करने वाली धात्विक आवाज को बंद करना। गहरी सफाई, हाई-प्रेशर ऑयलिंग और पुराने घिसे गियर्स को बदलना।",
      hinglish: "Heavy metal sound aur loud noise khatam karna. Complete lint clean karke high-grade lubrication and gear inspection."
    },
    estTime: {
      en: "30 - 50 Mins",
      hi: "30 - 50 मिनट",
      hinglish: "30 - 50 Mins"
    },
    image: "https://images.unsplash.com/photo-1584267326895-d849e7d1a89e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "complete-service",
    title: {
      en: "Complete Machine Service",
      hi: "पूर्ण मशीन सर्विस (ओवरहॉल)",
      hinglish: "Complete Machine Service"
    },
    category: {
      en: "Full Restorations",
      hi: "पूर्ण नवीनीकरण",
      hinglish: "Full Restorations"
    },
    description: {
      en: "Comprehensive service: total disassembly, rust treatment, internal oil bathing, feed-dog cleaning, stitch quality test-run, and exterior body polishing.",
      hi: "व्यापक सर्विस: मशीन को पूरी तरह खोलकर साफ करना, जंग हटाना, गहराई से ऑयलिंग, कपड़े की फीडिंग ठीक करना और सिलाई का उत्तम परीक्षण।",
      hinglish: "Full service: parts open karke clean karna, rust treatment, gear oiling, stitch length setting checks aur beautiful finish polishing."
    },
    estTime: {
      en: "2 - 3 Hours",
      hi: "2 - 3 घंटे",
      hinglish: "2 - 3 Hours"
    },
    image: "https://images.unsplash.com/photo-1530124560612-3df96b0575b4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "installation",
    title: {
      en: "Professional Installation",
      hi: "सिलाई मशीन इंस्टॉलेशन",
      hinglish: "Machine Installation & Demo"
    },
    category: {
      en: "Setup & Assembly",
      hi: "सेटअप और असेंबली",
      hinglish: "Setup & Assembly"
    },
    description: {
      en: "Heavy-duty wooden table assembly, metallic leg stand alignment, precise belt-tension setup, motor fitting, and beginner-friendly sewing demonstration.",
      hi: "मजबूत लकड़ी की मेज की असेंबली, लोहे के पैर के स्टैंड की फिटिंग, बेल्ट की सही सेटिंग, मोटर इंस्टॉलेशन और शुरुआती लोगों के लिए लाइव डेमो।",
      hinglish: "Wooden table assembly, metal stand balance setting, belt fitting, motor synchronization aur basic stitching demo instructions."
    },
    estTime: {
      en: "1 - 1.5 Hours",
      hi: "1 - 1.5 घंटे",
      hinglish: "1 - 1.5 Hours"
    },
    image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "home-visit",
    title: {
      en: "Doorstep Home Visit",
      hi: "घर पर रिपेयर सर्विस (होम विजिट)",
      hinglish: "Doorstep Home Visit"
    },
    category: {
      en: "On-Site Service",
      hi: "ऑन-साइट सर्विस",
      hinglish: "On-Site Service"
    },
    description: {
      en: "Skip carrying heavy sewing machines to the market! Schedule an expert local mechanic home visit within Ajmer for maximum comfort and live repair.",
      hi: "बाजार में भारी सिलाई मशीन ले जाने की परेशानी से बचें! अधिकतम आराम और तुरंत समाधान के लिए अजमेर शहर में हमारे एक्सपर्ट मैकेनिक को घर बुलाएं।",
      hinglish: "Heavy machine market le jaane ki tension nahi! Hamare expert technician aapke ghar aakar machine live repair karenge, full convenience ke sath."
    },
    estTime: {
      en: "Flexible Schedule",
      hi: "सुविधानुसार समय",
      hinglish: "Flexible Schedule"
    },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "annual-maintenance",
    title: {
      en: "Annual Maintenance (AMC)",
      hi: "वार्षिक रखरखाव अनुबंध",
      hinglish: "Annual Maintenance Plan"
    },
    category: {
      en: "Business Priority",
      hi: "व्यावसायिक प्राथमिकता",
      hinglish: "Business Priority"
    },
    description: {
      en: "Tailored for boutique designers, sewing schools, and garment manufacturing units. Regular quarterly checks, free emergency visits, and flat 15% discount on spares.",
      hi: "बुटीक डिजाइनरों, सिलाई स्कूलों और गारमेंट फैक्ट्रियों के लिए विशेष। नियमित त्रैमासिक जांच, मुफ्त आपातकालीन विज़िट और स्पेयर पार्ट्स पर फ्लैट 15% छूट।",
      hinglish: "Boutiques aur tailoring factories ke liye priority contract. Har quarter routine checks, urgent free support visits aur genuine spare parts par heavy discount."
    },
    estTime: {
      en: "1 Year Contract",
      hi: "1 साल का अनुबंध",
      hinglish: "1 Year Contract"
    },
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  }
];

export default function RepairServices() {
  const { language, tObj } = useLanguage();
  const ui = tObj('repairservices');

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsAppBooking = (serviceTitle: string) => {
    const text = encodeURIComponent(`Hello Kesarganj Sewing Machine! I want to book the "${serviceTitle}" repair service. Please coordinate with me for slot availability.`);
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'referrerpolicy=no-referrer');
  };

  // List of process icons corresponding to the 5 steps
  const processIcons = [
    <PhoneCall className="w-6 h-6 text-primary" />,
    <Search className="w-6 h-6 text-primary" />,
    <Wrench className="w-6 h-6 text-primary" />,
    <CheckSquare className="w-6 h-6 text-primary" />,
    <Truck className="w-6 h-6 text-primary" />
  ];

  return (
    <div id="repair-services-page" className="space-y-12 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      
      {/* 1. HERO HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-primary rounded-lg text-xs font-bold uppercase tracking-widest border border-slate-100 shadow-3xs">
          <Award className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span>{ui.guaranteeTitle}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-none">
          {ui.title}
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
          {ui.subtitle}
        </p>
      </div>

      {/* 2. REPAIR PROCESS SECTION (Horizontal on desktop, vertical on mobile) */}
      <section id="repair-process-workflow" className="bg-slate-50 border border-slate-200/60 p-6 sm:p-8 rounded-3xl space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-primary flex items-center justify-center gap-2">
            <Sliders className="w-5 h-5 text-accent" />
            <span>{ui.processHeading}</span>
          </h2>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            {ui.processSub}
          </p>
        </div>

        {/* 5-Step visual timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative pt-4">
          {ui.processSteps.map((step: any, idx: number) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 relative group">
              
              {/* Step circle with Lucide Icon */}
              <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-200 shadow-3xs flex items-center justify-center relative z-10 group-hover:border-accent transition-colors">
                {processIcons[idx]}
                {/* Step badge number */}
                <span className="absolute -top-1 -right-1 bg-accent text-primary font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-white">
                  {idx + 1}
                </span>
              </div>

              {/* Connecting arrow/line layout (for large screen horizontal connections) */}
              {idx < 4 && (
                <div className="hidden md:block absolute top-7 left-[65%] w-full h-[2px] bg-slate-200 z-0">
                  <div className="absolute right-0 -top-1 border-y-[4px] border-y-transparent border-l-[6px] border-l-slate-300" />
                </div>
              )}

              {/* Step info labels */}
              <div className="space-y-1 max-w-[180px]">
                <h4 className="font-bold text-primary text-xs sm:text-sm tracking-tight">{step.title}</h4>
                <p className="text-[10px] sm:text-xs text-slate-400 font-light leading-snug">{step.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES LIST GRID */}
      <section id="services-grid-section" className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-primary">
            {ui.servicesHeading}
          </h2>
          <p className="text-xs text-slate-500 max-w-lg mx-auto">
            {ui.servicesSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repairServicesData.map((service) => {
            const currentTitle = service.title[language] || service.title['hinglish'];
            const currentCategory = service.category[language] || service.category['hinglish'];
            const currentDescription = service.description[language] || service.description['hinglish'];
            const currentEstTime = service.estTime[language] || service.estTime['hinglish'];

            return (
              <div 
                key={service.id} 
                className="bg-white border border-slate-150 rounded-2xl overflow-hidden flex flex-col justify-between shadow-3xs hover:shadow-2xs transition-all duration-300"
              >
                
                {/* Card Top: Image & badge */}
                <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={service.image} 
                    alt={currentTitle}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">
                    {currentCategory}
                  </span>
                </div>

                {/* Card Middle: Content details */}
                <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                  
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-primary text-base sm:text-lg leading-tight tracking-tight">
                      {currentTitle}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      {currentDescription}
                    </p>
                  </div>

                  {/* Card Metadata: Time Indicator */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-50 text-[11px] font-bold text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{ui.timeLabel}:</span>
                    <span className="text-primary font-black uppercase">{currentEstTime}</span>
                  </div>

                </div>

                {/* Card Bottom: Action buttons */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={handleCall}
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-black transition-all shadow-3xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{ui.callBtn}</span>
                  </button>
                  <button
                    onClick={() => handleWhatsAppBooking(currentTitle)}
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl text-xs font-black transition-all shadow-3xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>{ui.whatsappBtn}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CLINICAL PROMISE CALLOUT BANNER */}
      <section id="quality-guarantee-banner" className="bg-primary text-white p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-extrabold flex items-center justify-center md:justify-start gap-2 text-accent">
            <HeartHandshake className="w-5 h-5 text-accent" />
            <span>{ui.guaranteeTitle}</span>
          </h3>
          <p className="text-xs text-slate-200 max-w-xl font-light">
            {ui.guaranteeText}
          </p>
          <p className="text-[11px] text-accent font-semibold pt-1">
            {ui.visitShopText}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 shrink-0">
          <button 
            onClick={handleCall}
            className="px-5 py-3 bg-white text-primary rounded-xl text-xs font-black shadow-xs hover:bg-slate-100 transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>{ui.callBtn}</span>
          </button>
          <button 
            onClick={() => handleWhatsAppBooking("Doorstep Home Visit")}
            className="px-5 py-3 bg-[#25D366] text-white rounded-xl text-xs font-black shadow-xs hover:bg-[#128C7E] transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{ui.whatsappBtn}</span>
          </button>
        </div>
      </section>

    </div>
  );
}
