import styles from "./LanguageMenu.module.css";
import EnglishFlag from "../../assets/images/flags/uk.png";
import FrenchFlag from "../../assets/images/flags/fr.png";
import SpanishFlag from "../../assets/images/flags/es.png";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../features/languageSlice";
import i18n from "../../i18n";

const LanguageMenu = ({ isVisible }) => {
  const currentLanguage = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    dispatch(setLanguage(newLang));
  };

  const languages = [
    { id: "en", label: "English", flag: EnglishFlag },
    { id: "fr", label: "Français", flag: FrenchFlag },
    { id: "es", label: "Español", flag: SpanishFlag },
  ];

  return (
    <nav className={isVisible ? styles.visibleLanguageNav : styles.languageNav}>
      <ul>
        {languages.map((lang) => (
          <li
            key={lang.id}
            className={
              currentLanguage === lang.id
                ? styles.activeMenuItem
                : styles.menuItem
            }
            onClick={() => changeLanguage(lang.id)}
          >
            <img src={lang.flag} alt={lang.label} />
            <span>{lang.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LanguageMenu;
