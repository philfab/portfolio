import styles from "./ProjectDetails.module.css";

const ProjectDetails = ({ data }) => {
  return (
    <section className={styles.projectDetailContainer}>
      <div className={styles.description}>{data.description}</div>
      <div className={styles.bottomRow}>
        {data.site ? (
          <a href={data.site} target="_blank" rel="noreferrer">
            View Site
          </a>
        ) : null}
        {data.git ? (
          <a href={data.git} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : null}
        {data.store ? (
          <a href={data.store} target="_blank" rel="noreferrer">
            Windows Store
          </a>
        ) : null}

        {data.technologies && data.technologies.length > 0
          ? data.technologies.map((tech, index) => (
              <button key={index} disabled>
                {tech}
              </button>
            ))
          : null}
      </div>
    </section>
  );
};

export default ProjectDetails;
