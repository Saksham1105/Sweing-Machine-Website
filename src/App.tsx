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

function MainLayout() {
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
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
    <div
      id="website-root-container"
      className="flex min-h-screen flex-col bg-bg-custom selection:bg-secondary selection:text-primary"
    >
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      <main id="main-content-area" className="flex-grow">
        <div className="py-6 sm:py-10">{renderActiveView()}</div>
      </main>
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
