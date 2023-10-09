import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton } from '../../features/contentSlice';
import styles from './TextEffect.module.css';
import { getProjectDetailsById } from '../../features/contentSlice';

const TextEffect = ({ label , id}) => {
  const dispatch = useDispatch();
  const activeButton = useSelector(state => state.content.activeButton);
  const isActive = activeButton === id;
  
  useEffect(() => {
    dispatch(getProjectDetailsById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    dispatch(setActiveButton(id));
    dispatch(getProjectDetailsById(id));
  };

  return (
    <button 
      className={`${isActive ? styles.active : styles.notActive} ${styles.button}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TextEffect;

