import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { domAnimation, LazyMotion, useReducedMotion } from 'framer-motion';
import 'lenis/dist/lenis.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Inbox from './components/Inbox';
import ScrollProgress from './components/ScrollProgress';
import { LanguageProvider } from './context/LanguageContext';
import useScrollReveal from './hooks/useScrollReveal';

function AppContent() {
  const shouldReduceMotion = useReducedMotion();
  useScrollReveal();

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: true,
      anchors: true,
      autoRaf: true
    });

    return () => lenis.destroy();
  }, [shouldReduceMotion]);

  return (
    <LazyMotion features={domAnimation}>
      <ScrollProgress />
      <Header />
      <main>
        <article className="container">
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </article>
      </main>
    </LazyMotion>
  );
}

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <LanguageProvider>
      {hash === '#/inbox' ? <Inbox /> : <AppContent />}
    </LanguageProvider>
  );
}

export default App;
