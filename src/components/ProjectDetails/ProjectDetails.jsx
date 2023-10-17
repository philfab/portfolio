import React, { useEffect, useState } from "react";
import styles from "./ProjectDetails.module.css";
import { useTranslation } from "react-i18next";
import LinkButton from "../../components/LinkButton/LinkButton";
import TechnoButton from "../../components/TechnoButton/TechnoButton";

const ProjectDetails = ({ data }) => {
  const { t } = useTranslation();
  const [currentData, setCurrentData] = useState(data);
  const [label, setLabel] = useState(data.label);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
      document.body.style.pointerEvents = 'none';
      setAngle(90);
      const firstTimer = setTimeout(() => {
        setCurrentData(data);
        setLabel( t(data.label) ? t(data.label) : data.label)
        setAngle(90);
      }, 200);
      const secondTimer = setTimeout(() => {
        setAngle(0);
        document.body.style.pointerEvents = 'auto';
      }, 400);
      return () => {
        clearTimeout(firstTimer);
        clearTimeout(secondTimer);
        document.body.style.pointerEvents = 'auto';
      };
    
  }, [data, t]);

  const rotateStyle = {
    transform: `rotateX(${angle}deg)`,
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <section className={styles.projectDetailContainer} style={rotateStyle}>
      <h3 className={styles.title}>{label}</h3>
      <article className={styles.description}>{currentData.description}</article>
      <div className={styles.buttonsContainer}>
        <ul className={styles.links}>
          {currentData.site ? (
            <LinkButton text="View Site" link={currentData.site} />
          ) : null}
          {currentData.git ? (
            <LinkButton text="GitHub" link={currentData.git} />
          ) : null}
          {currentData.store ? (
            <LinkButton text="Windows Store" link={currentData.store} />
          ) : null}
        </ul>
        <ul className={styles.technologies}>
          {currentData.technologies && currentData.technologies.length > 0
            ? currentData.technologies.map((tech, index) => (
                <TechnoButton text={tech} key={index} />
              ))
            : null}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetails;
