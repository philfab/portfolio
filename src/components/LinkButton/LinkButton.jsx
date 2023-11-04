import styles from "./LinkButton.module.css";
import ExternalLink from "../../components/ExternalLink/ExternalLink";

const LinkButton = ({ text, link }) => {
  return (
    <li>
      <ExternalLink href={link}>
        <button className={styles.buttonLink}>{text}</button>
      </ExternalLink>
    </li>
  );
};

export default LinkButton;
