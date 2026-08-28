import { lazy, Suspense, useEffect, useState, useTransition } from 'react';
import { LanguageProvider } from './lib/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

export type View = 'home' | 'machines' | 'repair' | 'gallery' | 'about' | 'contact';

const viewPaths: Record<View, string> = { home: '/', machines: '/machines', repair: '/repair', gallery: '/gallery', about: '/about', contact: '/contact' };
const pathViews: Record<string, View> = Object.fromEntries(Object.entries(viewPaths).map(([view, path]) => [path, view as View]));

function getViewFromLocation(): View {
  return pathViews[window.location.pathname.replace(/\/$/, '') || '/'] ?? 'home';
}

const Machines = lazy(() => import('./pages/Machines'));
const RepairServices = lazy(() => import('./pages/RepairServices'));
const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function MainLayout() {
  const [currentView, setCurrentView] = useState<View>(() => getViewFromLocation());
  const [, startTransition] = useTransition();

  useEffect(() => {
    const handlePopState = () => setCurrentView(getViewFromLocation());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
      const value = (id: string) => {
        const element = document.getElementById(id);
        return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement ? element.value.trim() : '';
      };
      const text = ['Hello Kamal Sewing Machines!', '', `Name: ${value('form-name')}`, `Phone: ${value('form-phone')}`, `Service: ${value('form-service')}`, `Message: ${value('form-message')}`].join('\n');
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    };
    document.addEventListener('submit', handleInquirySubmit, true);
    return () => document.removeEventListener('submit', handleInquirySubmit, true);
  }, []);

  const handlePrefetch = (view: View) => {
    const loaders: Partial<Record<View, () => Promise<unknown>>> = {
      machines: () => import('./pages/Machines'),
      repair: () => import('./pages/RepairServices'),
      gallery: () => import('./pages/Gallery'),
      about: () => import('./pages/About'),
      contact: () => import('./pages/Contact'),
    };
    loaders[view]?.().catch(() => {});
  };

  const navigate = (view: View) => {
    const path = viewPaths[view];
    if (window.location.pathname !== path) window.history.pushState({ view }, '', path);
    startTransition(() => setCurrentView(view));
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'home': return <Home onViewChange={navigate} />;
      case 'machines': return <Suspense fallback={null}><Machines /></Suspense>;
      case 'repair': return <Suspense fallback={null}><RepairServices /></Suspense>;
      case 'gallery': return <Suspense fallback={null}><Gallery /></Suspense>;
      case 'about': return <Suspense fallback={null}><About /></Suspense>;
      case 'contact': return <Suspense fallback={null}><Contact /></Suspense>;
      default: return <Home onViewChange={navigate} />;
    }
  };

  return (
    <div id="website-root-container" className="flex min-h-screen flex-col bg-bg-custom selection:bg-secondary selection:text-primary">
      <Navbar currentView={currentView} onViewChange={navigate} onPrefetch={handlePrefetch} />
      <main id="main-content-area" className="flex-grow">
        <div className="py-6 sm:py-10">{renderActiveView()}</div>
      </main>
      <Footer onViewChange={navigate} onPrefetch={handlePrefetch} />
    </div>
  );
}

export default function App() {
  return <LanguageProvider><MainLayout /></LanguageProvider>;
}
