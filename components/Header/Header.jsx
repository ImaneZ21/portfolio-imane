import { useState } from "react";
import "./Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className={`header d-flex ${isOpen ? "open" : "close"}`}>
        <button className="burger-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        <div className="header-top">
          <a className="pe-4">A propos</a>
          <a className="pe-4">Contact</a>
        </div>

        <div className="header-bottom">
          <a className="pe-4">Mes projets</a>
          <a className="pe-4">Mes compétences</a>
          <a className="pe-4">Mon CV</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
