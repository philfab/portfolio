import React, { useEffect, useState } from "react";
import styles from "./ProjectDetails.module.css";
import { useTranslation } from "react-i18next";
import LinkButton from "../../components/LinkButton/LinkButton";
import TechnoButton from "../../components/TechnoButton/TechnoButton";
import { Slide } from "react-awesome-reveal";

const ProjectDetails = ({ data }) => {
  const { t } = useTranslation();
  const [currentData, setCurrentData] = useState(data);
  const [label, setLabel] = useState(null);
  const [description, setDescription] = useState("");
  const [webSiteText, SetWebSiteText] = useState("");
  const [angle, setAngle] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (label) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [label]);

  useEffect(() => {
    if (!data || Object.keys(data).length === 0) return;
    document.body.style.pointerEvents = "none";
    setAngle(90);
    const firstTimer = setTimeout(() => {
      setCurrentData(data);
      setLabel(t(data.label) ? t(data.label) : data.label);
      setDescription(t(`Description_${data.id}`));
      SetWebSiteText(t("Website"));
      setAngle(90);
    }, 300);

    const secondTimer = setTimeout(() => {
      setAngle(0);
      setKey((prevKey) => prevKey + 1);
      document.body.style.pointerEvents = "auto";
    }, 400);
    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      document.body.style.pointerEvents = "auto";
    };
  }, [data, t]);

  const rotateStyle = {
    transform: `rotateX(${angle}deg)`,
    transition: "transform 0.3s ease-in-out",
  };

  if (!data || Object.keys(data).length === 0) return;

  return (
    <section className={styles.projectDetailContainer} style={rotateStyle}>
      <div className={styles.grid}>
        <h3
          key={animationKey}
          className={`${styles.title} ${styles.zoomInEffect}`}
        >
          {label}
        </h3>
      </div>

      <article className={styles.description}>{description}</article>
      <Slide key={key} direction="up">
        <div className={styles.buttonsContainer}>
          <ul className={styles.links}>
            {currentData.site ? (
              <LinkButton text={webSiteText} link={currentData.site} />
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
      </Slide>
    </section>
  );
};

export default ProjectDetails;
