import "./footer.scss";
import linkedin from "../../assets/linkedin-logo-orange.png"

function Footer() {
  return (
    <>
      <footer>
        <div className="footer d-flex">
          <p className="footer-copyright">
            © 2025 Imane ZERDAG. Tous droits réservés.
          </p>
          <img className="footer-link" onClick={() => window.open("https://fr.linkedin.com/in/imane-zerdag", "_blank")} src={linkedin} alt="Logo linkedin"/>
        </div>
      </footer>
    </>
  );
}

export default Footer;
