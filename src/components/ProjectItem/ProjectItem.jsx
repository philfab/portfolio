import React, { useState } from "react";
import styles from "./ProjectItem.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton } from '../../features/contentSlice';

const ProjectItem = ({ project, index }) => {
  const dispatch = useDispatch();
  const activeButton = useSelector(state => state.content.activeButton);
  const isActive = activeButton === project.id;
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    dispatch(setActiveButton( project.id));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const animationDelay = index * 0.1;

  return (
    <div 
      className={isHovered && !isActive ? styles.hoverContainer : styles.container} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`${isActive ? styles.active : ""} ${styles.button}`}
        style={{ animationDelay: `${animationDelay}s` }}
        onClick={handleClick}
      >
        {project.label}
      </button>
    </div>
  );
};

export default ProjectItem;
