import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Welcome",
      Projects: "Projects",
      Training: "Training",
      Contact: "Contact",
    },
  },
  fr: {
    translation: {
      Home: "Bienvenue",
      Projects: "Projets",
      Training: "Formation",
      Contact: "Contact",
    },
  },
  es: {
    translation: {
      Home: "Bienvenido",
      Projects: "Proyectos",
      Training: "Formación",
      Contact: "Contacto",
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
