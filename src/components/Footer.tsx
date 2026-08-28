import { useLanguage } from '../lib/LanguageContext';
import { Scissors, Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: any) => void;
  onPrefetch: (view: any) => void;
}

export default function Footer({ onViewChange, onPrefetch }: FooterProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const phoneNumbers = '+919876543210';
  const whatsappUrl = 'https://wa.me/919876543210?text=Hello,%20I%20have%20a%20sewing%20machine%20sales/repair%20inquiry.';

  return (
    <footer id="app-footer" className="bg-primary text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <div>
                <span className="block font-extrabold text-base uppercase tracking-tight">Kamal Sewing Machines</span>
                <span className="block text-[9px] uppercase tracking-widest text-slate-400">{t('footer.salesAndServices')}</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-light">{t('footer.tagline')}</p>
            <p className="text-[10px] text-slate-400 font-light">{t('footer.trustedBy')}</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-widest text-secondary">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: t('nav.home') },
                { id: 'machines', label: t('nav.machines') },
                { id: 'repair', label: t('nav.repair') },
                { id: 'gallery', label: t('nav.gallery') },
                { id: 'about', label: t('nav.about') },
                { id: 'contact', label: t('nav.contact') },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onViewChange(link.id)}
                    onMouseEnter={() => onPrefetch(link.id)}
                    onFocus={() => onPrefetch(link.id)}
                    onTouchStart={() => onPrefetch(link.id)}
                    className="text-slate-300 hover:text-white transition-all text-left font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-widest text-secondary">Shop Timing</h3>
            <div className="space-y-3 text-xs font-light">
              <div className="flex items-start gap-3"><Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" /><div><p className="font-bold text-white">Opening Hours</p><p className="text-slate-300 text-[11px] mt-0.5">{t('footer.hours')}</p></div></div>
              <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" /><div><p className="font-bold text-white">{t('footer.addressTitle')}</p><p className="text-slate-300 text-[11px] mt-0.5">{t('footer.address')}</p></div></div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-widest text-secondary">
              {t('footer.contactUs')}
            </h3>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${phoneNumbers}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors py-1"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors py-1"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 fill-current" />
                <span>WhatsApp support</span>
              </a>
              <a
                href="mailto:contact@kamalsewing.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors py-1"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="truncate">contact@kamalsewing.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider and Rights */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 uppercase tracking-widest">
          <p>© {currentYear} Kamal Sewing Machines, Ajmer. {t('footer.rights')}.</p>
          <p className="flex items-center gap-1 font-mono">
            {t('footer.developedBy')} • <span>Rajasthan Local Business Project</span>
          </p>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-[10px] text-slate-400"><span>© {currentYear} Kamal Sewing Machines. {t('footer.rights')}</span><span>{t('footer.developedBy')}</span></div>
      </div>
    </footer>
  );
}
