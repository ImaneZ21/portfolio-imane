import "./Header.scss";

function Header() {
  return (
    <nav>
      <div className="header d-flex">
        <div className="header-top d-flex">
          <a class="pe-4">A propos</a>
          <a class="pe-4">Contact</a>
        </div>
        <div className="header-bottom d-flex">
          <a class="pe-4 header-bottom-sub">Mes projets</a>
          <a class="pe-4 header-bottom-sub">Mes compétences</a>
          <a class="pe-4 header-bottom-sub">Mon CV</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
