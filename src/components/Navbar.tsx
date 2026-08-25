import { useState } from 'react';
import { useLanguage, LanguageType } from '../lib/LanguageContext';
import type { View } from '../App';
import { Scissors, Phone, MessageSquare, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

const navIds: View[] = ['home', 'machines', 'repair', 'gallery', 'about', 'contact'];

export default function Navbar({ currentView, onViewChange }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = navIds.map((id) => ({ id, label: t(`nav.${id}`) }));

  const handleNavClick = (viewId: View) => {
    onViewChange(viewId);
    setIsOpen(false);
  };

  const phoneNumbers = '+919876543210';
  const whatsappUrl = 'https://wa.me/919876543210?text=Hello%2C%20I%20have%20a%20sewing%20machine%20sales%2Frepair%20inquiry.';

  return (
    <nav id="app-navbar" className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
      <div className="h-auto bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary sm:flex sm:h-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-0">
        <div className="flex items-center space-x-3 sm:space-x-6">
          <span>{t('nav.location')}</span>
          <span className="hidden opacity-50 sm:inline">|</span>
          <span>{t('nav.hours')}</span>
        </div>

        <div className="mt-2 flex items-center space-x-4 sm:mt-0">
          <div className="flex rounded-full border border-primary/20 bg-white p-0.5 shadow-2xs" aria-label="Language selection">
            {(['en', 'hi', 'hinglish'] as LanguageType[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                className={`rounded-full px-3 py-0.5 text-[10px] font-bold transition-all sm:py-1 ${
                  language === option ? 'bg-primary text-white shadow-xs' : 'text-primary hover:bg-slate-50'
                }`}
              >
                {option === 'en' ? 'English' : option === 'hi' ? 'हिंदी' : 'Hinglish'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            type="button"
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="group flex items-center space-x-3 text-left"
            aria-label={t('nav.home')}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-secondary transition-transform group-hover:scale-105">
              <Scissors size={22} />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-primary">Kesarganj</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Sewing Machine</div>
            </div>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold transition-colors ${
                  currentView === item.id ? 'text-primary' : 'text-slate-600 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={`tel:${phoneNumbers}`}
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary/90"
            >
              <Phone size={16} />
              {t('common.call')}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={whatsappUrl}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white"
              aria-label="Contact on WhatsApp"
            >
              <MessageSquare size={18} />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-primary"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-100 md:hidden"
            >
              <div className="flex flex-col gap-2 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                      currentView === item.id ? 'bg-slate-100 text-primary' : 'text-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a href={`tel:${phoneNumbers}`} className="flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white">
                  <Phone size={16} />
                  {t('common.call')}
                </a>
                <a href={whatsappUrl} className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-white">
                  <MessageSquare size={16} />
                  WhatsApp
                </a>
                <div className="flex items-center gap-2 px-4 pt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <Globe size={14} />
                  Language
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
