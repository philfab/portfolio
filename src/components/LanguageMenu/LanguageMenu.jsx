import styles from './LanguageMenu.module.css';
import EnglishFlag from '../../assets/images/flags/uk.png';
import FrenchFlag from '../../assets/images/flags/fr.png';
import SpanishFlag from '../../assets/images/flags/es.png';
import { useSelector } from 'react-redux';

const LanguageMenu = ({ isVisible }) => {
  const currentLanguage = useSelector((state) => state.language.value);

  return (
    <nav className={isVisible ? styles.visibleLanguageNav : styles.languageNav}>
      <ul>
      <li className={currentLanguage === 'en' ? styles.activeMenuItem : styles.menuItem}>
          <img src={EnglishFlag} alt="English" />
          <span>English</span>
        </li>
        <li className={currentLanguage === 'fr' ? styles.activeMenuItem : styles.menuItem}>
          <img src={FrenchFlag} alt="Français" />
          <span>Français</span>
        </li>
        <li className={currentLanguage === 'es' ? styles.activeMenuItem : styles.menuItem}>
          <img src={SpanishFlag} alt="Español" />
          <span>Español</span>
        </li>
      </ul>
    </nav>
  );
};

export default LanguageMenu;
