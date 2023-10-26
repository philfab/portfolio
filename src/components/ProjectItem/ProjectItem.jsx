import React, { useState, useEffect } from "react";
import styles from "./ProjectItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveButton } from "../../features/contentSlice";

const ProjectItem = ({ project, index , OnClickDetails }) => {
  const dispatch = useDispatch();
  const activeButton = useSelector((state) => state.content.activeButton);
  const isActive = activeButton === project.id;
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  const handleClick = () => {
    dispatch(setActiveButton(project.id));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const animationDelay = index * 0.1;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={
        isHovered && !isActive ? styles.hoverContainer : styles.container
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`${isActive ? styles.active : ""} ${styles.button}`}
        style={{ animationDelay: `${animationDelay}s` }}
        onClick={() => {
          handleClick();
          OnClickDetails(project.id);
        }}
      >
        {isMobile ? project.label_m : project.label}
      </button>
    </div>
  );
};

export default ProjectItem;
