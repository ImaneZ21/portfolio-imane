import { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo-IZ-orange.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className={`header d-flex ${isOpen ? "open" : "close"}`}>
            <div className="header-test">
              <img className="header-logo" src={logo} alt="Logo"/>
              <button className="burger-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
              </button>
            </div>

            <div className="header-top">
              <a
                href="#about"
                className="pe-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                A propos
              </a>
              <a
                href="#projects"
                className="pe-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                Mes projets
              </a>
              <a
                href="#skills"
                className="pe-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                Mes compétences
              </a>
              <a
                className="pe-4"
                href="public\files\Zerdag_Imane_2_kanban_112024.pdf"
                download
              >
                Mon CV
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
