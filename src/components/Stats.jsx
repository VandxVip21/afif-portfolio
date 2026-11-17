import { useLanguage } from '../context/LanguageContext';
import { IoCheckmarkCircleOutline, IoPeopleOutline, IoTrophyOutline } from 'react-icons/io5';

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="stats" id="stats">
      <ul className="stats-list">
        <li className="reveal-scale delay-100">
          <div className="stats-card">
            <div className="card-icon">
              <IoTrophyOutline className="stats-icon" aria-hidden="true" />
            </div>
            <h2 className="h2 card-title">
              8+ <strong>{t('stat_years')}</strong>
            </h2>
          </div>
        </li>

        <li className="reveal-scale delay-200">
          <div className="stats-card">
            <div className="card-icon">
              <IoCheckmarkCircleOutline className="stats-icon" aria-hidden="true" />
            </div>
            <h2 className="h2 card-title">
              100+ <strong>{t('stat_projects')}</strong>
            </h2>
          </div>
        </li>

        <li className="reveal-scale delay-300">
          <div className="stats-card">
            <div className="card-icon">
              <IoPeopleOutline className="stats-icon" aria-hidden="true" />
            </div>
            <h2 className="h2 card-title">
              250+ <strong>{t('stat_clients')}</strong>
            </h2>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Stats;
