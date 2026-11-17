import { useLanguage } from '../context/LanguageContext';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import scrollRevealVariants from './scrollRevealVariants';

const ProjectPreview = ({ proj }) => {
  const shouldReduceMotion = useReducedMotion();
  const previewRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: previewRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.96]);

  return (
    <m.figure
      className="card-banner"
      ref={previewRef}
      style={{ y: shouldReduceMotion ? 0 : y, scale: shouldReduceMotion ? 1 : scale }}
    >
      <div className="card-banner-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src={`./assets/images/${proj.image}`} alt={proj.title} className="w-100" />
    </m.figure>
  );
};

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('proj_1_title'),
      tag: t('proj_1_tag'),
      image: 'RSML.png'
    },
    {
      title: t('proj_2_title'),
      tag: t('proj_2_tag'),
      image: 'Marketplace UMKM.png' // Using the first marketplace image
    },
    {
      title: t('proj_3_title'),
      tag: t('proj_3_tag'),
      image: 'ReDesaign BANK1.png' // Using the first bank redesign image
    },
    {
      title: t('proj_4_title'),
      tag: t('proj_4_tag'),
      image: 'RS Kartini.png'
    },
    {
      title: t('proj_5_title'),
      tag: t('proj_5_tag'),
      image: 'LandingPage.png'
    },
    {
      title: t('proj_6_title'),
      tag: t('proj_6_tag'),
      image: 'carsystem.png'
    },
    {
      title: t('proj_7_title'),
      tag: t('proj_7_tag'),
      image: 'pusatpenjaminmutupoltek.png'
    },
    {
      title: t('proj_8_title'),
      tag: t('proj_8_tag'),
      image: 'eliteagrotrade.png'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-content">
        <ScrollReveal>
          <p className="section-subtitle">{t('proj_subtitle')}</p>
          <h2 className="h3 section-title">{t('proj_title')}</h2>
        </ScrollReveal>

        <ScrollReveal as="ul" className="project-grid" variant="cascade">
          {projects.map((proj) => (
            <m.li
              className="project-item"
              variants={scrollRevealVariants.card}
              key={proj.title}
            >
              <div className="project-card">
                <ProjectPreview proj={proj} />
                <div className="card-content">
                  <span className="card-tag">{proj.tag}</span>
                  <h3 className="h4 card-title">{proj.title}</h3>
                </div>
              </div>
            </m.li>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
