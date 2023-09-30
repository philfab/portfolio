import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../features/languageSlice";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { ReactComponent as MailIcon } from "../../assets/images/mail.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github.svg";
import { ReactComponent as LangIcon } from "../../assets/images/lang.svg";
import { ReactComponent as HomeIcon } from "../../assets/images/home.svg";

function Header() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    dispatch(setLanguage(newLang));
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <HomeIcon className={styles.svgIcon} alt="Home"></HomeIcon>
      </div>
      <ul className={styles.right}>
        <li>
          <LangIcon
            className={styles.svgIcon}
            onClick={() => changeLanguage("en")}
            alt="Language"
          ></LangIcon>
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
            href="https://github.com/philfab"
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
