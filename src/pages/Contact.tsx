import React, { useState, FormEvent } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  ExternalLink, 
  Navigation, 
  Sparkles,
  Heart
} from 'lucide-react';



export default function Contact() {
  const { language, tObj } = useLanguage();
  const c = tObj('contact');

  const [formData, setFormData] = useState({ name: '', phone: '', service: 'sales', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneNumbers = "+919876543210";
  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20Kamal%20Sewing%20Machines!%20I%20visited%20your%20website%20and%20wanted%20to%20ask%20about...";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', service: 'sales', message: '' });
    }, 5000);
  };

  return (
    <div id="contact-page-container" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 pb-24 relative">
      
      {/* 1. HERO HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-primary rounded-lg text-xs font-bold uppercase tracking-widest border border-slate-100 shadow-3xs">
          <Heart className="w-3.5 h-3.5 text-accent animate-pulse fill-accent" />
          <span>Local Trust Since 1995</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-none animate-fade-in">
          {c.title}
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
          {c.subtitle}
        </p>
      </div>

      {/* 2. CORE INTERACTION AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 items-stretch">
        
        {/* Left Column: Dukaan Details Card */}
        <div className="lg:col-span-5 bg-white border border-slate-150 rounded-3xl p-6 sm:p-8 space-y-8 flex flex-col justify-between shadow-3xs hover:shadow-2xs transition-shadow duration-300">
          
          <div className="space-y-6">
            <h3 className="text-lg font-black text-primary tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>{c.cardTitle}</span>
            </h3>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all hover:bg-slate-100/50">
                <div className="p-2 bg-white rounded-xl text-accent shadow-3xs border border-slate-150 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold text-primary text-xs uppercase tracking-wider">{c.addressTitle}</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{c.addressDetail}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all hover:bg-slate-100/50">
                <div className="p-2 bg-white rounded-xl text-accent shadow-3xs border border-slate-150 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold text-primary text-xs uppercase tracking-wider">{c.hoursTitle}</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{c.hoursDetail}</p>
                </div>
              </div>

              {/* Phone */}
              <a 
                href={`tel:${phoneNumbers}`}
                className="flex gap-4 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all hover:bg-slate-100/50 cursor-pointer group"
              >
                <div className="p-2 bg-white rounded-xl text-accent shadow-3xs border border-slate-150 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold text-primary text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span>{c.phoneTitle}</span>
                    <span className="text-[9px] bg-accent/20 text-primary px-1.5 py-0.5 rounded-sm normal-case font-black animate-pulse">Click to Call</span>
                  </p>
                  <p className="text-sm text-primary font-black">{c.phoneDetail}</p>
                  <p className="text-[10px] text-slate-400 font-light leading-none">{c.phoneSub}</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${c.emailDetail}`}
                className="flex gap-4 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all hover:bg-slate-100/50 cursor-pointer group"
              >
                <div className="p-2 bg-white rounded-xl text-accent shadow-3xs border border-slate-150 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold text-primary text-xs uppercase tracking-wider">{c.emailTitle}</p>
                  <p className="text-xs text-slate-600 font-bold break-all">{c.emailDetail}</p>
                  <p className="text-[10px] text-slate-400 font-light leading-none">{c.emailSub}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Connect Actions */}
          <div className="pt-6 border-t border-slate-100 space-y-4">
            <div className="text-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Immediate Assistance Call or Chat
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${phoneNumbers}`}
                className="flex items-center justify-center gap-2 py-3.5 bg-primary text-white rounded-xl text-xs font-black shadow-xs hover:bg-opacity-95 transition-transform hover:scale-102 cursor-pointer text-center"
              >
                <Phone className="w-4 h-4" />
                <span>{c.quickCallText}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white rounded-xl text-xs font-black shadow-xs hover:bg-[#128C7E] transition-transform hover:scale-102 cursor-pointer text-center"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                <span>{c.quickWaText}</span>
              </a>
            </div>
            
            {/* Get Directions Button */}
            <a
              href="https://maps.google.com/?q=Kesarganj+Ajmer"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent text-primary rounded-xl text-xs font-black shadow-xs hover:bg-opacity-90 transition-all cursor-pointer text-center"
            >
              <Navigation className="w-4 h-4 fill-primary" />
              <span>{c.getDirections}</span>
            </a>
          </div>

        </div>

        {/* Right Column: Quick Contact Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-slate-150 rounded-3xl p-6 sm:p-8 space-y-6 shadow-3xs hover:shadow-2xs transition-shadow duration-300 flex flex-col justify-between">
          
          <div className="space-y-2">
            <h3 className="text-lg font-black text-primary tracking-tight">{c.formTitle}</h3>
            <p className="text-slate-500 text-xs font-light leading-relaxed">{c.formSub}</p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-150 text-emerald-900 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-all duration-300">
              <CheckCircle className="text-emerald-500 shrink-0 w-8 h-8 mt-0.5" />
              <div className="space-y-2 text-center sm:text-left">
                <p className="text-base font-black text-emerald-800">{c.successTitle}</p>
                <p className="text-xs text-emerald-700/90 font-light leading-relaxed">{c.successDesc}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs font-semibold text-slate-700">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {c.labelName}
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={c.namePlaceholder}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-primary px-4 py-3.5 rounded-xl outline-none text-xs font-normal transition-all"
                  />
                </div>
                
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="form-phone" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {c.labelPhone}
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    title={c.phoneValidation}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={c.phonePlaceholder}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-primary px-4 py-3.5 rounded-xl outline-none text-xs font-normal transition-all"
                  />
                </div>
              </div>

              {/* Assistance Dropdown */}
              <div className="space-y-2">
                <label htmlFor="form-service" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {c.labelService}
                </label>
                <select
                  id="form-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-primary px-4 py-3.5 rounded-xl outline-none text-xs font-normal transition-all cursor-pointer"
                >
                  <option value="sales">{c.serviceBuy}</option>
                  <option value="repair">{c.serviceRepair}</option>
                  <option value="parts">{c.serviceParts}</option>
                  <option value="other">{c.serviceOther}</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="form-message" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {c.labelMessage}
                </label>
                <textarea
                  id="form-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={c.messagePlaceholder}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-primary px-4 py-3.5 rounded-xl outline-none text-xs font-normal resize-none transition-all"
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                id="submit-contact-inquiry-btn"
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-xl text-xs font-black tracking-widest hover:bg-opacity-95 cursor-pointer transition-all hover:scale-101 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>{c.submitBtn}</span>
              </button>

            </form>
          )}

        </div>

      </div>

      {/* 3. REAL GOOGLE MAP EMBED SECTION */}
      <section id="google-map-embed-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-extrabold text-primary tracking-tight">
              {c.mapsTitle}
            </h2>
            <p className="text-slate-500 text-xs font-light">
              {c.mapsAddressDesc}
            </p>
          </div>
          
          <a
            href="https://maps.google.com/?q=Kesarganj+Ajmer"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-primary border border-slate-250 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>{c.openMapsApp}</span>
          </a>
        </div>

        {/* Real Embedded IFrame Map Container */}
        <div className="bg-white border border-slate-150 p-2.5 rounded-3xl shadow-3xs overflow-hidden h-[400px] relative group">
          <iframe
            src="https://maps.google.com/maps?q=Kesarganj%20Ajmer&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            className="w-full h-full border-0 rounded-2xl select-none"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kamal Sewing Machines Shop Location Map"
          ></iframe>
        </div>
      </section>

      {/* 4. FLOATING COMMUNICATION ACTION BUTTONS */}
      {/* Floating Call Button on Bottom-Left */}
      <div className="fixed bottom-6 left-6 z-40 group">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xs scale-110 animate-ping"></div>
        <a 
          href={`tel:${phoneNumbers}`}
          className="relative flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-opacity-90 hover:scale-105 transition-all"
          aria-label={c.floatingCallTooltip}
          title={c.floatingCallTooltip}
        >
          <Phone className="w-5 h-5" />
        </a>
        
        {/* Floating label on hover */}
        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
          {c.floatingCallTooltip}
        </span>
      </div>

      {/* Floating WhatsApp Button on Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <div className="absolute inset-0 bg-[#25D366]/20 rounded-full blur-xs scale-110 animate-ping"></div>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-105 transition-all"
          aria-label={c.floatingWaTooltip}
          title={c.floatingWaTooltip}
        >
          <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
        </a>

        {/* Floating label on hover */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-black px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
          {c.floatingWaTooltip}
        </span>
      </div>

    </div>
  );
}
