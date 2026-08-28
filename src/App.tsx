import { useEffect, useState } from 'react';
import { LanguageProvider } from './lib/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Machines from './pages/Machines';
import RepairServices from './pages/RepairServices';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

export type View = 'home' | 'machines' | 'repair' | 'gallery' | 'about' | 'contact';

const viewPaths: Record<View, string> = { home: '/', machines: '/machines', repair: '/repair', gallery: '/gallery', about: '/about', contact: '/contact' };
const pathViews: Record<string, View> = Object.fromEntries(Object.entries(viewPaths).map(([view, path]) => [path, view as View]));
function getViewFromLocation(): View { return pathViews[window.location.pathname.replace(/\/$/, '') || '/'] ?? 'home'; }

function MainLayout() {
  const [currentView, setCurrentView] = useState<View>(() => getViewFromLocation());
  useEffect(() => { const handlePopState = () => setCurrentView(getViewFromLocation()); window.addEventListener('popstate', handlePopState); return () => window.removeEventListener('popstate', handlePopState); }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const titles: Record<View, string> = {
      home: 'Kamal Sewing Machines | Sales & Repair in Ajmer',
      machines: 'Sewing Machines | Kamal Sewing Machines',
      repair: 'Repair & Service | Kamal Sewing Machines',
      gallery: 'Gallery | Kamal Sewing Machines',
      about: 'About Us | Kamal Sewing Machines',
      contact: 'Contact | Kamal Sewing Machines',
    };
    document.title = titles[currentView];
  }, [currentView]);

  useEffect(() => {
    const handleInquirySubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !form.closest('#contact-page-container')) return;
      const value = (id: string) => { const element = document.getElementById(id); return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement ? element.value.trim() : ''; };
      const text = ['Hello Kamal Sewing Machines!', '', `Name: ${value('form-name')}`, `Phone: ${value('form-phone')}`, `Service: ${value('form-service')}`, `Message: ${value('form-message')}`].join('\n');
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    };
    document.addEventListener('submit', handleInquirySubmit, true);
    return () => document.removeEventListener('submit', handleInquirySubmit, true);
  }, []);

  const navigate = (view: View) => { const path = viewPaths[view]; if (window.location.pathname !== path) window.history.pushState({ view }, '', path); setCurrentView(view); };
  const renderActiveView = () => { switch (currentView) { case 'home': return <Home onViewChange={navigate} />; case 'machines': return <Machines />; case 'repair': return <RepairServices />; case 'gallery': return <Gallery />; case 'about': return <About />; case 'contact': return <Contact />; default: return <Home onViewChange={navigate} />; } };

  return <div id="website-root-container" className="flex min-h-screen flex-col bg-bg-custom selection:bg-secondary selection:text-primary"><Navbar currentView={currentView} onViewChange={navigate} /><main id="main-content-area" className="flex-grow"><div className="py-6 sm:py-10">{renderActiveView()}</div></main><Footer onViewChange={navigate} /></div>;
}

export default function App() { return <LanguageProvider><MainLayout /></LanguageProvider>; }
