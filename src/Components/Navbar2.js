import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./header-1.css";

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}

const Navbar2 = (props) => {
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
                <Link style={{textDecoration: 'none'}} to="/home">
                  <button>Home</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar2;
