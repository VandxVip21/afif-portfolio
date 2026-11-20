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
            <img src="/assets/images/afif-hero.webp" alt="Muhammad Afif Abiyyu" className="w-100" fetchPriority="high" />
          </picture>
        </m.figure>
      </ScrollReveal>

      <ScrollReveal className="hero-content" variant="right">
        <p className="section-subtitle">{t('hero_eyebrow')}</p>
        <h2 className="h2 hero-title">{t('hero_title')}</h2>
        <p className="section-text" style={{ marginBottom: '2rem' }}>{t('hero_subtitle')}</p>
        <div className="hero-actions">
          <a href="https://wa.me/6287714001013" className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t('hero_btn')}</a>
          <a href="mailto:maffabiyyu@gmail.com" className="btn btn-secondary">{t('hero_email')}</a>
          <a href="/assets/file/CV%20-%20Muhammad%20Afif%20Abiyyu.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{t('about_btn_cv')}</a>
        </div>
      </ScrollReveal>

      <a href="#experience" className="scroll-down reveal delay-300">{t('hero_scroll')}</a>
    </section>
  );
};

export default Hero;
