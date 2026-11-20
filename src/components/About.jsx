import { IoRibbonOutline } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <ScrollReveal as="figure" className="about-banner" variant="left">
        <img
          src="/assets/images/Afif-profile.jpg"
          alt="Muhammad Afif Abiyyu"
          className="w-100"
          loading="lazy"
          decoding="async"
        />
        <div className="about-badge">
          <IoRibbonOutline className="about-badge-icon" />
          <div>
            <strong>5+</strong>
            <span>{t('stat_years')}</span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="about-content section-content" variant="right">
        <p className="section-subtitle">{t('about_subtitle')}</p>

        <h2 className="h3 section-title">
          {t('about_title')}
        </h2>

        <p className="section-text">
          {t('about_text')}
        </p>

        <div className="btn-group">
          <a href="https://wa.me/6287714001013" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{t('about_btn_hire')}</a>

          <a href="/assets/file/CV%20-%20Muhammad%20Afif%20Abiyyu.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t('about_btn_cv')}</a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default About;
