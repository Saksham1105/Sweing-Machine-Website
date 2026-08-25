import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './lib/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Machines from './pages/Machines';
import RepairServices from './pages/RepairServices';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function MainLayout() {
  const [currentView, setCurrentView] = useState<'home' | 'machines' | 'repair' | 'gallery' | 'about' | 'contact'>('home');
  const { t } = useLanguage();

  // Scroll to top on view changes (simulating page navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return <Home onViewChange={setCurrentView} />;
      case 'machines':
        return <Machines />;
      case 'repair':
        return <RepairServices />;
      case 'gallery':
        return <Gallery />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onViewChange={setCurrentView} />;
    }
  };

  return (
    <div id="website-root-container" className="flex flex-col min-h-screen bg-bg-custom selection:bg-secondary selection:text-primary">
      {/* Responsive sticky brand header navigation */}
      <Navbar currentView={currentView} onViewChange={setCurrentView} />

      {/* Main page content area */}
      <main id="main-content-area" className="flex-grow">
        <div className="py-6 sm:py-10">
          {renderActiveView()}
        </div>
      </main>

      {/* Business Coordinates and Footer branding */}
      <Footer onViewChange={setCurrentView} />
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
