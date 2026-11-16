import {
  IoBriefcaseOutline,
  IoLocationOutline,
  IoCalendarClearOutline,
  IoGitNetworkOutline,
  IoServerOutline,
  IoOpenOutline
} from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const standardExperiences = [
    {
      title: t('exp_0_title'),
      company: t('exp_0_company'),
      location: t('exp_0_location'),
      mapUrl: 'https://www.google.com/search?q=kartini+hospital&oq=kartini+hospital&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQLhgnGK8BGMcBMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgYIBxBFGDzSAQgzOTg0ajBqOagCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8',
      date: 'Jan 2026 - Jul 2026',
      datetime: '2026-01',
      description: t('exp_0_desc'),
      tags: ['Network Infrastructure', 'Web Optimization', 'System Security']
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
      title: t('exp_2_title'),
      company: t('exp_2_company'),
      location: t('exp_2_location'), // "Bandung, Jawa Barat"
      mapUrl: 'https://www.google.com/search?q=pt+dash+garment+indonesia&oq=PT+dash+garment+indo&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYOTIHCAMQABjvBTIHCAQQABjvBTIHCAUQABjvBTIHCAYQABjvBdIBCDQyMDBqMGo5qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8',
      date: 'Jun 2023 - Jul 2024',
      datetime: '2023-06',
      description: t('exp_2_desc'),
      tags: ['HRIS Dashboard', 'Enterprise Network', 'Server Maintenance', 'IT Operations']
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

  return (
    <section className="project" id="experience">
      <div className="project-content section-content reveal">
        <p className="section-subtitle">{t('exp_subtitle')}</p>
        <h2 className="h3 section-title">{t('exp_title')}</h2>
        <p className="section-text">{t('exp_text')}</p>
      </div>

      <div className="experience-container">
        {/* Top 3 Strategic Roles */}
        <div className="experience-top-grid">
          {standardExperiences.map((exp, index) => (
            <div key={index} className="experience-card reveal-left">
              <div className="exp-card-header">
                <div className="exp-icon">
                  <IoBriefcaseOutline />
                </div>
                <a
                  href={exp.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-location-tag exp-location-link"
                  title={`${exp.company} - Buka lokasi di Google Maps`}
                >
                  <IoLocationOutline className="location-pin-icon" />
                  <span>{exp.location}</span>
                  <IoOpenOutline className="exp-external-icon" />
                </a>
              </div>

              <div className="exp-content">
                <h3 className="h4 exp-title">{exp.title}</h3>
                <div className="exp-meta">
                  <span className="exp-company">{exp.company}</span>
                  <span className="exp-separator">•</span>
                  <time className="exp-date" dateTime={exp.datetime}>
                    <IoCalendarClearOutline className="exp-meta-icon" />
                    {exp.date}
                  </time>
                </div>
                <p className="exp-description">{exp.description}</p>
              </div>

              <div className="exp-tech-tags">
                {exp.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="exp-tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Primary Role & Regional Lamongan Healthcare Network */}
        <div className="experience-card exp-featured-hub reveal-scale">
          {/* Main RSML Top Bar */}
          <div className="exp-hub-header">
            <div className="exp-hub-badges">
              <div className="exp-status-indicator">
                <span className="status-pulse-dot"></span>
                <span className="status-text">{t('exp_rsml_badge')}</span>
              </div>
              <a
                href={rsmlMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="exp-badge-location exp-location-link"
                title={`${t('exp_rsml_company')} - Buka lokasi di Google Maps`}
              >
                <IoLocationOutline className="location-pin-icon" />
                <span>{t('exp_rsml_location')}</span>
                <IoOpenOutline className="exp-external-icon" />
              </a>
            </div>
            <time className="exp-hub-date">
              <IoCalendarClearOutline className="exp-meta-icon" />
              {t('exp_rsml_date')}
            </time>
          </div>

          {/* Main RSML Core Role Info */}
          <div className="exp-hub-main">
            <div className="exp-hub-icon">
              <IoServerOutline />
            </div>
            <div className="exp-hub-info">
              <div className="exp-hub-title-row">
                <h3 className="h3 exp-hub-title">{t('exp_rsml_title')}</h3>
                <span className="exp-hub-core-pill">Core Hospital</span>
              </div>
              <h4 className="h4 exp-hub-company">{t('exp_rsml_company')}</h4>
              <p className="exp-description exp-hub-desc">{t('exp_rsml_desc')}</p>

              <div className="exp-tech-tags exp-hub-tags">
                {rsmlTags.map((tag, idx) => (
                  <span key={idx} className="exp-tag-pill exp-tag-highlight">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Network Support in Lamongan Region */}
          <div className="exp-network-section">
            <div className="exp-network-header">
              <div className="exp-network-title-wrapper">
                <div className="exp-network-badge-icon">
                  <IoGitNetworkOutline />
                </div>
                <div>
                  <h4 className="exp-network-title">{t('exp_network_title')}</h4>
                  <p className="exp-network-subtitle">{t('exp_network_subtitle')}</p>
                </div>
              </div>
            </div>

            <div className="exp-network-grid">
              {lamonganNetwork.map((unit, idx) => (
                <div key={idx} className="exp-network-card">
                  <div className="exp-network-card-header">
                    <span className="exp-network-role-pill">{unit.roleType}</span>
                    <span className="exp-network-card-date">
                      <IoCalendarClearOutline className="exp-meta-icon" />
                      {unit.date}
                    </span>
                  </div>

                  <a
                    href={unit.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-network-card-company-wrap exp-company-map-link"
                    title={`${unit.company} - Buka lokasi di Google Maps`}
                  >
                    <IoLocationOutline className="exp-network-company-icon" />
                    <h5 className="exp-network-card-company">{unit.company}</h5>
                    <IoOpenOutline className="exp-external-icon" />
                  </a>

                  <h6 className="exp-network-card-title">{unit.title}</h6>
                  <p className="exp-network-card-desc">{unit.description}</p>

                  <div className="exp-subcard-tags">
                    {unit.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="exp-subtag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
