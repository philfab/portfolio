import React from "react";
import styles from "./ProjectItem.module.css";

const ProjectItem = ({ project, index }) => {
  const animationDelay = index * 0.1;
  return (
    <button className={styles.button}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {project.label}
    </button>
  );
};

export default ProjectItem;
