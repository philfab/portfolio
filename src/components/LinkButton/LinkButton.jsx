import styles from './LinkButton.module.css';

const LinkButton = ({ text, link }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        <button className={styles.buttonLink}>{text}</button>
      </a>
    </li>
  );
};

export default LinkButton;