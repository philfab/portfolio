import styles from "./Header.module.css";
import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import { ReactComponent as MailIcon } from "../../assets/images/mail.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github.svg";
import { ReactComponent as LangIcon } from "../../assets/images/lang.svg";
import { ReactComponent as HomeIcon } from "../../assets/images/home.svg";
import LanguageMenu from "../../components/LanguageMenu/LanguageMenu";

function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isIconTouched, setIconTouched] = useState(false);
  // const { t } = useTranslation();
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".langItem")) {
        setMenuVisible(false);
        setIconTouched(false);
      }
    }
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleTouchStart = () => {
    setIconTouched(true);
    setMenuVisible(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <HomeIcon className={styles.svgIcon} alt="Home"></HomeIcon>
      </div>
      <ul className={styles.right}>
        <li
          className={`langItem ${styles.langItem} ${isIconTouched ? styles.touched : ''}`}
          onMouseOver={() => setMenuVisible(true)}
          onMouseOut={() => setMenuVisible(false)}
          onTouchStart={handleTouchStart}
        >
          <LangIcon className={styles.langIcon} alt="Language" />
          <LanguageMenu isVisible={isMenuVisible} />
        </li>
        <li >
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
            href="https://github.com/philfab/portfolio"
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
