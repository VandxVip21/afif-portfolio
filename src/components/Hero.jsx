import { IoLogoLinkedin } from 'react-icons/io5';
import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const imageScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1, 0.96]);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <ScrollReveal as="div" className="hero-banner-reveal" variant="left">
        <m.figure
          className="hero-banner"
          style={{
            y: shouldReduceMotion ? 0 : imageY,
            scale: shouldReduceMotion ? 1 : imageScale
          }}
        >
          <picture>
            <source srcSet="./assets/images/afif.jpg" media="(min-width: 768px)" />
            <source srcSet="./assets/images/afif.jpg" media="(min-width: 500px)" />
            <img src="./assets/images/afif.jpg" alt="Muhammad Afif Abiyyu" className="w-100" />
          </picture>
        </m.figure>
      </ScrollReveal>

      <ScrollReveal className="hero-content" variant="right">
        <h2 className="h2 hero-title">{t('hero_title')}</h2>
        <p className="section-text" style={{ marginBottom: '2rem' }}>{t('hero_subtitle')}</p>
        <a href="#contact" className="btn btn-primary">{t('hero_btn')}</a>
      </ScrollReveal>

      <ul className="hero-social-list reveal delay-200">
        <li>
          <a href="https://www.linkedin.com/in/m-afif-abiyyu-a57a4a30b" className="hero-social-link" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin />
            <div className="tooltip">Linkedin</div>
          </a>
        </li>
      </ul>

      <a href="#stats" className="scroll-down reveal delay-300">{t('hero_scroll')}</a>
    </section>
  );
};

export default Hero;
