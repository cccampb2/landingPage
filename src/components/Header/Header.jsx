import "./Header.css";

const Header = ({ onOpenModal }) => {
  return (
    <header className="header">
      <div className="header__logo">CALEB</div>
      <nav className="header__nav">
        <button className="header__link" onClick={() => onOpenModal("about")}>
          About
        </button>
        <button
          className="header__link"
          onClick={() => onOpenModal("portfolio")}
        >
          Portfolio
        </button>
        <button className="header__link" onClick={() => onOpenModal("contact")}>
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
