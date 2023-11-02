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
  const [rotationAxis, setRotationAxis] = useState('X');

  useEffect(() => {
    if (label) {
      setAnimationKey((prevKey) => prevKey + 1); // key change = demontage-remontage > animzoom
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
    }, 300);

    const secondTimer = setTimeout(() => {
      setAngle(0);
      setKey((prevKey) => prevKey + 1);
      document.body.style.pointerEvents = "auto";
    }, 300);
    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      document.body.style.pointerEvents = "auto";
    };
  }, [data, t]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { 
        setRotationAxis('Y');
      } else {
        setRotationAxis('X');
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // appel initial
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const rotateStyle = {
    transform: `rotate${rotationAxis}(${angle}deg)`,
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

      <article
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: description.split("\n").join("<br />"),
        }}
      ></article>
      <Slide key={key} direction="up" duration={rotationAxis === 'X' ? 1000 : 0} triggerOnce={true}>
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
