import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Home",
      Projects: "Projects",
      Training: "Training",
      Contact: "Contact",
    },
  },
  fr: {
    translation: {
      Home: "Accueil",
      Projects: "Projets",
      Training: "Formation",
      Contact: "Contact",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
