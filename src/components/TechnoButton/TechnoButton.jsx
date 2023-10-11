import React from 'react';
import styles from "./TechnoButton.module.css";

const TechnoButton = ({ text }) => {

  return (
    <li>
      <button className={`${styles.buttonTechno} ${ styles.defaultStyle}`}>
      <span>{text}</span>
      </button>
    </li>
  );
};

export default TechnoButton;
