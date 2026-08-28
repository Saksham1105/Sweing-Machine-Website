import { useState } from 'react';
import { useLanguage, LanguageType } from '../lib/LanguageContext';
import { Scissors, Phone, MessageSquare, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView: string;
  onViewChange: (view: any) => void;
  onPrefetch: (view: any) => void;
}

export default function Navbar({ currentView, onViewChange, onPrefetch }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = navIds.map((id) => ({ id, label: t(`nav.${id}`) }));
  const handleNavClick = (viewId: string) => { onViewChange(viewId); setIsOpen(false); };
  const phoneNumbers = '+919876543210';
  const whatsappUrl = 'https://wa.me/919876543210?text=Hello%2C%20I%20have%20a%20sewing%20machine%20sales%2Frepair%20inquiry.';

  return (
    <nav id="app-navbar" className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
      <div className="h-auto bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary sm:flex sm:h-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-0">
        <div className="flex items-center space-x-3 sm:space-x-6"><span>{t('nav.location')}</span><span className="hidden opacity-50 sm:inline">|</span><span>{t('nav.hours')}</span></div>
        <div className="mt-2 flex items-center space-x-4 sm:mt-0"><div className="flex rounded-full border border-primary/20 bg-white p-0.5 shadow-2xs" aria-label="Language selection">{(['en', 'hi', 'hinglish'] as LanguageType[]).map((option) => <button key={option} type="button" onClick={() => setLanguage(option)} aria-pressed={language === option} className={`rounded-full px-3 py-0.5 text-[10px] font-bold transition-all sm:py-1 ${language === option ? 'bg-primary text-white shadow-xs' : 'text-primary hover:bg-slate-50'}`}>{option === 'en' ? 'English' : option === 'hi' ? 'हिंदी' : 'Hinglish'}</button>)}</div></div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Area using the Geometric Balance container structure */}
          <div 
            id="brand-logo" 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-accent transition-colors">
              K
            </div>
            <div>
              <h1 className="text-primary font-extrabold text-lg sm:text-xl leading-tight tracking-tight uppercase">
                {t('nav.title')}
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-semibold">
                {t('nav.subtitle')}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => onPrefetch(item.id)}
                onFocus={() => onPrefetch(item.id)}
                onTouchStart={() => onPrefetch(item.id)}
                className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
                  currentView === item.id 
                    ? 'text-primary' 
                    : 'text-slate-600 hover:text-primary'
                }`}
              >
                {item.label}
                {currentView === item.id && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Controls: Quick Contact CTA Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Call Now */}
            <a
              id="cta-call-desktop"
              href={`tel:${phoneNumbers}`}
              className="bg-accent text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              {t('buttons.call')}
            </a>

            {/* WhatsApp */}
            <a
              id="cta-whatsapp-desktop"
              href={whatsappUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold bg-[#25D366] text-white hover:bg-[#128C7E] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden shadow-inner"
          >
            <div className="px-4 pt-3 pb-6 space-y-4">
              {/* Navigation Items */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`nav-item-mobile-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    onMouseEnter={() => onPrefetch(item.id)}
                    onFocus={() => onPrefetch(item.id)}
                    onTouchStart={() => onPrefetch(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      currentView === item.id
                        ? 'bg-secondary text-primary'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile CTA Action Buttons */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 px-2">
                <a
                  id="cta-call-mobile"
                  href={`tel:${phoneNumbers}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold bg-accent text-white hover:bg-opacity-95 transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('buttons.call')}</span>
                </a>

                <a
                  id="cta-whatsapp-mobile"
                  href={whatsappUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold bg-[#25D366] text-white hover:bg-[#128C7E] transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
