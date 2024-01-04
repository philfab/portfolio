import React, { useState, useRef, useEffect } from "react";
import styles from "./CertificatesModal.module.css";

function CertificatesModal({ onClose }) {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.modalBackground}>
      <div ref={modalRef} className={styles.modalContainer}>
      
      </div>
    </div>
  );
}

export default CertificatesModal;
