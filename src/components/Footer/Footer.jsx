import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer__link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="footer__link">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer__link">
            Twitter
          </a>
        </div>
        
        <button onClick={scrollToTop} className="footer__back-to-top">
          ↑
        </button>
        
        <p className="footer__copyright">
          © 2026 Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
