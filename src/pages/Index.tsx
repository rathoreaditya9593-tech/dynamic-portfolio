import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import AvailableBadge from '@/components/AvailableBadge';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import FunFacts from '@/components/FunFacts';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Particles />
      <Sidebar activeSection={activeSection} />
      
      {/* Main Content - with right margin for sidebar */}
      <main className="md:mr-20 transition-all duration-500">
        <Hero />
        <AvailableBadge />
        <About />
        <Skills />
        <Projects />
        <FunFacts />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
