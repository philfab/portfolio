import React, { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton, getProjectDetailsById } from '../../features/contentSlice';
import styles from './TextEffect.module.css';

const TextEffect = ({ initialLabel, id }) => {
  const [rotation, setRotation] = useState(0);
  const [label, setLabel] = useState(initialLabel);
  const dispatch = useDispatch();
  const activeButton = useSelector(state => state.content.activeButton);
  const isActive = activeButton === id;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    dispatch(getProjectDetailsById(id));
      //eslint-disable-next-line
  }, []);

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
  }, [initialLabel]);

  const handleClick = () => {
    dispatch(setActiveButton(id));
    dispatch(getProjectDetailsById(id));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const combinedTransform = `scale(${isHovered && !isActive ? 1.1 : 1}) rotateX(${rotation}deg)`;

  return (
    <button 
      className={`${isActive ? styles.active : styles.notActive} ${styles.button}`}
      style={{ transform: combinedTransform }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
};

export default TextEffect;
