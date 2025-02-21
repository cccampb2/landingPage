import "./Header.css";
import logo from "../../assets/cclogo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState("false");
  const { scrollY } = useScroll();
  const [isGreaterThanThreshold, setIsGreaterThanThreshold] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > 100) {
      setIsGreaterThanThreshold(true);
    } else {
      setIsGreaterThanThreshold(false);
    }

    if (latest > prev && latest > 100) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
  });

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true);
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    const handleResizeEnd = () => {
      setIsResizing(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResizeEnd);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResizeEnd);
    };
  }, []);

  const NAV_DURATION = 0.75;
  const scale = 1.1;

  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: isResizing ? 0 : 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: NAV_DURATION,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      x: "130%",
      transition: {
        duration: isResizing ? 0 : NAV_DURATION,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={isScrollingDown ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`header ${isGreaterThanThreshold ? "header__scroll" : ""}`}
    >
      <img src={logo} alt="Caleb Campbell logo" className="header__logo" />
      {!open && (
        <nav>
          <ul className="header__nav-links">
            <li className="header__navlink">
              <a className="header__link" href="#hero">
                Home<span className="header__period">.</span>
              </a>
            </li>
            <li className="header__navlink">
              <a className="header__link" href="#about">
                About<span className="header__period">.</span>
              </a>
            </li>
            <li className="header__navlink">
              <a className="header__link" href="#projects">
                Projects<span className="header__period">.</span>
              </a>
            </li>
            <li className="header__navlink">
              <a className="header__link" href="#contact">
                Contact<span className="header__period">.</span>
              </a>
            </li>
          </ul>
        </nav>
      )}

      {
        <nav className="header__nav-mobile">
          <motion.ul
            initial={closed}
            animate={open ? "open" : "closed"}
            variants={parentVariants}
            className="header__nav-links-mobile"
          >
            <motion.li
              variants={childVariants}
              whileHover={{ scale }}
              layout
              href="#"
              className="header__navlink-mobile"
            >
              <a className="header__link-mobile" href="#hero">
                Home<span className="header__period">.</span>
              </a>
            </motion.li>
            <motion.li
              variants={childVariants}
              whileHover={{ scale }}
              href="#"
              className="header__navlink-mobile"
            >
              <a className="header__link-mobile" href="#about">
                About<span className="header__period">.</span>
              </a>
            </motion.li>
            <motion.li
              variants={childVariants}
              whileHover={{ scale }}
              href="#"
              className="header__navlink-mobile"
            >
              <a className="header__link-mobile" href="#projects">
                Projects<span className="header__period">.</span>
              </a>
            </motion.li>
            <motion.li
              variants={childVariants}
              whileHover={{ scale }}
              href="#"
              className="header__navlink-mobile"
            >
              <a className="header__link-mobile" href="#contact">
                Contact<span className="header__period">.</span>
              </a>
            </motion.li>
          </motion.ul>
        </nav>
      }

      <button
        onClick={handleClick}
        className="header__menu-btn"
        aria-label="Toggle navigation"
      >
        <BiMenuAltRight />
      </button>
    </motion.div>
  );
}

export default Header;
