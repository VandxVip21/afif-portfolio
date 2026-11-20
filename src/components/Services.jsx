import { IoBuildOutline, IoCloudUploadOutline, IoPeopleOutline, IoServerOutline, IoCodeSlashOutline } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const services = [
  { id: 'Instalasi & konfigurasi SIMRS Khanza', en: 'SIMRS Khanza installation & configuration', Icon: IoServerOutline },
  { id: 'Pelatihan staf rumah sakit dan klinik', en: 'Hospital and clinic staff training', Icon: IoPeopleOutline },
  { id: 'Migrasi data dengan proses terencana', en: 'Planned data migration', Icon: IoCloudUploadOutline },
  { id: 'Dukungan dan pemeliharaan bulanan', en: 'Monthly support and maintenance', Icon: IoBuildOutline },
  { id: 'Website klinik dan UMKM', en: 'Clinic and small business websites', Icon: IoCodeSlashOutline }
];

const Services = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="services" id="services">
      <ScrollReveal className="section-content">
        <p className="section-subtitle">{t('services_subtitle')}</p>
        <h2 className="h3 section-title">{t('services_title')}</h2>
        <p className="section-text">{t('services_text')}</p>
      </ScrollReveal>
      <ul className="services-grid">
        {services.map(({ id, en, Icon }) => (
          <li className="service-card" key={id}>
            <Icon aria-hidden="true" />
            <h3>{lang === 'id' ? id : en}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
