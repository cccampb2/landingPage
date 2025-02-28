import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/calebccampbell"
          target="_blank"
          className="footer__link"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://github.com/cccampb2/cccampb2"
          target="_blank"
          className="footer__link"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <div className="footer__copyright">&copy; 2025 Caleb Campbell </div>
    </footer>
  );
}

export default Footer;
