import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Accueil", end: true },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-link active" : "nav-link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container nav-inner">
        <NavLink to="/" className="logo" end onClick={closeMenu}>
          SASOR
        </NavLink>

        <nav className="nav-links nav-links-desktop" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              end={"end" in item ? item.end : undefined}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a href="/#telecharger" className="btn btn-primary nav-cta nav-cta-desktop">
          Bientôt disponible
        </a>

        <button
          type="button"
          className={`nav-burger ${menuOpen ? "nav-burger-open" : ""}`}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`nav-overlay ${menuOpen ? "nav-overlay-visible" : ""}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <nav
        id="mobile-nav"
        className={`nav-mobile ${menuOpen ? "nav-mobile-open" : ""}`}
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        <div className="nav-mobile-header">
          <span className="logo">SASOR</span>
          <button
            type="button"
            className="nav-mobile-close"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>
        <ul className="nav-mobile-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={linkClass}
                end={"end" in item ? item.end : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <a
          href="/#telecharger"
          className="btn btn-primary nav-mobile-cta"
          onClick={closeMenu}
        >
          Bientôt disponible
        </a>
      </nav>
    </header>
  );
}
