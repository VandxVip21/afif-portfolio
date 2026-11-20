import { IoLocationOutline } from 'react-icons/io5';
import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: { id: 'Staf IT', en: 'IT Staff' },
    company: 'RS Umum Kartini',
    location: { id: 'Jakarta Selatan', en: 'South Jakarta' },
    date: { id: 'Jan 2026 - Agu 2026', en: 'Jan 2026 - Aug 2026' },
    datetime: '2026-01',
    description: {
      id: 'Mengelola jaringan dan perangkat kerja rumah sakit serta mengembangkan website resmi untuk informasi layanan.',
      en: 'Managed the hospital network and workstations, and developed the official website for service information.'
    },
    result: {
      id: 'Website resmi rumah sakit dirancang ulang dan dikelola sebagai sumber informasi layanan, sementara jaringan, perangkat kerja, dan CCTV dijaga tetap beroperasi.',
      en: "Redesigned and maintained the hospital's official website as a service-information source, while keeping the network, workstations, and CCTV running."
    },
    metric: { id: '', en: '' },
    tags: { id: ['Jaringan', 'Perangkat IT', 'Website Rumah Sakit'], en: ['Networking', 'IT Equipment', 'Hospital Website'] }
  },
  {
    title: { id: 'Kepala SIRS', en: 'Head of Hospital Information Systems' },
    company: 'RS Umum dr Euis',
    location: { id: 'Jakarta Timur', en: 'East Jakarta' },
    date: { id: 'Okt 2025 - Jan 2026', en: 'Oct 2025 - Jan 2026' },
    datetime: '2025-10',
    description: {
      id: 'Memimpin penerapan SIMRS Khanza, integrasi BPJS Kesehatan, sistem antrean farmasi, serta penyusunan SOP dan pelatihan staf.',
      en: 'Led SIMRS Khanza implementation, BPJS Kesehatan integration, pharmacy queue setup, SOP development, and staff training.'
    },
    result: {
      id: 'Membangun sistem antrean farmasi, mengelola integrasi BPJS Kesehatan (sinkronisasi data, klaim, kepatuhan administrasi), serta menyusun SOP dan melatih pengguna SIMRS Khanza.',
      en: 'Built a pharmacy queue system, managed BPJS Health integration (data sync, claims, administrative compliance), and wrote SOPs and trained SIMRS Khanza users.'
    },
    metric: { id: '', en: '' },
    tags: { id: ['SIMRS Khanza', 'Integrasi BPJS', 'Antrean Farmasi', 'Pelatihan Staf'], en: ['SIMRS Khanza', 'BPJS Integration', 'Pharmacy Queue', 'Staff Training'] }
  },
  {
    title: { id: 'Wiraswasta & Pekerjaan Mandiri', en: 'Self-Employed & Independent Projects' },
    company: { id: 'Proyek Lepas', en: 'Independent Projects' },
    location: { id: 'Indonesia', en: 'Indonesia' },
    date: { id: 'Agu 2024 - Sep 2025', en: 'Aug 2024 - Sep 2025' },
    datetime: '2024-08',
    description: {
      id: 'Mengerjakan proyek website dan memberikan dukungan teknis secara mandiri untuk kebutuhan usaha dan layanan kesehatan.',
      en: 'Delivered independent website projects and technical support for businesses and healthcare providers.'
    },
    result: { id: '', en: '' },
    metric: { id: '', en: '' },
    tags: { id: ['Website', 'Dukungan Teknis', 'Proyek Mandiri'], en: ['Websites', 'Technical Support', 'Independent Projects'] }
  },
  {
    title: { id: 'Manajer TI', en: 'IT Manager' },
    company: 'PT Dash Garment Indonesia',
    location: { id: 'Bandung, Jawa Barat', en: 'Bandung, West Java' },
    date: { id: 'Jun 2023 - Jul 2024', en: 'Jun 2023 - Jul 2024' },
    datetime: '2023-06',
    description: {
      id: 'Mengelola operasional TI, jaringan, pemeliharaan server, dan pengembangan dashboard HRIS.',
      en: 'Managed IT operations, networking, server maintenance, and HRIS dashboard development.'
    },
    result: {
      id: 'HRIS dikembangkan dan diterapkan untuk rekrutmen, absensi, penggajian, dan evaluasi kinerja, sambil memimpin tim IT yang menjaga jaringan, server, dan keamanan data.',
      en: 'Developed and rolled out an HRIS covering recruitment, attendance, payroll, and performance evaluation, while leading the IT team responsible for the network, servers, and data security.'
    },
    metric: { id: '', en: '' },
    tags: { id: ['Dashboard HRIS', 'Jaringan', 'Pemeliharaan Server', 'Operasional TI'], en: ['HRIS Dashboard', 'Networking', 'Server Maintenance', 'IT Operations'] }
  },
  {
    title: { id: 'Pelaksana SIRS', en: 'Hospital Information Systems Officer' },
    company: 'RS Muhammadiyah Lamongan',
    location: { id: 'Lamongan, Jawa Timur', en: 'Lamongan, East Java' },
    date: { id: 'Jul 2019 - Mar 2023', en: 'Jul 2019 - Mar 2023' },
    datetime: '2019-07',
    description: {
      id: 'Menangani dukungan SIRS, jaringan, server, pencadangan data, dan sistem informasi rumah sakit.',
      en: 'Supported hospital information systems, networking, servers, data backups, and hospital operations.'
    },
    result: {
      id: 'Hampir 4 tahun menjaga SIMRS Khanza, EHR, HIS, PACS, dan jaringan tetap berjalan, dengan backup rutin dan dokumentasi prosedur penanganan masalah.',
      en: 'Nearly four years keeping SIMRS Khanza, EHR, HIS, PACS, and the network running, with routine backups and documented troubleshooting procedures.'
    },
    metric: { id: '', en: '' },
    tags: { id: ['SIMRS', 'Jaringan', 'Server', 'Pencadangan Data'], en: ['SIMRS', 'Networking', 'Servers', 'Data Backups'] },
    parallelWork: [
      {
        company: 'Klinik Muhammadiyah Lamongan',
        type: { id: 'Dukungan internal', en: 'Internal support' },
        date: { id: 'Des 2019 - Mar 2023', en: 'Dec 2019 - Mar 2023' },
        description: {
          id: 'Mendampingi staf, mengelola akses sistem, menjaga jaringan, dan membantu penerapan perangkat.',
          en: 'Supported staff, managed system access, maintained the network, and helped deploy devices.'
        },
        result: {
          id: 'Menjadi garda depan dukungan IT bagi staf klinik, dengan dokumentasi masalah berulang beserta solusinya.',
          en: 'First-line IT support for clinic staff, with recurring issues and their fixes documented.'
        },
        metric: { id: '', en: '' }
      },
      {
        company: 'RS Muhammadiyah Kalikapas',
        type: { id: 'Dukungan internal', en: 'Internal support' },
        date: { id: 'Agu 2021 - Mar 2023', en: 'Aug 2021 - Mar 2023' },
        description: {
          id: 'Menangani kendala perangkat keras dan lunak, dukungan jaringan, serta pemeliharaan CCTV.',
          en: 'Handled hardware and software issues, network support, and CCTV maintenance.'
        },
        result: {
          id: 'Mendukung tim IT dalam troubleshooting perangkat dan memberi dukungan jaringan serta CCTV secara on-call.',
          en: 'Supported the IT team with device troubleshooting and provided on-call network and CCTV support.'
        },
        metric: { id: '', en: '' }
      },
      {
        company: 'Klinik Surya Medika',
        type: { id: 'Paruh waktu', en: 'Part-time' },
        date: { id: 'Jan 2021 - Mar 2023', en: 'Jan 2021 - Mar 2023' },
        description: {
          id: 'Membantu pengembangan sistem antrean, menjaga jaringan, dan mendiagnosis perangkat.',
          en: 'Helped develop a queue system, maintain the network, and diagnose devices.'
        },
        result: {
          id: 'Mengembangkan sistem antrean pasien dan menjaga jaringan LAN serta perangkat klinik tetap stabil.',
          en: "Developed a patient queue system and kept the clinic's LAN and devices stable."
        },
        metric: { id: '', en: '' }
      },
      {
        company: 'RS Permata Bunda',
        type: { id: 'Lepas', en: 'Freelance' },
        date: { id: 'Jan 2021 - Mar 2023', en: 'Jan 2021 - Mar 2023' },
        description: {
          id: 'Mendukung jaringan, konfigurasi server, CCTV, serta sistem interkom dan telepon.',
          en: 'Supported networking, server configuration, CCTV, intercom, and telephone systems.'
        },
        result: {
          id: 'Memasang dan memelihara jaringan, server, CCTV, serta sistem telepon PBX dan interkom.',
          en: 'Installed and maintained the network, servers, CCTV, and PBX/intercom telephone systems.'
        },
        metric: { id: '', en: '' }
      }
    ]
  }
];

const Experience = () => {
  const { lang, t } = useLanguage();
  const localized = (value) => (typeof value === 'string' ? value : value[lang]);
  const shouldReduceMotion = useReducedMotion();
  const experienceListRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: experienceListRef,
    offset: ['start 0.8', 'end 0.2']
  });
  const timelineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const renderResult = (result, metric) => {
    const outcome = localized(result);
    const measuredMetric = localized(metric);
    if (!outcome && !measuredMetric) return null;

    return (
      <div className="experience-result">
        <p>
          <strong>{measuredMetric
            ? (lang === 'id' ? 'Hasil terukur:' : 'Measured outcome:')
            : (lang === 'id' ? 'Hasil:' : 'Outcome:')}</strong>{' '}
          {outcome}
        </p>
        {measuredMetric && <p>{measuredMetric}</p>}
      </div>
    );
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-inner">
        <ScrollReveal className="section-content">
          <p className="section-subtitle">{t('exp_subtitle')}</p>
          <h2 className="h3 section-title">{t('exp_title')}</h2>
          <p className="section-text experience-summary">
            {lang === 'id'
              ? 'Sejak 2019 mengelola SIMRS, jaringan, dan integrasi BPJS di rumah sakit dan klinik.'
              : 'Since 2019, managing SIMRS, networks, and BPJS integration for hospitals and clinics.'}
          </p>
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
          {experiences.map((experience) => (
            <ScrollReveal
              as="article"
              className="experience-row"
              variant="card"
              staggerChild
              key={experience.company}
            >
              <aside className="experience-meta">
                <time dateTime={experience.datetime}>{localized(experience.date)}</time>
                <span className="experience-location">
                  <IoLocationOutline aria-hidden="true" />
                  {localized(experience.location)}
                </span>
              </aside>

              <div className="experience-detail">
                <div className="experience-heading">
                  <h3>{localized(experience.title)}</h3>
                  <span className="experience-heading-separator" aria-hidden="true">•</span>
                  <p className="experience-company">{localized(experience.company)}</p>
                </div>
                <ul className="experience-impact">
                  <li>{localized(experience.description)}</li>
                </ul>
                {renderResult(experience.result, experience.metric)}
                <ul className="experience-tags" aria-label={lang === 'id' ? 'Bidang pekerjaan' : 'Areas of work'}>
                  {experience.tags[lang].map((tag) => <li key={tag}>{tag}</li>)}
                </ul>

                {experience.parallelWork && (
                  <div className="experience-network is-open">
                    <h4 className="experience-network-heading">{lang === 'id' ? 'Pekerjaan paralel di Lamongan' : 'Concurrent roles in Lamongan'}</h4>
                    <ul className="experience-network-list">
                      {experience.parallelWork.map((work) => (
                        <li className="experience-network-item" key={work.company}>
                          <div className="experience-network-meta">
                            <time>{localized(work.date)}</time>
                            <span className="experience-network-meta-separator" aria-hidden="true">•</span>
                            <span>{localized(work.type)}</span>
                          </div>
                          <div className="experience-network-detail">
                            <h4>{work.company}</h4>
                            <p>{localized(work.description)}</p>
                            {renderResult(work.result, work.metric)}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
