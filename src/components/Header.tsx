import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-link active" : "nav-link";

export function Header() {
  return (
    <header className="header">
      <div className="container nav-inner">
        <NavLink to="/" className="logo" end>
          SASOR
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" className={linkClass} end>
            Accueil
          </NavLink>
          <NavLink to="/tarifs" className={linkClass}>
            Tarifs
          </NavLink>
          <NavLink to="/faq" className={linkClass}>
            FAQ
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
        <a href="/#telecharger" className="btn btn-primary nav-cta">
          Bientôt disponible
        </a>
      </div>
    </header>
  );
}
