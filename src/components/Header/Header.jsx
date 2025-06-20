import "./Header.css";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import logo from "../../assets/cclogo.png";
import { useState } from "react";
import { IconContext } from "react-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="header">
        <img src={logo} alt="Caleb Campbell logo" className="header__logo-2" />
        <div className="header__icons">
          <a href="#hero" className="header__icon">
            [Home]
          </a>
          <a href="#about" className="header__icon">
            [About Me]
          </a>
          <a href="#experience" className="header__icon">
            [Experience]
          </a>
          <a href="#contact" className="header__icon">
            [Contact Me]
          </a>
        </div>
      </nav>
      <IconContext.Provider value={{ size: "100%" }}>
        {!isOpen && (
          <div onClick={toggleOpen} className="header-mobile-menu">
            <IoIosMenu />
          </div>
        )}

        <nav
          className={`header-mobile ${
            isOpen ? "header-mobile_open" : "header-mobile_close"
          }`}
        >
          <div onClick={toggleOpen} className="header__icons">
            <div className="header-mobile-close">
              <IoIosClose />
            </div>
            <a href="#hero" className="header__icon">
              [Home]
            </a>
            <a href="#about" className="header__icon">
              [About Me]
            </a>
            <a href="#experience" className="header__icon">
              [Experience]
            </a>
            <a href="#contact" className="header__icon">
              [Contact Me]
            </a>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Header;
