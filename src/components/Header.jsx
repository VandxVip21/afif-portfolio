import { useState, useEffect, useRef } from 'react';
import { IoVolumeMuteOutline, IoVolumeHighOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const audioRef = useRef(null);
  
  const { lang, changeLang, t } = useLanguage();
  const isDarkTheme = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
    if (isDarkTheme) {
      document.body.classList.add('dark_theme');
      document.body.classList.remove('light_theme');
    } else {
      document.body.classList.add('light_theme');
      document.body.classList.remove('dark_theme');
    }
  }, [isDarkTheme]);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setTheme(newTheme);
  };
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsMusicPlaying(true);
        }).catch((err) => {
          console.error("Audio playback error:", err);
        });
      }
    }
  };

  return (
    <header className={`header ${isScrolled ? 'active' : ''}`}>
      <audio
        ref={audioRef}
        src="./assets/file/sounddelicious-portfolio-harmony-221983.mp3"
        loop
        preload="none"
        onEnded={() => setIsMusicPlaying(false)}
      />
      <div className="container">
        <h1 className="logo">
          <a href="#">Muhammad Afif<span>.</span></a>
        </h1>

        <div className="navbar-actions">
          <button
            type="button"
            className="language-toggle"
            aria-label={lang === 'id' ? 'Switch language to English' : 'Ganti bahasa ke Indonesia'}
            title={lang === 'id' ? 'English' : 'Bahasa Indonesia'}
            onClick={() => changeLang(lang === 'id' ? 'en' : 'id')}
          >
            {lang === 'id' ? 'EN' : 'ID'}
          </button>
          <button
            className={`music-btn ${isMusicPlaying ? 'playing' : ''}`}
            aria-label="Atur musik latar"
            title={isMusicPlaying ? 'Matikan musik latar' : 'Putar musik latar'}
            onClick={toggleMusic}
          >
            {isMusicPlaying ? <IoVolumeHighOutline className="icon" /> : <IoVolumeMuteOutline className="icon" />}
          </button>

          <button
            className="theme-btn"
            aria-label="Ganti tema"
            title="Ganti tema"
            onClick={toggleTheme}
          >
            {isDarkTheme ? <IoSunnyOutline className="icon" /> : <IoMoonOutline className="icon" />}
          </button>
        </div>

        <button
          className={`nav-toggle-btn ${isNavOpen ? 'active' : ''}`}
          aria-label="Buka atau tutup menu"
          onClick={toggleNav}
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_home')}</a></li>
            <li><a href="#about" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_about')}</a></li>
            <li><a href="#skills" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_skills')}</a></li>
            <li><a href="#experience" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_experience')}</a></li>
            <li><a href="#projects" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_projects')}</a></li>
            <li><a href="#services" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_services')}</a></li>
            <li><a href="#contact" className="navbar-link" onClick={() => setIsNavOpen(false)}>{t('nav_contact')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
