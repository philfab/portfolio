import styles from "./ProjectDetails.module.css";
import { useTranslation } from "react-i18next";
import LinkButton from "../../components/LinkButton/LinkButton";
import TechnoButton from "../../components/TechnoButton/TechnoButton";

const ProjectDetails = ({ data }) => {
  const { t } = useTranslation();
  const label = t(data.label) ? t(data.label) : data.label;

  return (
    <section className={styles.projectDetailContainer}>
      <h3 className={styles.title}>{label}</h3>
      <article className={styles.description}>{data.description}</article>
      <div className={styles.buttonsContainer}>
        <ul className={styles.links}>
          {data.site ? <LinkButton text="View Site" link={data.site} /> : null}
          {data.git ? <LinkButton text="GitHub" link={data.git} /> : null}
          {data.store ? (
            <LinkButton text="Windows Store" link={data.store} />
          ) : null}
        </ul>
        <ul className={styles.technologies}>
          {data.technologies && data.technologies.length > 0
            ? data.technologies.map((tech, index) => (
                <TechnoButton text={tech} key={index} />
              ))
            : null}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetails;
