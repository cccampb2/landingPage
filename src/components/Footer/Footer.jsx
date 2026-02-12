import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a
            href="https://github.com/cccampb2"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/calebccampbell"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
        </div>

        <button onClick={scrollToTop} className="footer__back-to-top">
          ↑
        </button>

        <p className="footer__copyright">
          © 2026 Caleb Campbell. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
