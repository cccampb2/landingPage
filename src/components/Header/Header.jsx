import "./Header.css";
import { FaHome, FaPhone, FaStar } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../../assets/cclogo.png";

function Header() {
  return (
    <nav className="header-2">
      <img src={logo} alt="Caleb Campbell logo" className="header__logo-2" />
      <div className="header__icons">
        <a href="#hero" className="header__icon" data-text="Home">
          <FaHome />
        </a>
        <a href="#about" className="header__icon" data-text="About Me">
          <BsPersonCircle />
        </a>
        <a href="#experience" className="header__icon" data-text="Experience">
          <FaStar />
        </a>
        <a href="#contact" className="header__icon" data-text="Contact">
          <FaPhone />
        </a>
      </div>
    </nav>
  );
}

export default Header;
