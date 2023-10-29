import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";
import MenuItem from "../../components/MenuItem/MenuItem";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import { getProjectDetailsById } from "../../features/contentSlice";
import { useSelector, useDispatch } from "react-redux";

const PROJECTS = "PROJECTS";
const TRAINING = "TRAINING";
const Home = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(PROJECTS);
  const [transformY, setTransformY] = useState(0);
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();
  const sampleData = useSelector((state) => state.content.sampleData);
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
    return project.id !== 0 && activeItem === PROJECTS
      ? !project.isTraining
      : project.isTraining;
  });

  const handleClickDetails = (id) => {
    dispatch(getProjectDetailsById(id));
  };

  if (!sampleData || Object.keys(sampleData).length === 0) return;

  return (
    <main className={styles.main}>
      <section className={styles.sidebar}>
        <nav className={styles.navbar}>
          <MenuItem
            isActive={activeItem === TRAINING}
            initialLabel={t("Training")}
            onClick={() => handleClickMenuItem(TRAINING)}
            transformY={transformY}
          />
          <MenuItem
            isActive={activeItem === PROJECTS}
            initialLabel={t("Projects")}
            onClick={() => handleClickMenuItem(PROJECTS)}
            transformY={-transformY}
          />
        </nav>
        <section className={styles.content}>
          {filteredProjects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              OnClickDetails={handleClickDetails}
            />
          ))}
        </section>
      </section>
      <ProjectDetails data={sampleData} />
    </main>
  );
};

export default Home;
