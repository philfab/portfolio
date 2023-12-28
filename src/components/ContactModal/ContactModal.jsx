import React, { useState, useRef, useEffect } from "react";
import styles from "./ContactModal.module.css";

function ContactModal({ onClose }) {
  const [messageSent, setMessageSent] = useState(false);
  const modalRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

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
        {messageSent ? (
          <span>Message Envoyé</span>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom ou Pseudo" required />
            <input type="email" placeholder="Adresse Email" required />
            <textarea placeholder="Votre Message" required></textarea>
            <div>
              <button type="submit">Envoyer</button>
              <button type="button" onClick={onClose}>
                Annuler
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
