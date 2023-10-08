import styles from "./MenuItem.module.css";
import React, { useState } from "react";

const MenuItem = ({ isActive, label, onClick, transformY }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const combinedTransform = isActive
    ? `translateY(${transformY}%)`
    : `translateY(${transformY}%) scale(${isHovered ? 1.1 : 1})`;

  return (
    <button
      className={`${isActive ? styles.active : styles.notActive} ${styles.button}`}
      style={{ transform: combinedTransform }}
      onClick={() => onClick(label)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
};



export default MenuItem;
