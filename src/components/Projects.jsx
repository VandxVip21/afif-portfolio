import { m } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';
import scrollRevealVariants from './scrollRevealVariants';

const projects = [
  {
    title: { id: 'Aplikasi Medical Check-Up', en: 'Medical Check-Up Application' },
    problem: {
      id: 'Merapikan pencatatan dan pemantauan alur pemeriksaan kesehatan karyawan.',
      en: 'Organizes employee health-check records and examination workflows.'
    },
    technologies: 'Laravel, React',
    role: { id: 'Pengembangan aplikasi dan integrasi antarmuka.', en: 'Application development and interface integration.' }
  },
  {
    title: { id: 'Website SPMI / Web Mutu Politeknik Kartini Jakarta', en: 'SPMI / Quality Assurance Website — Politeknik Kartini Jakarta' },
    problem: {
      id: 'Menyediakan akses terpusat untuk informasi dan dokumentasi penjaminan mutu.',
      en: 'Provides centralized access to quality-assurance information and documentation.'
    },
    technologies: 'Website, HTML, CSS, JavaScript',
    role: { id: 'Pengembangan dan penataan konten website.', en: 'Website development and content organization.' },
    image: 'pusatpenjaminmutupoltek.png',
    alt: { id: 'Pratinjau website SPMI Politeknik Kartini Jakarta', en: 'Preview of the Politeknik Kartini Jakarta SPMI website' }
  },
  {
    title: { id: 'CMS Katalog Klinik', en: 'Clinic Catalog CMS' },
    problem: {
      id: 'Memudahkan pengelolaan informasi layanan dan profil klinik secara mandiri.',
      en: 'Makes it easier to manage clinic profiles and service information.'
    },
    technologies: 'CMS, PHP, MySQL',
    role: { id: 'Perancangan dan pengembangan CMS.', en: 'CMS design and development.' }
  },
  {
    title: { id: 'Sistem Antrean Farmasi', en: 'Pharmacy Queue System' },
    problem: {
      id: 'Membantu mengatur antrean resep dan memberikan informasi status layanan.',
      en: 'Helps organize prescription queues and communicate service status.'
    },
    technologies: { id: 'Aplikasi web, integrasi SIMRS', en: 'Web application, HIS integration' },
    role: { id: 'Pengembangan sistem dan dukungan penerapan.', en: 'System development and implementation support.' }
  },
  {
    title: { id: 'Website RS Muhammadiyah Lamongan', en: 'RS Muhammadiyah Lamongan Website' },
    problem: {
      id: 'Menyajikan informasi rumah sakit dan layanan kepada pengunjung.',
      en: 'Presents hospital and service information to visitors.'
    },
    technologies: { id: 'Website rumah sakit', en: 'Hospital website' },
    role: { id: 'Pengembangan website.', en: 'Website development.' },
    image: 'RSML.webp',
    alt: { id: 'Pratinjau website RS Muhammadiyah Lamongan', en: 'Preview of the RS Muhammadiyah Lamongan website' }
  },
  {
    title: { id: 'Marketplace UMKM', en: 'Small Business Marketplace' },
    problem: {
      id: 'Membantu pelaku UMKM menampilkan produk secara daring.',
      en: 'Helps small businesses showcase their products online.'
    },
    technologies: { id: 'Website marketplace', en: 'Marketplace website' },
    role: { id: 'Pengembangan antarmuka marketplace.', en: 'Marketplace interface development.' },
    image: 'Marketplace-UMKM.webp',
    alt: { id: 'Pratinjau marketplace UMKM', en: 'Preview of the small business marketplace' }
  },
  {
    title: { id: 'BankKaltimtara Redesign', en: 'BankKaltimtara Redesign' },
    problem: {
      id: 'Memperbarui tampilan informasi dan layanan perbankan agar lebih mudah dijelajahi.',
      en: 'Refreshes banking information and services in a clearer, easier-to-navigate interface.'
    },
    technologies: { id: 'Desain ulang antarmuka website', en: 'Website interface redesign' },
    role: { id: 'Perancangan ulang tampilan website.', en: 'Website interface redesign.' },
    image: 'BankKaltimtara.webp',
    alt: { id: 'Pratinjau desain ulang website BankKaltimtara', en: 'Preview of the BankKaltimtara website redesign' }
  },
  {
    title: { id: 'Website RS Umum Kartini', en: 'RS Umum Kartini Website' },
    problem: {
      id: 'Memudahkan pengunjung menemukan informasi rumah sakit.',
      en: 'Helps visitors find hospital information.'
    },
    technologies: { id: 'Website rumah sakit', en: 'Hospital website' },
    role: { id: 'Pengembangan website dan pengelolaan konten.', en: 'Website development and content management.' },
    image: 'RS-Kartini.webp',
    alt: { id: 'Pratinjau website RS Umum Kartini', en: 'Preview of the RS Umum Kartini website' }
  },
  {
    title: { id: 'Landing Page Enef Clinic', en: 'Enef Clinic Landing Page' },
    problem: {
      id: 'Menyajikan informasi klinik dan layanan konsultasi kesehatan kulit secara ringkas.',
      en: 'Presents clinic information and skin-care consultation services in a concise format.'
    },
    technologies: { id: 'Landing page responsif', en: 'Responsive landing page' },
    role: { id: 'Pengembangan landing page klinik.', en: 'Clinic landing page development.' },
    image: 'Enef-Clinic.webp',
    alt: { id: 'Pratinjau landing page Enef Clinic', en: 'Preview of the Enef Clinic landing page' }
  },
  {
    title: { id: 'Car Management System', en: 'Car Management System' },
    problem: {
      id: 'Membantu pengguna menemukan dan mengelola informasi kendaraan melalui aplikasi web.',
      en: 'Helps users explore and manage vehicle information through a web application.'
    },
    technologies: { id: 'Aplikasi web', en: 'Web application' },
    role: { id: 'Pengembangan aplikasi web.', en: 'Web application development.' },
    image: 'Car-System.webp',
    alt: { id: 'Pratinjau Car Management System', en: 'Preview of the Car Management System' }
  },
  {
    title: { id: 'Website CV. Elite Agrotrade', en: 'CV. Elite Agrotrade Website' },
    problem: {
      id: 'Menyediakan profil perusahaan dan informasi produk untuk calon mitra.',
      en: 'Provides company and product information for prospective partners.'
    },
    technologies: { id: 'Website perusahaan', en: 'Company website' },
    role: { id: 'Pengembangan website.', en: 'Website development.' },
    image: 'eliteagrotrade.webp',
    alt: { id: 'Pratinjau website CV. Elite Agrotrade', en: 'Preview of the CV. Elite Agrotrade website' }
  }
];

const Projects = () => {
  const { lang, t } = useLanguage();
  const localized = (value) => (typeof value === 'string' ? value : value[lang]);

  return (
    <section className="projects" id="projects">
      <div className="section-content">
        <ScrollReveal>
          <p className="section-subtitle">{t('proj_subtitle')}</p>
          <h2 className="h3 section-title">{t('proj_title')}</h2>
        </ScrollReveal>

        <ScrollReveal as="ul" className="project-grid" variant="cascade">
          {projects.map((project) => (
            <m.li
              className="project-item"
              variants={scrollRevealVariants.card}
              key={localized(project.title)}
            >
              <article className="project-card">
                {project.image ? (
                  <figure className="project-screenshot">
                    <img src={`/assets/images/${project.image}`} alt={localized(project.alt)} loading="lazy" decoding="async" />
                  </figure>
                ) : (
                  <div className="project-screenshot project-screenshot-placeholder">
                    <span>{lang === 'id' ? 'Pratinjau proyek' : 'Project preview'}</span>
                    <small>{lang === 'id' ? 'Tangkapan layar segera ditambahkan' : 'Screenshot coming soon'}</small>
                  </div>
                )}
                <div className="card-content">
                  <h3 className="h4 card-title">{localized(project.title)}</h3>
                  <dl className="project-details">
                    <div><dt>{lang === 'id' ? 'Masalah' : 'Problem'}</dt><dd>{localized(project.problem)}</dd></div>
                    <div><dt>{lang === 'id' ? 'Teknologi' : 'Technology'}</dt><dd>{localized(project.technologies)}</dd></div>
                    <div><dt>{lang === 'id' ? 'Peran saya' : 'My role'}</dt><dd>{localized(project.role)}</dd></div>
                  </dl>
                </div>
              </article>
            </m.li>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
