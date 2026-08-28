import heroImage from '../assets/images/hero_sewing_machine_1783011718022.webp';
import { useState, FormEvent } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Scissors, 
  Award, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Settings, 
  Wrench, 
  Truck, 
  Tag, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  User, 
  Send, 
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { motion } from 'motion/react';

import UshaJanome from '../assets/images/usha_janome_1787917423551.webp';
import SingerPromise from '../assets/images/singer_promise_1787917439528.webp';
import JackF5 from '../assets/images/jack_f5_1787917457448.webp';
import MerrittDeluxe from '../assets/images/merritt_deluxe_1787917475818.webp';

const featuredImages = [UshaJanome, SingerPromise, JackF5, MerrittDeluxe];

interface HomeProps {
  onViewChange: (view: any) => void;
}

// Complete local translation dictionary for 100% accurate localization across En, Hi, and Hinglish


export default function Home({ onViewChange }: HomeProps) {
  const { language, tObj } = useLanguage();
  
  // Safe fallback to 'hinglish' if the active language isn't explicitly defined in local dictionary
  const currentLang = tObj('home');

  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // States for Contact Form
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Fixed static business parameters for Kamal Sewing Machines Shop
  const shopPhone = "+919876543210";
  const whatsappText = encodeURIComponent("Hello! I am viewing your Kamal Sewing Machines website. I have an inquiry about sales/repair services.");
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappText}`;
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Kesarganj+Ajmer+Rajasthan+305001";

  // Handle FAQ Click Toggle
  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // Submit Contact Form
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError(language === 'hi' ? 'कृपया अपना नाम दर्ज करें।' : 'Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setFormError(language === 'hi' ? 'कृपया एक वैध 10-अंकीय फ़ोन नंबर दर्ज करें।' : 'Please enter a valid 10-digit phone number.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
    // Reset form after a successful simulated submission
    setFormData({
      name: '',
      phone: '',
      inquiryType: '',
      message: ''
    });
  };

  return (
    <div id="home-page-container" className="space-y-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-10">
      
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 lg:p-12 shadow-xs overflow-hidden">
        {/* Decorative corner background blur */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-secondary/20 blur-3xl -z-10" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-10" />

        {/* Hero Left: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-primary rounded-lg text-xs font-bold uppercase tracking-widest"
          >
            <Award className="w-4 h-4 text-accent" />
            <span>{currentLang.hero.tagline}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight tracking-tight"
          >
            {currentLang.hero.headline}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-bold text-accent tracking-wide"
          >
            {currentLang.hero.subheading}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed font-light max-w-xl"
          >
            {currentLang.hero.description}
          </motion.p>

          {/* Hero Buttons Block */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4"
          >
            {/* Call Now */}
            <a
              id="hero-call-btn"
              href={`tel:${shopPhone}`}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl font-bold text-sm shadow-sm hover:bg-[#1f4e5a] hover:shadow-md transition-all text-center"
            >
              <Phone className="w-4 h-4" />
              <span>{currentLang.hero.callBtn}</span>
            </a>

            {/* WhatsApp */}
            <a
              id="hero-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-bold text-sm shadow-sm hover:bg-[#1ebb59] hover:shadow-md transition-all text-center"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{currentLang.hero.whatsappBtn}</span>
            </a>

            {/* Directions */}
            <a
              id="hero-directions-btn"
              href={directionsUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-sm hover:border-accent hover:text-accent transition-all text-center"
            >
              <Navigation className="w-4 h-4 text-accent" />
              <span>{currentLang.hero.directionsBtn}</span>
            </a>
          </motion.div>
        </div>

        {/* Hero Right: Large Generated Sewing Machine Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md aspect-[16/11]">
            <img 
              src={heroImage} 
              alt="Kamal Sewing Machines Showroom Ajmer" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              width="800"
              height="550"
            />
            {/* Soft gradient overlay to fit text overlay if necessary, and beautiful shading */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
          {/* Badge attached to Image */}
          <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-xs border border-slate-200/60 shadow-md p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary text-primary rounded-lg flex items-center justify-center font-black">
              25+
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Established</p>
              <p className="text-xs font-extrabold text-primary mt-1">Kesarganj, Ajmer (1995)</p>
            </div>
          </div>
        </motion.div>
      </section>


      {/* 2. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            {currentLang.whyChooseUs.title}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
            {currentLang.whyChooseUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {currentLang.whyChooseUs.items.map((item: any, idx: number) => {
            // Pick specific icons for each feature point
            const icons = [Award, Wrench, Settings, Truck, Tag];
            const IconComponent = icons[idx] || Award;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between hover:border-secondary"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-secondary/50 text-primary rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-extrabold text-sm text-primary">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* 3. SERVICES SECTION */}
      <section id="services-section" className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/50 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-md">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight pt-2">
            {currentLang.services.title}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
            {currentLang.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLang.services.items.map((item: any, idx: number) => {
            // Map unique icons for services
            const icons = [Scissors, Wrench, Settings, Clock, Settings, ShieldCheck];
            const IconComponent = icons[idx] || Settings;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-200/70 p-6 rounded-2xl flex flex-col justify-between hover:border-primary/50 hover:shadow-xs transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-primary">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
                </div>

                <div className="pt-6 border-t border-slate-50 mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Professional Work</span>
                  <button 
                    onClick={() => {
                      if (idx === 1 || idx === 3) onViewChange('repair');
                      else if (idx === 0 || idx === 4 || idx === 5) onViewChange('machines');
                      else onViewChange('contact');
                    }}
                    className="text-xs font-bold text-primary group-hover:text-accent transition-colors flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* 4. BRANDS SECTION */}
      <section id="brands-section" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-extrabold text-primary tracking-tight">
            {currentLang.brands.title}
          </h2>
          <p className="text-slate-400 text-xs font-light">
            {currentLang.brands.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {[
            { name: "USHA", color: "border-blue-100 text-blue-600 hover:bg-blue-50/30", sub: "Janome Partners" },
            { name: "SINGER", color: "border-red-100 text-red-600 hover:bg-red-50/30", sub: "Since 1851" },
            { name: "JACK", color: "border-indigo-100 text-indigo-600 hover:bg-indigo-50/30", sub: "Industrial Leader" },
            { name: "BROTHER", color: "border-slate-200 text-slate-800 hover:bg-slate-100/30", sub: "Embroidery Tech" },
            { name: "MERRITT", color: "border-amber-100 text-amber-700 hover:bg-amber-50/30", sub: "Classic Durable" }
          ].map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`bg-white border rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 shadow-3xs cursor-default ${brand.color}`}
            >
              <span className="text-lg sm:text-xl font-black tracking-wider leading-none">{brand.name}</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{brand.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 5. FEATURED MACHINES SECTION */}
      <section id="featured-machines" className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-secondary/40 text-primary px-3 py-1 rounded-md">
            Best Selling Models
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight pt-2">
            {currentLang.featured.title}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
            {currentLang.featured.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentLang.featured.items.map((machine: any, idx: number) => {
            // Distinct prefilled inquiry link for each machine
            const machineInquiryText = encodeURIComponent(`Hi, I am interested in buying the "${machine.name}" (${machine.category}) sewing machine shown on your Kamal Sewing Machines website. Please share the current offer price and stock availability.`);
            const machineWhatsappUrl = `https://wa.me/919876543210?text=${machineInquiryText}`;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-accent hover:shadow-xs transition-all group"
              >
                {/* Visual Thumbnail Frame */}
                <div className="bg-slate-50/75 aspect-video flex flex-col items-center justify-center relative border-b border-slate-100 overflow-hidden">
                  <div className="absolute top-3 left-3 bg-white/90 border border-slate-200 text-primary font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md z-10 shadow-sm">
                    {machine.category}
                  </div>
                  <img src={featuredImages[idx]} alt={machine.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-primary text-base group-hover:text-accent transition-colors leading-snug">
                      {machine.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-2">
                      {machine.desc}
                    </p>
                  </div>

                  {/* Machine Specifications */}
                  <div className="bg-slate-50 p-3 rounded-lg text-[10px] text-slate-600 space-y-1">
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-400 uppercase">{currentLang.featured.speed}:</span>
                      <span className="font-semibold">{machine.speed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-400 uppercase">{currentLang.featured.warranty}:</span>
                      <span className="font-semibold text-accent">{machine.warranty}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-50 pt-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold leading-none">Best Store Price</p>
                        <p className="text-lg font-black text-primary mt-1">{machine.price}</p>
                      </div>
                    </div>
                    
                    <a
                      href={machineWhatsappUrl}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-full inline-flex items-center justify-center gap-2 mt-3.5 py-2.5 bg-[#25D366] text-white hover:bg-[#1ebb59] font-bold text-xs rounded-xl transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>{currentLang.featured.enquire}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* 6. CUSTOMER REVIEWS SECTION */}
      <section id="customer-reviews" className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/50 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-md">
            Customer Love
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight pt-2">
            {currentLang.reviews.title}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
            {currentLang.reviews.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentLang.reviews.items.map((review: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="space-y-4">
                {/* Review Header: Stars & Google Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {/* Styled Google badge */}
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                    <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center font-bold text-blue-500">G</span>
                    <span>Google Review</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-light italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-extrabold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">{review.name}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">{review.role}</p>
                </div>
                <span className="text-[9px] text-slate-300 ml-auto font-mono">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 7. FAQ ACCORDION SECTION */}
      <section id="faq-section" className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            {currentLang.faq.title}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light">
            {currentLang.faq.subtitle}
          </p>
        </div>

        <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-3xs divide-y divide-slate-100">
          {currentLang.faq.items.map((item: any, idx: number) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="transition-all">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-primary hover:bg-slate-50/50 transition-colors cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-accent shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed font-light"
                  >
                    {item.a}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* 8. CONTACT SECTION WITH GOOGLE MAP AND FORM */}
      <section id="contact-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-secondary/10 blur-2xl pointer-events-none" />

        {/* Contact info & Google Map */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              {currentLang.contact.title}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
              {currentLang.contact.subtitle}
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-600 font-light">
            <div className="space-y-1">
              <p className="font-bold text-primary flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{currentLang.contact.addressHeader}</span>
              </p>
              <p className="leading-relaxed pl-5 mt-1">{currentLang.contact.address}</p>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-primary flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <Clock className="w-4 h-4 text-accent" />
                <span>{currentLang.contact.hoursHeader}</span>
              </p>
              <p className="leading-relaxed pl-5 mt-1">{currentLang.contact.hours}</p>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-primary flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <Phone className="w-4 h-4 text-accent" />
                <span>{currentLang.contact.phoneHeader}</span>
              </p>
              <p className="pl-5 mt-1">
                <a href={`tel:${shopPhone}`} className="hover:text-accent font-semibold transition-colors">+91 98765 43210</a>
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-primary flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-current" />
                <span>{currentLang.contact.whatsappHeader}</span>
              </p>
              <p className="pl-5 mt-1">
                <a href={whatsappUrl} target="_blank" referrerPolicy="no-referrer" className="hover:text-accent font-semibold transition-colors">WhatsApp Support</a>
              </p>
            </div>
          </div>

          {/* Google Maps Real Iframe */}
          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-3xs h-64 relative bg-slate-50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.7451555519895!2d74.6315803!3d26.4639534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be70281b37e8b%3A0xe9f7c00e6dc84e49!2sKesarganj%2C%20Ajmer%2C%20Rajasthan%20305001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              title="Kamal Sewing Machines, Ajmer, Google Map"
              referrerPolicy="no-referrer"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/50 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-primary">{currentLang.contact.formHeader}</h3>
              <p className="text-[11px] text-slate-400 font-light">We usually respond on WhatsApp or Mobile call within 2 hours.</p>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xs">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-emerald-800 text-base">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700 font-light leading-relaxed">
                    {currentLang.contact.formSuccess}
                  </p>
                </div>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {formError && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs px-4 py-2.5 rounded-lg font-medium">
                    {formError}
                  </div>
                )}

                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">{currentLang.contact.formName}</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={currentLang.namePlaceholder}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:border-accent focus:outline-hidden text-slate-800 font-medium"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">{currentLang.contact.formPhone}</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={currentLang.phonePlaceholder}
                    maxLength={15}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:border-accent focus:outline-hidden text-slate-800 font-medium"
                  />
                </div>

                {/* Inquiry Type Select */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">{currentLang.contact.formSelect}</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:border-accent focus:outline-hidden text-slate-700 font-medium cursor-pointer"
                  >
                    <option value="">-- {currentLang.contact.formSelect} --</option>
                    <option value="Sales">{currentLang.contact.formSelectOpt1}</option>
                    <option value="Repair">{currentLang.contact.formSelectOpt2}</option>
                    <option value="Spare Parts">{currentLang.contact.formSelectOpt3}</option>
                    <option value="General">{currentLang.contact.formSelectOpt4}</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">{currentLang.contact.formMessage}</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={currentLang.messagePlaceholder}
                    rows={3}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:border-accent focus:outline-hidden text-slate-800 font-light resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white hover:bg-[#1f4e5a] font-bold text-xs rounded-xl shadow-xs hover:shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{currentLang.contact.formBtn}</span>
                </button>

              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
