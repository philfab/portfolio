import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import "./global.css";
import "./i18n";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="mainContainer">
          <Header />
          <Home />
          <Footer />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>
);

