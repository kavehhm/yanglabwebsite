import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header-1.css";

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}

const Navbar = (props) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize > 600) {
      setHamburgerActive(false);
    }
  }, [windowSize, hamburgerActive]);

  const hamburgerToggle = () => {
    setHamburgerActive(() => {
      return !hamburgerActive;
    });
  };

  const handleAboutClick = () => {
    props.descsec.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleResearchClick = () => {
    props.researchsec.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <header className="site-header">
        <div className="wrapper site-header__wrapper">
          <a href="/" className="brand">
            The Yang Lab
          </a>
          <nav className="nav">
            <button
              onClick={hamburgerToggle}
              className="nav__toggle"
              aria-expanded="false"
              type="button"
            >
              Menu
            </button>
            <ul
              className={
                hamburgerActive ? "nav__wrapper.active" : "nav__wrapper"
              }
            >
              
              <li className="nav__item">
                <button onClick={handleAboutClick}>About</button>
              </li>
              <li className="nav__item">
                <button onClick={handleResearchClick}>Research</button>
              </li>
              <li className="nav__item">
                <Link style={{textDecoration: 'none'}} to="/members">
                  <button>Members</button>
                </Link>
              </li>
              <li className="nav__item">
                <button href="/">Contact</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
