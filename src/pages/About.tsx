import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Heart, 
  Award, 
  ShieldCheck, 
  Users, 
  Wrench, 
  Clock, 
  Sparkles, 
  Compass, 
  Target, 
  MapPin, 
  Coffee,
  CheckCircle,
  TrendingUp,
  Flame,
  Scissors
} from 'lucide-react';

interface LocalizedData {
  tag: string;
  title: string;
  subtitle: string;
  
  // Story Section
  storyTitle: string;
  storyP1: string;
  storyP2: string;
  storyP3: string;
  
  // Owner Section
  ownerTitle: string;
  ownerSub: string;
  ownerName: string;
  ownerQuote: string;
  ownerBio: string;
  
  // Stats
  experienceLabel: string;
  machinesLabel: string;
  tailorsLabel: string;
  
  // Mission & Vision
  missionTitle: string;
  missionDesc: string;
  visionTitle: string;
  visionDesc: string;
  
  // Why Trust Us
  trustTitle: string;
  trustReason1Title: string;
  trustReason1Desc: string;
  trustReason2Title: string;
  trustReason2Desc: string;
  trustReason3Title: string;
  trustReason3Desc: string;
  trustReason4Title: string;
  trustReason4Desc: string;
  
  // Workshop Photos Section
  workshopPhotosTitle: string;
  workshopPhotosSub: string;
  photo1Caption: string;
  photo2Caption: string;
  photo3Caption: string;
  photo4Caption: string;
  
  // Timeline Section
  timelineTitle: string;
  timelineSub: string;
  t1995Title: string;
  t1995Desc: string;
  t2002Title: string;
  t2002Desc: string;
  t2012Title: string;
  t2012Desc: string;
  t2020Title: string;
  t2020Desc: string;
  tTodayTitle: string;
  tTodayDesc: string;
  
  // Call to Action
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}




import imgAbout1 from '../assets/images/showroom_1787917810814.webp';
import imgAbout2 from '../assets/images/founder_mechanic_1787918007898.webp';
import imgAbout3 from '../assets/images/sewing_workshop_1787917956853.webp';
import imgAbout4 from '../assets/images/sewing_parts_1787917897263.webp';
import imgAbout5 from '../assets/images/industrial_machine_1787917855508.webp';
import imgAbout6 from '../assets/images/needle_thread_1787917940769.webp';

export default function About() {
  const { language, tObj } = useLanguage();
  const c = tObj('about');

  return (
    <div id="about-page-container" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 pb-20">
      
      {/* 1. HERO HEADER SECTION */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-primary rounded-lg text-xs font-bold uppercase tracking-widest border border-slate-100 shadow-3xs">
          <Heart className="w-3.5 h-3.5 text-accent animate-pulse fill-accent" />
          <span>{c.tag}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-none">
          {c.title}
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
          {c.subtitle}
        </p>
      </div>

      {/* 2. THE STORY SECTION - friendly, local tone */}
      <section id="shop-story-section" className="bg-white border border-slate-150 rounded-3xl p-6 sm:p-10 shadow-3xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Photo Frame representing the cozy showroom */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-accent rounded-2xl rotate-2 group-hover:rotate-1 transition-transform duration-300"></div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
            <img 
              src={imgAbout1}
              alt="Kamal Showroom Setup"
              className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            {/* Local Badge Overlaid */}
            <div className="absolute bottom-4 left-4 bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Kesarganj, Ajmer</span>
            </div>
          </div>
        </div>

        {/* Right Side: Deep Story Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-accent text-[11px] font-black uppercase tracking-widest block">Since 1995</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              {c.storyTitle}
            </h2>
          </div>
          
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
            <p>{c.storyP1}</p>
            <p>{c.storyP2}</p>
            <p>{c.storyP3}</p>
          </div>

          {/* Quick Real Achievements/Stats Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
              <span className="block text-xl sm:text-2xl font-black text-primary">30+</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold tracking-wide block uppercase leading-tight">{c.experienceLabel}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
              <span className="block text-xl sm:text-2xl font-black text-primary">10K+</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold tracking-wide block uppercase leading-tight">{c.machinesLabel}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
              <span className="block text-xl sm:text-2xl font-black text-primary">2.5K+</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold tracking-wide block uppercase leading-tight">{c.tailorsLabel}</span>
            </div>
          </div>
        </div>

      </section>

      {/* 3. OWNER SECTION - highly personalized & friendly */}
      <section id="owner-introduction-section" className="bg-secondary/15 border border-slate-150 rounded-3xl p-6 sm:p-10 shadow-3xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Friendly Bio */}
        <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
          <div className="space-y-2">
            <span className="text-primary text-[10px] font-black uppercase tracking-widest bg-white border border-slate-100 rounded-md px-2.5 py-1 inline-block">
              {c.ownerSub}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              {c.ownerName}
            </h2>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
            {c.ownerBio}
          </p>

          {/* Hand-written / Styled Local Quote */}
          <div className="relative p-5 bg-white rounded-2xl border border-slate-150/80 shadow-3xs">
            <div className="absolute top-3 left-3 text-3xl font-serif text-accent/30 line-height-none">“</div>
            <p className="text-primary font-medium text-xs sm:text-sm italic px-4 leading-relaxed">
              {c.ownerQuote}
            </p>
          </div>

          {/* Genuine Local Trust Sign-off */}
          <div className="flex items-center gap-3 pt-2">
            <div className="p-2 bg-primary text-white rounded-full">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-bold text-primary">Dinesh Sharma & Family</span>
              <span className="block text-[10px] text-slate-500">Kamal Sewing Machines, Ajmer</span>
            </div>
          </div>
        </div>

        {/* Right Side: Owner Placeholder (Friendly elder portrait concept) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative group max-w-sm mx-auto">
            <div className="absolute inset-0 bg-primary rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100">
              <img 
                src={imgAbout2}
                alt="Shri Dinesh Sharma - Head Mechanic & Founder"
                className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay with friendly tag */}
              <div className="absolute top-3 right-3 bg-[#25D366] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                Active in Shop Today
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 4. MISSION & VISION - simple down-to-earth statements */}
      <section id="mission-vision-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Mission Card */}
        <div className="bg-white border border-slate-150 p-6 sm:p-8 rounded-3xl shadow-3xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 text-primary flex items-center justify-center">
            <Target className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-primary tracking-tight">
            {c.missionTitle}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
            {c.missionDesc}
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white border border-slate-150 p-6 sm:p-8 rounded-3xl shadow-3xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Compass className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-primary tracking-tight">
            {c.visionTitle}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
            {c.visionDesc}
          </p>
        </div>

      </section>

      {/* 5. WORKSHOP PHOTOS GRID */}
      <section id="workshop-photos-gallery" className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-primary tracking-tight">
            {c.workshopPhotosTitle}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light">
            {c.workshopPhotosSub}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Photo 1 */}
          <div className="group relative bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-3xs hover:shadow-2xs transition-all duration-300">
            <div className="overflow-hidden bg-slate-50 h-48 sm:h-56">
              <img 
                src={imgAbout3} 
                alt="Precision calibration workstation" 
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-3 border-t border-slate-50 text-center">
              <span className="text-[11px] font-bold text-primary block truncate">
                {c.photo1Caption}
              </span>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="group relative bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-3xs hover:shadow-2xs transition-all duration-300">
            <div className="overflow-hidden bg-slate-50 h-48 sm:h-56">
              <img 
                src={imgAbout4} 
                alt="Original metallic spare parts on shelf" 
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-3 border-t border-slate-50 text-center">
              <span className="text-[11px] font-bold text-primary block truncate">
                {c.photo2Caption}
              </span>
            </div>
          </div>

          {/* Photo 3 */}
          <div className="group relative bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-3xs hover:shadow-2xs transition-all duration-300">
            <div className="overflow-hidden bg-slate-50 h-48 sm:h-56">
              <img 
                src={imgAbout5} 
                alt="Repairing manual or industrial heads" 
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-3 border-t border-slate-50 text-center">
              <span className="text-[11px] font-bold text-primary block truncate">
                {c.photo3Caption}
              </span>
            </div>
          </div>

          {/* Photo 4 */}
          <div className="group relative bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-3xs hover:shadow-2xs transition-all duration-300">
            <div className="overflow-hidden bg-slate-50 h-48 sm:h-56">
              <img 
                src={imgAbout6} 
                alt="Testing double lock stitch strength" 
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-3 border-t border-slate-50 text-center">
              <span className="text-[11px] font-bold text-primary block truncate">
                {c.photo4Caption}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. WHY CUSTOMERS TRUST US */}
      <section id="trust-factors-section" className="space-y-8 bg-white border border-slate-150 rounded-3xl p-6 sm:p-10 shadow-3xs">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            {c.trustTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Reason 1 */}
          <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="p-2 bg-white text-primary rounded-xl shrink-0 shadow-3xs border border-slate-150">
              <ShieldCheck className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-primary text-sm sm:text-base leading-snug">
                {c.trustReason1Title}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {c.trustReason1Desc}
              </p>
            </div>
          </div>

          {/* Reason 2 */}
          <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="p-2 bg-white text-primary rounded-xl shrink-0 shadow-3xs border border-slate-150">
              <Award className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-primary text-sm sm:text-base leading-snug">
                {c.trustReason2Title}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {c.trustReason2Desc}
              </p>
            </div>
          </div>

          {/* Reason 3 */}
          <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="p-2 bg-white text-primary rounded-xl shrink-0 shadow-3xs border border-slate-150">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-primary text-sm sm:text-base leading-snug">
                {c.trustReason3Title}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {c.trustReason3Desc}
              </p>
            </div>
          </div>

          {/* Reason 4 */}
          <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="p-2 bg-white text-primary rounded-xl shrink-0 shadow-3xs border border-slate-150">
              <Users className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-primary text-sm sm:text-base leading-snug">
                {c.trustReason4Title}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {c.trustReason4Desc}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. BUSINESS TIMELINE JOURNEY */}
      <section id="business-timeline-section" className="space-y-10 bg-white border border-slate-150 rounded-3xl p-6 sm:p-10 shadow-3xs">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-accent text-[10px] font-black uppercase tracking-widest block">Our Milestones</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            {c.timelineTitle}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light">
            {c.timelineSub}
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l-2 border-slate-150/80 space-y-10 py-2">
          
          {/* Milestone 1: 1995 */}
          <div className="relative">
            {/* Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-3xs">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-primary text-base sm:text-lg flex items-center gap-2">
                <Scissors className="w-4 h-4 text-accent" />
                <span>{c.t1995Title}</span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {c.t1995Desc}
              </p>
            </div>
          </div>

          {/* Milestone 2: 2002 */}
          <div className="relative">
            {/* Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-3xs">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-primary text-base sm:text-lg flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{c.t2002Title}</span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {c.t2002Desc}
              </p>
            </div>
          </div>

          {/* Milestone 3: 2012 */}
          <div className="relative">
            {/* Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-3xs">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-primary text-base sm:text-lg flex items-center gap-2">
                <Wrench className="w-4 h-4 text-accent" />
                <span>{c.t2012Title}</span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {c.t2012Desc}
              </p>
            </div>
          </div>

          {/* Milestone 4: 2020 */}
          <div className="relative">
            {/* Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-3xs">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-primary text-base sm:text-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>{c.t2020Title}</span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {c.t2020Desc}
              </p>
            </div>
          </div>

          {/* Milestone 5: Today */}
          <div className="relative">
            {/* Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4.5 h-4.5 rounded-full bg-accent text-white flex items-center justify-center shadow-2xs">
              <CheckCircle className="w-3.5 h-3.5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-primary text-base sm:text-lg flex items-center gap-2 text-accent">
                <TrendingUp className="w-4 h-4" />
                <span>{c.tTodayTitle}</span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {c.tTodayDesc}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. CALL TO ACTION - cozy local invitation */}
      <section id="about-cta-banner" className="bg-primary text-white p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-3xs">
        <div className="space-y-2 text-center md:text-left max-w-xl">
          <h3 className="text-lg sm:text-xl font-extrabold flex items-center justify-center md:justify-start gap-2 text-accent">
            <Coffee className="w-5 h-5 text-accent animate-bounce" />
            <span>{c.ctaTitle}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
            {c.ctaDesc}
          </p>
        </div>
        <a 
          href="https://maps.google.com/?q=Kesarganj+Ajmer"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-accent text-primary hover:bg-opacity-90 rounded-xl text-xs font-black shadow-xs transition-transform hover:scale-105 shrink-0 flex items-center gap-2"
        >
          <MapPin className="w-4 h-4" />
          <span>{c.ctaBtn}</span>
        </a>
      </section>

    </div>
  );
}
