import styles from "./Footer.module.css";
import React, { useState } from "react";
import ContactModal from "../../components/ContactModal/ContactModal";
import CertificatesModal from "../../components/CertificatesModal/CertificatesModal";
import imCertificate from "../../assets/images/certificat.png";
function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className={styles.footer}>
      {/* <button onClick={() => setShowModal(true)}>
        <img src={imCertificate} alt="Certificats" />
        {showModal && <CertificatesModal onClose={() => setShowModal(false)} />}
      </button> */}
      <span>©2023 Muller Philippe</span>
      {/* <button onClick={() => setShowModal(true)}>Contact</button>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />} */}
    </footer>
  );
}

export default Footer;
