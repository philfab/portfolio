import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { ReactComponent as MailIcon } from "../../assets/images/mail.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github.svg";
import { ReactComponent as LangIcon } from "../../assets/images/lang.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/images/linkedin.svg";
import LanguageMenu from "../../components/LanguageMenu/LanguageMenu";
import TextEffect from "../TextEffect/TextEffect";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import i18n from "../../i18n";
import ExternalLink from "../../components/ExternalLink/ExternalLink";

function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isIconTouched, setIconTouched] = useState(false);
  const currentLanguage = useSelector((state) => state.language.value);
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage); //init
  }, [currentLanguage]);

  const handleTouchStart = () => {
    // mobile
    setIconTouched(true);
    setMenuVisible(true);
  };

  return (
    <header className={styles.header}>
      <div
        className={`${styles.modalBackground} ${
          isMenuVisible ? styles.show : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setMenuVisible(false);
          setIconTouched(false);
        }}
      ></div>
      <div className={styles.left}>
        <TextEffect initialLabel={t("Home")} id={0} />
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
          <ExternalLink href="https://linkedin.com/in/phil-fab">
            <LinkedInIcon className={styles.svgIcon} alt="LinkedIn" />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="mailto:mpemploipo@gmail.com">
            <MailIcon className={styles.svgIcon} alt="Mail" />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/philfab/">
            <GithubIcon className={styles.svgIcon} alt="GitHub" />
          </ExternalLink>
        </li>

      </ul>
    </header>
  );
}

export default Header;
