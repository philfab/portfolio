import styles from "./LanguageMenu.module.css";
import EnglishFlag from "../../assets/images/flags/uk.png";
import FrenchFlag from "../../assets/images/flags/fr.png";
import SpanishFlag from "../../assets/images/flags/es.png";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../features/languageSlice";
import i18n from "../../i18n";
const LanguageMenu = ({ isVisible }) => {
  const currentLanguage = useSelector((state) => state.language.value);
  console.log(currentLanguage);
  const dispatch = useDispatch();

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    dispatch(setLanguage(newLang));
  };

  return (
    <nav className={isVisible ? styles.visibleLanguageNav : styles.languageNav}>
      <ul>
        <li
          className={currentLanguage === "en" ? styles.activeMenuItem : styles.menuItem}
          onClick={() => changeLanguage("en")}
        >
          <img src={EnglishFlag} alt="English" />
          <span>English</span>
        </li>
        <li
          className={currentLanguage === "fr" ? styles.activeMenuItem : styles.menuItem}
          onClick={() => changeLanguage("fr")}
        >
          <img src={FrenchFlag} alt="Français" />
          <span>Français</span>
        </li>
        <li
          className={currentLanguage === "es" ? styles.activeMenuItem : styles.menuItem}
          onClick={() => changeLanguage("es")}
        >
          <img src={SpanishFlag} alt="Español" />
          <span>Español</span>
        </li>
      </ul>
    </nav>
  );
};

export default LanguageMenu;
