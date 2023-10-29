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

  return (
    <button 
      className={`${isActive ? styles.active : styles.notActive} ${styles.button}`}
      style={{ transform: `rotateX(${rotation}deg)` }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TextEffect;
