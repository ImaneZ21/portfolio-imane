import './Header.scss'

function Header() {
  return (
    <nav>
      <div className="header d-flex">
        <p class="me-2">A propos</p>
        <p class="me-2">Contact</p>
        <p class="me-2">Mes projets</p>
        <p class="me-2">Mes compétences</p>
        <p class="me-2">Mon CV</p>
      </div>
    </nav>
  );
}

export default Header;