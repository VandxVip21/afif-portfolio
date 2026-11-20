import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import {
  SiBootstrap,
  SiClickup,
  SiCss,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiPostman,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
  SiTrello,
  SiTypescript,
  SiVuedotjs,
  SiWebpack,
  SiMikrotik,
  SiCisco,
  SiProxmox,
  SiGrafana,
  SiPrometheus,
  SiWireguard,
  SiOpenvpn,
  SiTorbrowser,
  SiSnort,
  SiParrotsecurity,
  SiPaloaltonetworks
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import {
  FaHospital,
  FaNetworkWired,
  FaVideo,
  FaPhoneVolume,
  FaServer
} from 'react-icons/fa6';
import {
  IoScanOutline,
  IoChatbubblesOutline,
  IoTerminalOutline
} from 'react-icons/io5';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const { t } = useLanguage();

  const skillsData = [
    // Web & Development
    { name: 'HTML5', IconComponent: SiHtml5, color: '#e34f26' },
    { name: 'CSS3', IconComponent: SiCss, color: '#1572b6' },
    { name: 'JavaScript', IconComponent: SiJavascript, color: '#f7df1e' },
    { name: 'TypeScript', IconComponent: SiTypescript, color: '#3178c6' },
    { name: 'React', IconComponent: SiReact, color: '#61dafb' },
    { name: 'Vue', IconComponent: SiVuedotjs, color: '#4fc08d' },
    { name: 'Node.js', IconComponent: SiNodedotjs, color: '#5fa04e' },
    { name: 'PHP', IconComponent: SiPhp, color: '#777bb4' },
    { name: 'Laravel', IconComponent: SiLaravel, color: '#ff2d20' },
    { name: 'Python', IconComponent: SiPython, color: '#3776ab' },
    { name: 'Flutter', icon: 'flutter-icon.svg' },
    { name: 'Bootstrap', IconComponent: SiBootstrap, color: '#7952b3' },
    { name: 'Sass', IconComponent: SiSass, color: '#cc6699' },
    // Database & Healthcare IT Systems
    { name: 'MySQL', IconComponent: SiMysql, color: '#4479a1' },
    { name: 'PostgreSQL', IconComponent: SiPostgresql, color: '#336791' },
    { name: 'Firebase', IconComponent: SiFirebase, color: '#ffca28' },
    { name: 'SIMRS Khanza', IconComponent: FaHospital, color: '#0284c7' },
    { name: 'PACS / DICOM', IconComponent: FaNetworkWired, color: '#6366f1' },
    { name: 'Server & NOC', IconComponent: FaServer, color: '#3b82f6' },
    { name: 'CCTV Systems', IconComponent: FaVideo, color: '#10b981' },
    { name: 'PBX / VoIP', IconComponent: FaPhoneVolume, color: '#f59e0b' },
  ];

  const toolsData = [
    // Dev Tools
    { name: 'Git', IconComponent: SiGit, color: '#f05032' },
    { name: 'GitHub', IconComponent: SiGithub, color: 'var(--text-primary)' },
    { name: 'VS Code', IconComponent: VscVscode, color: '#007acc' },
    { name: 'Postman', IconComponent: SiPostman, color: '#ff6c37' },
    { name: 'Figma', IconComponent: SiFigma, color: '#f24e1e' },
    { name: 'Command Line', IconComponent: IoTerminalOutline, color: 'var(--text-primary)' },
    { name: 'NPM', IconComponent: SiNpm, color: '#cb3837' },
    { name: 'Webpack', IconComponent: SiWebpack, color: '#8dd6f9' },
    // Infrastructure & Virtualization
    { name: 'Docker', IconComponent: SiDocker, color: '#2496ed' },
    { name: 'Proxmox VE', IconComponent: SiProxmox, color: '#e57000' },
    { name: 'MikroTik RouterOS', IconComponent: SiMikrotik, color: '#ee2f25' },
    { name: 'Cisco Networking', IconComponent: SiCisco, color: '#1ba0d7' },
    { name: 'Palo Alto', IconComponent: SiPaloaltonetworks, color: '#fa582d' },
    // Monitoring & Management
    { name: 'Prometheus', IconComponent: SiPrometheus, color: '#e6522c' },
    { name: 'Grafana', IconComponent: SiGrafana, color: '#f46800' },
    { name: 'ClickUp', IconComponent: SiClickup, color: '#7b68ee' },
    { name: 'Trello', IconComponent: SiTrello, color: '#0052cc' },
    { name: 'Slack', IconComponent: IoChatbubblesOutline, color: '#611f69' },
  ];

  const securityData = [
    // Security & OS
    { name: 'Kali Linux', icon: 'kali-color.svg' },
    { name: 'Parrot Security', IconComponent: SiParrotsecurity, color: '#05d6f8' },
    { name: 'Ubuntu Server', icon: 'ubuntu-color.svg' },
    { name: 'Debian Linux', icon: 'debian-color.svg' },
    { name: 'Arch Linux', icon: 'arch-color.svg' },
    { name: 'Linux OS', icon: 'linux-os.svg' },
    // Network Analysis & Auditing
    { name: 'Wireshark', icon: 'wireshark-color.svg' },
    { name: 'Nmap Scanner', IconComponent: IoScanOutline, color: '#38bdf8' },
    { name: 'Metasploit', icon: 'metasploit-color.svg' },
    { name: 'Burp Suite', icon: 'burpsuite-color.svg' },
    { name: 'Snort (IDS/IPS)', IconComponent: SiSnort, color: '#ff6600' },
    // Firewall & Security Network
    { name: 'pfSense Firewall', icon: 'pfsense-color.svg' },
    { name: 'WireGuard VPN', IconComponent: SiWireguard, color: '#88171a' },
    { name: 'OpenVPN', IconComponent: SiOpenvpn, color: '#ea7e20' },
    { name: 'Tor Network', IconComponent: SiTorbrowser, color: '#7d4698' },
  ];

  const renderIcon = (item) => {
    if (item.IconComponent) {
      const Icon = item.IconComponent;
      return (
        <div className="card-icon-svg" style={{ color: item.color || 'var(--accent-color)' }}>
          <Icon aria-hidden="true" />
        </div>
      );
    }
    if (item.icon?.endsWith('.svg')) {
      return (
        <div className="card-icon">
          <img src={`./assets/images/${item.icon}`} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        </div>
      );
    }

    return null;
  };

  const renderSkillList = (items, className) => (
    <ScrollReveal as="ul" className={className} variant="cascade">
      {items.map((item) => (
        <ScrollReveal as="li" variant="card" staggerChild key={item.name}>
          <div className="skill-card">
            <div className="tooltip">{item.name}</div>
            {renderIcon(item)}
            <span className="skill-name">{item.name}</span>
          </div>
        </ScrollReveal>
      ))}
    </ScrollReveal>
  );

  return (
    <section className="skills" id="skills">
      <ScrollReveal className="skills-content section-content">
        <p className="section-subtitle">{t('skills_subtitle')}</p>

        <h2 className="h3 section-title">
          {t('skills_title')}
        </h2>

        <p className="section-text">
          {t('skills_text')}
        </p>

        <div className="skills-toggle">
          <button
            className={`toggle-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            {t('skills_tab_skills')}
          </button>

          <button
            className={`toggle-btn ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            {t('skills_tab_tools')}
          </button>

          <button
            className={`toggle-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            {t('skills_tab_security')}
          </button>
        </div>
      </ScrollReveal>

      <div className="skills-box">
        {activeTab === 'skills' && renderSkillList(skillsData, 'skills-list')}
        {activeTab === 'tools' && renderSkillList(toolsData, 'tools-list')}
        {activeTab === 'security' && renderSkillList(securityData, 'tools-list')}
      </div>
    </section>
  );
};

export default Skills;
