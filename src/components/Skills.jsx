import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  SiPostgresql,
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
import {
  FaHospital,
  FaNetworkWired,
  FaVideo,
  FaPhoneVolume,
  FaServer
} from 'react-icons/fa6';
import {
  IoScanOutline
} from 'react-icons/io5';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const { t } = useLanguage();

  const skillsData = [
    // Web & Development
    { name: 'HTML5', icon: 'html5.png' },
    { name: 'CSS3', icon: 'css3.png' },
    { name: 'JavaScript', icon: 'javascript.png' },
    { name: 'TypeScript', icon: 'typescript.png' },
    { name: 'React', icon: 'react.png' },
    { name: 'Vue', icon: 'vue.png' },
    { name: 'Node.js', icon: 'nodejs.png' },
    { name: 'PHP', icon: 'php.png' },
    { name: 'Laravel', icon: 'laravel.png' },
    { name: 'Python', icon: 'python.png' },
    { name: 'Flutter', icon: 'flutter-icon.svg' },
    { name: 'Bootstrap', icon: 'bootstrap.png' },
    { name: 'Sass', icon: 'sass.png' },
    // Database & Healthcare IT Systems
    { name: 'MySQL', icon: 'mysql.png' },
    { name: 'PostgreSQL', IconComponent: SiPostgresql, color: '#336791' },
    { name: 'Firebase', icon: 'firebase.png' },
    { name: 'SIMRS Khanza', IconComponent: FaHospital, color: '#0284c7' },
    { name: 'PACS / DICOM', IconComponent: FaNetworkWired, color: '#6366f1' },
    { name: 'Server & NOC', IconComponent: FaServer, color: '#3b82f6' },
    { name: 'CCTV Systems', IconComponent: FaVideo, color: '#10b981' },
    { name: 'PBX / VoIP', IconComponent: FaPhoneVolume, color: '#f59e0b' },
  ];

  const toolsData = [
    // Dev Tools
    { name: 'Git', icon: 'git.png' },
    { name: 'GitHub', icon: 'github.png' },
    { name: 'VS Code', icon: 'vs-code.png' },
    { name: 'Postman', icon: 'postman.png' },
    { name: 'Figma', icon: 'figma.png' },
    { name: 'Command Line', icon: 'command.png' },
    { name: 'NPM', icon: 'npm.png' },
    { name: 'Webpack', icon: 'webpack.png' },
    // Infrastructure & Virtualization
    { name: 'Docker', icon: 'docker.png' },
    { name: 'Proxmox VE', IconComponent: SiProxmox, color: '#e57000' },
    { name: 'MikroTik RouterOS', IconComponent: SiMikrotik, color: '#ee2f25' },
    { name: 'Cisco Networking', IconComponent: SiCisco, color: '#1ba0d7' },
    { name: 'Palo Alto', IconComponent: SiPaloaltonetworks, color: '#fa582d' },
    // Monitoring & Management
    { name: 'Prometheus', IconComponent: SiPrometheus, color: '#e6522c' },
    { name: 'Grafana', IconComponent: SiGrafana, color: '#f46800' },
    { name: 'ClickUp', icon: 'clickup.png' },
    { name: 'Trello', icon: 'trello.png' },
    { name: 'Slack', icon: 'slack.png' },
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
          <Icon />
        </div>
      );
    }
    return (
      <div className="card-icon">
        <img src={`./assets/images/${item.icon}`} alt={`${item.name} logo`} />
      </div>
    );
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content reveal">
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
      </div>

      <div className="skills-box">
        {activeTab === 'skills' && (
          <ul className="skills-list reveal-scale">
            {skillsData.map((skill, index) => (
              <li key={index}>
                <div className="skill-card">
                  <div className="tooltip">{skill.name}</div>
                  {renderIcon(skill)}
                  <span className="skill-name">{skill.name}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'tools' && (
          <ul className="tools-list reveal-scale">
            {toolsData.map((tool, index) => (
              <li key={index}>
                <div className="skill-card">
                  <div className="tooltip">{tool.name}</div>
                  {renderIcon(tool)}
                  <span className="skill-name">{tool.name}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'security' && (
          <ul className="tools-list reveal-scale">
            {securityData.map((sec, index) => (
              <li key={index}>
                <div className="skill-card">
                  <div className="tooltip">{sec.name}</div>
                  {renderIcon(sec)}
                  <span className="skill-name">{sec.name}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Skills;
