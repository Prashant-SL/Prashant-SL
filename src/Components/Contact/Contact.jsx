import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Contact.module.css";

const Contact = () => {
  const { newTheme } = React.useContext(ThemeContext);
  return (
    <footer
      className={styles.footer}
      id="contact"
      style={{ background: `${newTheme.highlightBackground}` }}
    >
      <div className={styles.container}>
        <h1 style={{ color: `${newTheme.title}` }}>Contact Me</h1>
        <p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
          I'm actively looking for any new opportunities, in full-stack web
          development.
        </p>
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}
        >
          <a
            href="tel:7676534465"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-phone-alt" />
            <p style={{ fontSize: "14px" }}>7676534465</p>
          </a>
          <a
            href="mailto: pacchidon07@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope"></i>
            <p style={{ fontSize: "14px" }}>prashantslxmath@gmail.com</p>
          </a>
          <a
            href="https://github.com/Prashant-SL"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
            <p style={{ fontSize: "14px" }}>Prashant-SL</p>
          </a>

          <a
            href="https://www.linkedin.com/in/prashant-sl/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
            <p style={{ fontSize: "14px" }}>Prashant-SL</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
