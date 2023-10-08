import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";
import MenuItem from "../../components/MenuItem/MenuItem";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

const PROJECTS = "PROJECTS";
const TRAINING = "TRAINING";
const Home = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(PROJECTS);
  const [transformY, setTransformY] = useState(0);
  const [projects, setProjects] = useState([]);

  const handleClickMenuItem = (item) => {
    if (activeItem !== item) {
      setActiveItem(item);
      setTransformY(transformY === 0 ? 100 : 0);
    }
  };

  useEffect(() => {
    import("../../assets/projects.json").then((data) => {
      setProjects(data.projects);
    });
  }, []);

  const filteredProjects = projects.filter((project) => {
    return (project.id !== 0) &&  activeItem === PROJECTS ? !project.isTraining : project.isTraining;
  });

  return (
    <main className={styles.main}>
      <section className={styles.sidebar}>
        <nav className={styles.navbar}>
          <MenuItem
            isActive={activeItem === TRAINING}
            label={t("Training")}
            onClick={() => handleClickMenuItem(TRAINING)}
            transformY={transformY}
          />
          <MenuItem
            isActive={activeItem === PROJECTS}
            label={t("Projects")}
            onClick={() => handleClickMenuItem(PROJECTS)}
            transformY={-transformY}
          />
        </nav>
        <section className={styles.content}>
          {filteredProjects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </section>
      </section>
    </main>
  );
};

export default Home;
