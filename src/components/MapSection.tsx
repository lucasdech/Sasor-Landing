const BUBBLES = [
  { label: "6/8", gradient: "linear-gradient(135deg, #4D7BFF, #2563eb)" },
  { label: "3/12", gradient: "linear-gradient(135deg, #18FD9C, #10b981)" },
  { label: "10/10", gradient: "linear-gradient(135deg, #ef4444, #dc2626)", full: true },
  { label: "2/6", gradient: "linear-gradient(135deg, #a855f7, #7c3aed)" },
];

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

        <div className="map-preview" aria-hidden>
          <div className="map-grid-lines" />
          {BUBBLES.map((b) => (
            <div key={b.label} className="map-bubble">
              <div className="map-bubble-body">
                <div
                  className="map-bubble-img"
                  style={{ background: b.gradient }}
                />
                <span
                  className="map-bubble-count"
                  style={
                    b.full
                      ? { background: "rgba(231, 76, 60, 0.95)" }
                      : undefined
                  }
                >
                  {b.label}
                </span>
              </div>
              <div className="map-bubble-pointer" />
            </div>
          ))}
          <button type="button" className="map-locate-btn" aria-label="Localiser">
            ◎
          </button>
        </div>
      </div>
    </section>
  );
}
