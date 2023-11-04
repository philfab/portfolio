import styles from "./MenuItem.module.css";
import React, { useState,useRef,useEffect } from "react";

const MenuItem = ({ isActive, initialLabel, onClick, transformY}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [label, setLabel] = useState(initialLabel);
  const [rotation, setRotation] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const labelRef = useRef();

  useEffect(() => {
    labelRef.current = label;
  }, [label]);

  useEffect(() => {
    if (labelRef.current !== initialLabel) {
      setRotation(90);
      setTimeout(() => {
        setLabel(initialLabel);
        setRotation(0);
      }, 500);
    }
  }, [ initialLabel]);

  const combinedTransform = `${isActive
    ? `translateY(${transformY}%)`
    : `translateY(${transformY}%) scale(${isHovered ? 1.2 : 1})`} rotateX(${rotation}deg)`;

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
