import { useState } from "react";
import "./Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header>
      <nav>
        <div className={`header d-flex ${isOpen ? "open" : "close"}`}>
          <button className="burger-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>

          <div className="header-top">
            <a href="#about" className="pe-4">
              A propos
            </a>
            <a href="#projects" className="pe-4">
              Mes projets
            </a>
            <a href="#skills" className="pe-4">
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
