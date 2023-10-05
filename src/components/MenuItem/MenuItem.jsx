import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ isActive, label, onClick, transformY }) => {
  return (
      <button
        className={`${isActive ? styles.active : ""} ${styles.button}`}
        style={{ transform: `translateY(${transformY}%)` }}
        onClick={() => onClick(label)}
      >
        {label}
      </button>
  );
};

export default MenuItem;
