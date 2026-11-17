import { IoLocationOutline, IoOpenOutline } from 'react-icons/io5';
import { useRef, useState } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [isNetworkOpen, setIsNetworkOpen] = useState(false);
  const experienceListRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: experienceListRef,
    offset: ['start 0.8', 'end 0.2']
  });
  const timelineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const standardExperiences = [
    {
      title: t('exp_2_title'),
      company: t('exp_2_company'),
      location: t('exp_2_location'),
      mapUrl: 'https://www.google.com/search?q=pt+dash+garment+indonesia&oq=PT+dash+garment+indo&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYOTIHCAMQABjvBTIHCAQQABjvBTIHCAUQABjvBTIHCAYQABjvBdIBCDQyMDBqMGo5qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8',
      date: 'Jun 2023 - Jul 2024',
      datetime: '2023-06',
      description: t('exp_2_desc'),
      tags: ['HRIS Dashboard', 'Enterprise Network', 'Server Maintenance', 'IT Operations']
    },
    {
      title: t('exp_1_title'),
      company: t('exp_1_company'),
      location: t('exp_1_location'),
      mapUrl: 'https://www.google.com/search?q=rs+umum+dr+euis&oq=rs+umum+dr+euis+&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyBwgBEAAY7wUyCggCEAAYogQYiQUyBwgDEAAY7wXSAQgzMDI5ajBqOagCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8',
      date: 'Oct 2025 - Jan 2026',
      datetime: '2025-10',
      description: t('exp_1_desc'),
      tags: ['SIMRS Khanza', 'BPJS Bridging', 'Queue Management', 'Database']
    },
    {
      title: t('exp_0_title'),
      company: t('exp_0_company'),
      location: t('exp_0_location'),
      mapUrl: 'https://www.google.com/search?q=kartini+hospital&oq=kartini+hospital&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQLhgnGK8BGMcBMgcIAhAAGIAEMgcIAhAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgYIBxBFGDzSAQgzOTg0ajBqOagCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8',
      date: 'Jan 2026 - Jul 2026',
      datetime: '2026-01',
      description: t('exp_0_desc'),
      tags: ['Network Infrastructure', 'Web Optimization', 'System Security']
    }
  ];

  const rsmlMapUrl = 'https://www.google.com/search?q=rs+muhammadiyah+lamongan+maps&sca_esv=ef517bee04313233&sxsrf=AKL5yDipKZZhwCVxeSseB2D7TtiB6dZDGQ%3A1794791048941&ei=iFb6ao_4ONTp4-EPycalwQE&biw=746&bih=746&uact=5&oq=rs+muhammadiyah+lamongan+maps&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXJzIG11aGFtbWFkaXlhaCBsYW1vbmdhbiBtYXBzMgUQIRigAUifDFDVAlibCXABeAGQAQCYAZUBoAH6A6oBAzMuMrgBA8gBAPgBAZgCBaAC8QTCAgUQABiABMICExAuGIAEGIoFGEMYtAcYxwEYrwHCAgoQABiABBiKBRhDwgIGEAAYFhgewgIIEAAYgAQYogSYAwCIBgGSBwMxLjSgB78dsgcDMS40uAfxBMIHBzItMS4yLjLIB1KACAE&sclient=gws-wiz-serp';
  const rsmlTags = ['SIMRS Khanza', 'PACS / DICOM', 'EHR / EMR', 'Network Operations (NOC)', 'Server Room', 'CCTV Matrix'];

  const lamonganNetwork = [
    {
      company: t('exp_sub_kalikapas_company'),
      title: t('exp_sub_kalikapas_title'),
      roleType: t('exp_sub_kalikapas_role'),
      date: t('exp_sub_kalikapas_date'),
      mapUrl: 'https://www.google.com/search?q=rs+muhammadiyah+kalikapas&oq=rs+muhammadiyah+kalikapas&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABgTGBYYHjIKCAIQABgTGBYYHjIKCAMQABiABBiiBDIHCAQQABjvBTIKCAUQABiiBBiJBTIHCAYQABjvBdIBCDg1OTJqMGo5qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8',
      description: t('exp_sub_kalikapas_desc'),
      tags: ['Hardware Diagnostics', 'Network On-Call', 'CCTV System']
    },
    {
      company: t('exp_sub_klinikmuh_company'),
      title: t('exp_sub_klinikmuh_title'),
      roleType: t('exp_sub_klinikmuh_role'),
      date: t('exp_sub_klinikmuh_date'),
      mapUrl: 'https://www.google.com/search?q=klinik+muhammadiyah+lamongan&oq=klinik+muhammadiyah+lamongan+&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyBwgBEAAYgAQyBwgCEAAYgAQyCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEIMzkxMGowajmoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8',
      description: t('exp_sub_klinikmuh_desc'),
      tags: ['Clinical Helpdesk', 'Patient Records', 'Device Deployment']
    },
    {
      company: t('exp_sub_suryamedika_company'),
      title: t('exp_sub_suryamedika_title'),
      roleType: t('exp_sub_suryamedika_role'),
      date: t('exp_sub_suryamedika_date'),
      mapUrl: 'https://www.google.com/search?q=klinik+surya+medika+mantup+lamongan&oq=klinik+surya+medika+mantup+lamongan+&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORifBTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRiPAjIHCAYQIRiPAtIBCDUzODRqMGo5qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8',
      description: t('exp_sub_suryamedika_desc'),
      tags: ['Queue System', 'LAN Maintenance', 'Hardware Repair']
    },
    {
      company: t('exp_sub_permatabunda_company'),
      title: t('exp_sub_permatabunda_title'),
      roleType: t('exp_sub_permatabunda_role'),
      date: t('exp_sub_permatabunda_date'),
      mapUrl: 'https://www.google.com/search?q=RSU.+PERMATA+BUNDA+BABAT&oq=RSU.+PERMATA+BUNDA+BABAT&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMgoIAxAAGAoYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCggGEAAYChgWGB4yCAgHEAAYFhgeMgcICBAAGO8FMgcICRAAGO8F0gEHMzc1ajBqOagCBrACAfEF1BdSzvcQZUQ&sourceid=chrome&source=chrome.ob&ie=UTF-8',
      description: t('exp_sub_permatabunda_desc'),
      tags: ['PBX / Telephony', 'Structured Cabling', 'Server Setup']
    }
  ];

  const renderLocation = (location, mapUrl, company) => (
    <a
      className="experience-location"
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${location} - ${company}`}
    >
      <IoLocationOutline aria-hidden="true" />
      <span>{location}</span>
      <IoOpenOutline aria-hidden="true" />
    </a>
  );

  const renderTags = (tags) => (
    <ul className="experience-tags" aria-label={t('skills_tab_skills')}>
      {tags.slice(0, 4).map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );

  return (
    <section className="experience-section" id="experience">
      <div className="experience-inner">
        <ScrollReveal className="section-content">
          <p className="section-subtitle">{t('exp_subtitle')}</p>
          <h2 className="h3 section-title">{t('exp_title')}</h2>
          <p className="section-text">{t('exp_text')}</p>
        </ScrollReveal>

        <ScrollReveal
          as="div"
          className="experience-list"
          variant="cascade"
          ref={experienceListRef}
        >
          <div className="experience-timeline-track" aria-hidden="true">
            <m.div
              className="experience-timeline-fill"
              style={{ scaleY: shouldReduceMotion ? 1 : timelineScale }}
            />
          </div>
          <ScrollReveal as="article" className="experience-row" variant="card" staggerChild>
            <aside className="experience-meta">
              <time dateTime="2019-07">{t('exp_rsml_date')}</time>
              {renderLocation(t('exp_rsml_location'), rsmlMapUrl, t('exp_rsml_company'))}
            </aside>

            <div className="experience-detail">
              <div className="experience-heading">
                <h3>{t('exp_rsml_title')}</h3>
                <span className="experience-heading-separator" aria-hidden="true">•</span>
                <p className="experience-company">{t('exp_rsml_company')}</p>
              </div>
              <ul className="experience-impact">
                <li>{t('exp_rsml_desc')}</li>
              </ul>
              {renderTags(rsmlTags)}

              <div className={`experience-network ${isNetworkOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="experience-network-trigger"
                  aria-expanded={isNetworkOpen}
                  aria-controls="lamongan-network-list"
                  onClick={() => setIsNetworkOpen((open) => !open)}
                >
                  <span className="experience-network-label">{t('exp_network_title')}</span>
                  <span className="experience-network-actions">
                    <span className="experience-network-count">{t('exp_network_count')}</span>
                    <span className="experience-network-chevron" aria-hidden="true" />
                  </span>
                </button>
                <div
                  className="experience-network-content"
                  id="lamongan-network-list"
                  aria-hidden={!isNetworkOpen}
                  inert={!isNetworkOpen}
                >
                  <div className="experience-network-content-inner">
                    <p className="experience-network-intro">{t('exp_network_subtitle')}</p>
                    <ul className="experience-network-list">
                      {lamonganNetwork.map((unit, index) => (
                        <li
                          className="experience-network-item"
                          key={unit.company}
                          style={{ '--network-item-index': index }}
                        >
                          <div className="experience-network-meta">
                            <time>{unit.date}</time>
                            <span className="experience-network-meta-separator" aria-hidden="true">•</span>
                            <span>{unit.roleType}</span>
                          </div>
                          <div className="experience-network-detail">
                            <a href={unit.mapUrl} target="_blank" rel="noopener noreferrer">
                              {unit.company}
                              <IoOpenOutline aria-hidden="true" />
                            </a>
                            <div className="experience-network-heading">
                              <h4>{unit.title}</h4>
                              <span>{unit.roleType}</span>
                            </div>
                            <ul className="experience-impact">
                              <li>{unit.description}</li>
                            </ul>
                            {renderTags(unit.tags)}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {standardExperiences.map((experience) => (
            <ScrollReveal
              as="article"
              className="experience-row"
              variant="card"
              staggerChild
              key={experience.company}
            >
              <aside className="experience-meta">
                <time dateTime={experience.datetime}>{experience.date}</time>
                {renderLocation(experience.location, experience.mapUrl, experience.company)}
              </aside>

              <div className="experience-detail">
                <div className="experience-heading">
                  <h3>{experience.title}</h3>
                  <span className="experience-heading-separator" aria-hidden="true">•</span>
                  <p className="experience-company">{experience.company}</p>
                </div>
                <ul className="experience-impact">
                  <li>{experience.description}</li>
                </ul>
                {renderTags(experience.tags)}
              </div>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
