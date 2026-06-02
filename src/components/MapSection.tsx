import mapScreenshot from "../assets/map.png";
import { PhoneMockup } from "./PhoneMockup";

export function MapSection() {
  return (
    <section id="carte" className="map-section">
      <div className="container map-section-grid">
        <div className="map-section-content">
          <h2 className="section-title">La carte SASOR</h2>
          <p className="section-subtitle">
            Une carte noir & blanc, des marqueurs en bulles BD avec photo
            d&apos;événement et compteur de participants. L&apos;accent vert
            néon guide l&apos;œil — exactement comme dans l&apos;app mobile.
          </p>
          <ul className="map-features-list">
            <li>Géolocalisation et événements dans un rayon de 50 km</li>
            <li>Navigation vers le lieu (Google Maps, Apple Plans, Waze)</li>
            <li>Callouts avec distance, sport et bouton « Y aller »</li>
          </ul>
        </div>

        <div className="map-section-visual">
          <PhoneMockup
            src={mapScreenshot}
            alt="Capture d'écran de la carte SASOR"
            className="phone-mockup--map"
          />
        </div>
      </div>
    </section>
  );
}
