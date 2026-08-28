import { useState, useEffect, useTransition } from 'react';
import { LanguageProvider, useLanguage } from './lib/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // We'll keep Home eager for LCP
import { lazy, Suspense } from 'react';
const Machines = lazy(() => import('./pages/Machines'));
const RepairServices = lazy(() => import('./pages/RepairServices'));
const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function MainLayout() {
  const [currentView, setCurrentView] = useState<'home' | 'machines' | 'repair' | 'gallery' | 'about' | 'contact'>('home');
  const [isPending, startTransition] = useTransition();
  const { t } = useLanguage();

  // Prefetch dynamic pages based on user intent (e.g., hover/focus/touch)
  const handlePrefetch = (view: 'home' | 'machines' | 'repair' | 'gallery' | 'about' | 'contact') => {
    switch (view) {
      case 'machines':
        import('./pages/Machines').catch(() => {});
        break;
      case 'repair':
        import('./pages/RepairServices').catch(() => {});
        break;
      case 'gallery':
        import('./pages/Gallery').catch(() => {});
        break;
      case 'about':
        import('./pages/About').catch(() => {});
        break;
      case 'contact':
        import('./pages/Contact').catch(() => {});
        break;
      default:
        break;
    }
  };

  // Scroll to top on view changes (simulating page navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  const handleViewChange = (view: 'home' | 'machines' | 'repair' | 'gallery' | 'about' | 'contact') => {
    startTransition(() => {
      setCurrentView(view);
    });
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return <Home onViewChange={handleViewChange} />;
      case 'machines':
        return (
          <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>}>
            <Machines />
          </Suspense>
        );
      case 'repair':
        return (
          <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>}>
            <RepairServices />
          </Suspense>
        );
      case 'gallery':
        return (
          <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>}>
            <Gallery />
          </Suspense>
        );
      case 'about':
        return (
          <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>}>
            <About />
          </Suspense>
        );
      case 'contact':
        return (
          <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>}>
            <Contact />
          </Suspense>
        );
      default:
        return <Home onViewChange={handleViewChange} />;
    }
  };

  return (
    <div id="website-root-container" className="flex flex-col min-h-screen bg-bg-custom selection:bg-secondary selection:text-primary">
      {/* Responsive sticky brand header navigation */}
      <Navbar currentView={currentView} onViewChange={handleViewChange} onPrefetch={handlePrefetch} />

      {/* Main page content area */}
      <main 
        id="main-content-area" 
        className={`flex-grow transition-opacity duration-250 ${isPending ? 'opacity-85' : 'opacity-100'}`}
      >
        <div className="py-6 sm:py-10">
          {renderActiveView()}
        </div>
      </main>

      {/* Business Coordinates and Footer branding */}
      <Footer onViewChange={handleViewChange} onPrefetch={handlePrefetch} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
