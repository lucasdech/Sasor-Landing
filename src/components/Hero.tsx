import homeScreenshot from "../assets/home.png";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden />
      <div className="hero-glow hero-glow-2" aria-hidden />
      <div className="container hero-grid">
        <div>
          <span className="hero-badge badge badge-green">
            Sport · Social · Local
          </span>
          <h1 className="hero-title">
            <span>Trouve ton</span>
            <span>prochain match</span>
            <span>près de toi</span>
          </h1>
          <p className="hero-desc">
            SASOR connecte les sportifs autour d&apos;événements locaux :
            foot, running, padel… Découvre, crée et rejoins des sessions en
            quelques taps.
          </p>
          <div className="hero-cta">
            <a href="#telecharger" className="btn btn-secondary">
              Télécharger l&apos;app
            </a>
            <a href="#fonctionnalites" className="btn btn-outline">
              Découvrir
            </a>
          </div>
        </div>

        <div className="hero-phone-wrap">
          <PhoneMockup
            src={homeScreenshot}
            alt="Capture d'écran de l'accueil SASOR"
            className="phone-mockup--hero"
            tilt
          />
        </div>
      </div>
    </section>
  );
}
