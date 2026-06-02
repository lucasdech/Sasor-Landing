import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} SASOR — Événements sportifs sociaux</p>
        <div className="footer-links">
          <Link to="/">Accueil</Link>
          <Link to="/tarifs">Tarifs</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
