import styles from "./Footer.module.css";
import React, { useState } from 'react';
import ContactModal from "../../components/ContactModal/ContactModal";

function Footer() {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className={styles.footer}>
      <span>©2023 Muller Philippe</span>
      <button onClick={() => setShowModal(true)}>Contact</button>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </footer>
  );
}

export default Footer;

