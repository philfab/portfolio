import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { ReactComponent as MailIcon } from "../../assets/images/mail.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github.svg";
import { ReactComponent as LangIcon } from "../../assets/images/lang.svg";
import LanguageMenu from "../../components/LanguageMenu/LanguageMenu";
import TextEffect from "../TextEffect/TextEffect";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import i18n from "../../i18n";

function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isIconTouched, setIconTouched] = useState(false);
  const currentLanguage = useSelector((state) => state.language.value);
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  const handleTouchStart = () => {
    setIconTouched(true);
    setMenuVisible(true);
  };

  return (
    <header className={styles.header}>
    <div
      className={`${styles.modalBackground} ${isMenuVisible ? styles.show : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setMenuVisible(false);
        setIconTouched(false);
      }}
    ></div>
      <div className={styles.left}>
        <TextEffect label={t("Home")} id={0} />
      </div>
      <ul className={styles.right}>
        <li
          className={`langItem ${styles.langItem} ${
            isIconTouched ? styles.touched : ""
          }`}
          onMouseOver={() => setMenuVisible(true)}
          onMouseOut={() => setMenuVisible(false)}
          onTouchStart={handleTouchStart}
        >
          <LangIcon className={styles.langIcon} alt="Language" />
          <LanguageMenu isVisible={isMenuVisible} />
        </li>

        <li>
          <a
            href="mailto:mpemploipo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon className={styles.svgIcon} alt="Mail" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/philfab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className={styles.svgIcon} alt="GitHub" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
