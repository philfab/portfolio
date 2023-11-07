import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Welcome",
      Projects: "Projects",
      Training: "Training",
      Website: "Website",
      Description_0:
        "My name is Muller Philippe, and I am a front-end developer and application designer, specializing in both games and utility or system applications. \nI have a passion for chess, which originally led me to the world of computer science and programming in particular. \nI have over 30 years of development experience, primarily using languages like C#, C, Pascal (Delphi), C++, VB, and PHP. I've also worked with frameworks like Visual Studio and Unity, as well as technologies like SQL and RESTful APIs, among others. \nI am the author of numerous applications, some of which are still available on the Windows Store, such as ChesSuccess, LudoStars, and MemoCrypt. \nIn 2023, I completed a Web Integrator course at OpenClassrooms to formalize my development skills with a state-recognized diploma.",
      Description_1:
        "Fourth project in the OpenClassrooms training program. The goal is to improve the interface of a restaurant website by adding CSS animations and making the site fully responsive. \nIt must be designed in mobile-first, using media queries and breakpoints. A mockup is provided in Figma format as well as a prototype (Figma) for user interactions. \nThe animations to be created are mainly CSS animations that must comply with the Figma prototype. It is also imperative to successfully pass the W3C tests for HTML and CSS pages. Finally, the creation of JavaScript animations is requested for future production deployment.",
      Description_2:
        "Eighth project in the OpenClassrooms training program. The goal is to create a complete React application without relying on any external libraries. The application must be responsive and match the Figma mockup. \nThe 'one component - one file' principle must be adhered to. \nThere should be no errors or warnings in the console. This is the first real use of React. Implementation of React Router for all pages of the application. Introduction to states, hooks, and components. Handling navigation and authentication errors. \nIn addition to implementing React, the project also incorporates technologies such as Styled-Components and Sass.",
      Description_3:
        "Tenth project in the OpenClassrooms training program. The objective is debugging the front-end part of the website. \nDebugging is carried out using a range of tools such as the browser's inspector for HTML-CSS, console debugging to identify areas containing errors or warnings, intrinsic interactive debugging in VSCode for code inspection (step-by-step, call stack, variables, watches, breakpoints), and React DevTools for inspecting components, states, and renders. Finally, Jest is used to implement unit tests, integration tests, and end-to-end (E2E) tests to examine all user interactions.",
      Description_4:
        "Final project in the OpenClassrooms training program. The goal is to create a banking application using React, Redux, and Node.js. It must be responsive and mobile-first. All login logic must be functional (authentication, modification, logout). The back-end is implemented with Express.js and MongoDB, with Redux managing the entire state of the application, and MongoDB for storing and modifying application data. REST API is used for communication with the front-end. The front-end of the site is hosted on Render (static) as well as the back-end (WebService). The MongoDB database is located in the cloud (Atlas). Lastly, the completion of a Swagger file (transactions) was required for API documentation.",
      Description_5:
        "Delphil is a chess game for Windows in console mode, written in Pascal using Delphi. \nIt implements the UCI protocol and requires an interface that supports this protocol. There are several available, including: Arena, Lucas Chess, Tarrasch Chess, SCID...\n Delphil can access endgame tables from <a href='https://www.chessprogramming.org/Eugene_Nalimov' target='_blank' rel='noopener noreferrer'>Eugène Nalimov</a> and <a href='https://www.chessprogramming.org/Andrew_Kadatch' target='_blank' rel='noopener noreferrer'>Andrew Kadatch</a> (up to 6 pieces). These tables in '.emd' format enhance the program's strength in the endgame. \nDelphil is multi-core, supporting up to 32 processors simultaneously. The creation of the external library for accessing the Tables is written in C++ (EGTB.dll), with a Pascal example available on the website.",
      Description_6:
        "ChesSuccess is a chess game that allows you to unlock achievements (39 in total) while competing against the computer, from beginner to Grandmaster. \nA library of openings (self-modulated) with over one million positions allows for varied gameplay. You can analyze your games with the computer (StockFish), comment on them, annotate them, and so on. \nUpdates are automatic, whether it's the game or test databases, or the latest version of Stockfish. \nA wide range of technologies (XAML, C#, C++, SQL, REST API..), tools (FontForge, 3DSMax, Blender, Photoshop, Inkscape, Audacity..), libraries (PDF, Epub, WebView2, SQLite..), and APIs (Youtube, Twitch, LiChess, Google Translate), among others, have been used for this project.",
      Description_7:
        "MemoCrypt is an application that allows you to take daily notes, much like a personal diary. It is password-protected (with a hint to recover it in case you forget), and both your text and password are fully encrypted (SHA-256), making them unreadable with any text editor. \nDeveloped primarily in Visual Studio, various tools like FontForge, Photoshop, and SQLite were used, along with a dedicated cryptography library. Many users (from the Windows Store) have either lost their passwords or failed to create a hint for recovery. In such cases, I couldn't assist them due to the application's high-security level; I am not able to recover it.",
      Description_8:
        "Ludo Stars is a game that brings together two to four players. The goal is to navigate your 4 pawns around the circuit and get them home before the other players. You can play against other players or against the computer. There are two levels of difficulty: normal and hard. In hard mode, computer-controlled players try to avoid eliminating each other if possible. You can also place traps on the circuit to try to eliminate your opponents. Ludo Stars can be played locally with up to 4 players simultaneously (using a mouse, pointer, or joystick). Up to 5 profiles can be created. Try to unlock the 12 possible achievements! The game was primarily designed using Unity, although many other tools were used, such as SQLite, Inkscape, Audacity, etc.",
    },
  },
  fr: {
    translation: {
      Home: "Bienvenue",
      Projects: "Projets",
      Training: "Formation",
      Website: "Site Web",
      Description_0:
        "Mon nom est Muller Philippe, je suis développeur front-end et concepteur d'applications, aussi bien des jeux que des utilitaires ou des applications système. \nJe suis passionné par le jeu d'Echecs qui est à l'origine de mon entrée dans le monde informatique et de la programmation en particulier. \nJ'ai une expérience de développeur de plus de 30 ans en employant principalement des languages comme C#, C, Pascal (Delphi), C++, VB, PHP, l'utilisation de frameworks comme Visual Studio et Unity ou des technologies comme SQL, API REST entre autres. \nJe suis l'auteur de trés nombreuses applications dont certaines encore disponibles dans le Windows Store comme ChesSuccess, LudoStars ou MemoCrypt. \nJ'ai suivi une formation d'intégrateur Web en 2023 chez OpenClassrooms pour sanctionner par un diplôme reconnu par l'état mes acquis de développeur.",
      Description_1:
        "Quatrième projet de la formation chez OpenClassrooms. Le but étant d'améliorer l'interface d'un site de restauration en ajoutant des animations CSS et de rendre le site entièrement responsive. \nIl doit être conçu en mobile first en utilisant les media queries et les breakpoints. Une maquette est fournie au format Figma ainsi qu'un prototype (Figma) pour les interactions utilisateurs. Les animations à créer sont principalement des animations CSS qui doivent répondre au prototype Figma. Il est aussi impératif de passer avec succés les tests W3C pour les pages HTML et CSS. Finalement il est demandé la création d'animations en JavaScript pour une future mise en production.",
      Description_2:
        "Huitième projet de la formation chez OpenClassrooms. Le but étant la création d'une application React complète sans avoir recours à une bibliothèque externe. Elle doit être responsive et doit correspondre à la maquette Figma. Le principe 'un composant - un fichier' doit être respecté. \nIl ne doit y avoir aucune erreur ni avertissement dans la console. Première véritable utilisation de React. Implémentation de React Router pour toutes les pages de l'application. Initiation aux states, aux hooks et aux composants. Interception des erreurs de navigation et d'identification. \nOutre le fait d'implémenter React, le projet contient aussi des technologies comme les Styled-Components ou Sass.",
      Description_3:
        "Dixième projet de la formation chez OpenClassRooms. L'objectif étant le débogage de la partie front-end du site web. \nLe débogage s'effectuant avec une palette d'outils comme l'inspecteur du navigateur pour la partie HTML-CSS, le débogage via la console pour identifier les parties comportant des erreurs ou des avertissements, le débogage interactif intrinsèque à VSCode pour l'inspection de code (pas à pas, pile d'appels, variables, espions, breakpoints) et React DevTools pour l'inspection de composants, des states, des rendus. Enfin Jest pour implémenter des tests unitaires, d'intégration et enfin E2E pour tester l'intégralité des interactions de l'utilisateur.",
      Description_4:
        "Ultime projet de la formation chez OpenClassrooms. Le but étant la création d'une application bancaire avec React, Redux et Node.js. Elle doit être responsive et mobile first. Toute la logique de connexion doit être fonctionnelle (identification, modification, déconnexion). Le back-end est implémenté avec Express.js et MongoDB, Redux pour gérer tout le state de l'application, MongoDB pour stocker et modifier les données de l'application. L'API REST pour la communication avec le front-end. Le front-end du site est hébergé sur Render (static) ainsi que le back-end (WebService). La base MongoDB est située dans le cloud (Atlas). Pour finir, il était demandé la complétion d'un fichier Swagger (transactions) pour la documentation de l'API.",
      Description_5:
        "Delphil est un jeu d'échecs pour Windows en mode console, écrit en Pascal avec Delphi. \nIl implémente le protocole UCI et nécessite une interface supportant ce protocole. Il en existe plusieurs, dont : Arena, Lucas Chess, Tarrasch Chess, SCID... \nDelphil peut accéder aux tables de finales d' <a href='https://www.chessprogramming.org/Eugene_Nalimov' target='_blank' rel='noopener noreferrer'>Eugène Nalimov</a> et <a href='https://www.chessprogramming.org/Andrew_Kadatch' target='_blank' rel='noopener noreferrer'>Andrew Kadatch</a> (jusqu'à 6 pièces). Ces tables au format '.emd' permettent d'augmenter la force du programme en finale. \nDelphil est multi-cores, il supporte jusqu'à 32 processeurs en simultané. La création de la bibliothèque externe permettant l'accés aux Tables est écrite en C++ (EGTB.dll) avec un exemple en Pacsal sur le site.",
      Description_6:
        "ChesSuccess est un jeu d'échecs qui va vous permettre de débloquer des succès (39 en tout) tout en vous mesurant à l'ordinateur, du débutant au Grand Maître. \nUne bibliothèque d'ouvertures (auto-modulée) de plus d'un million de positions permet de varier les parties. Vous pouvez analyser vos parties avec l'ordinateur (StockFish), les commenter, les annoter etc.. \nLes mises à jour sont automatiques, que ce soit les bases de données de parties ou de tests, ou de Stockfish. \nDe trés nombreuses technos (XAML, C#, C++, SQL, API REST..), outils (FontForge, 3DSMax, Blender, Photoshop, Inkscape, Audacity..), bibliothèques (PDF, Epub, WebView2, SQLite..), API's (Youtube, Twitch, LiChess, Google Translate) entre autres, ont été utilisés pour ce projet.",
      Description_7:
        "MemoCrypt est une application qui vous permet de prendre des notes au quotidien comme dans un journal intime. Il est protégé par un mot de passe (et un indice pour le retrouver en cas d'oubli) et votre texte ainsi que le mot de passe sont entièrement cryptés (SHA-256), donc impossible à lire avec un quelconque éditeur de texte. Réalisé principalement avec Visual Studio , plusieurs outils ont été utilisés comme FontForge, Photoshop, SQlite, ainsi qu'une bibliothèque dédiée à la cryptographie. De nombreux utilisateurs (Windows Store) ont égaré leur mot de passe ou omis de créer un indice pour le retrouver. Dans ces cas, je n'ai pu leur venir en aide en raison du niveau de sécurité de l'application , je ne suis pas en mesure de le retrouver.",
      Description_8:
        "Ludo Stars est un jeu réunissant deux à quatre joueurs. Le but est de faire faire le tour du circuit à vos 4 pions et de les ramener à la maison avant les autres joueurs. Vous pouvez y jouer contre d'autres joueurs ou contre l'ordinateur. Il y a deux niveaux de difficultés, normal et difficile. En mode difficile, les joueurs dirigés par l'ordinateur évitent si possible de s'éliminer. Vous pouvez aussi placer des pièges sur le circuit pour tenter d'éliminer vos adversaires. Ludo Stars se joue en local jusqu'à 4 joueurs simultanément (souris, pointeur ou joystick). Il est possible de créer jusqu'à 5 profils. Essayez de débloquer les 12 succès possibles ! (victoires, points...). Le jeu a été conçu principalement avec Unity, même si de nombreux autres outils ont été utilisés comme SQLite, Inkscape, Audacity etc..",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  keySeparator: false, //ne pas utiliser de séparateurs de clés
  interpolation: {
    escapeValue: false, // désactive l'échappement des valeurs d'interpolation
  },
});

export default i18n;
