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
            <span className="accent">prochain match</span>
            <span className="accent-green">près de toi</span>
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
          <div className="hero-phone" aria-hidden>
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-header">Accueil</div>
              <div className="phone-section">
                <p className="phone-section-label">Découvrir</p>
                <div className="phone-cards">
                  <div className="phone-card">
                    <div className="phone-card-img" />
                    <div className="phone-card-body">
                      <p className="phone-card-title">Foot 5v5</p>
                      <p className="phone-card-meta">Sam. 18h · Paris 11</p>
                      <div className="phone-badges">
                        <span className="phone-badge">Foot</span>
                        <span className="phone-badge">4/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="phone-card">
                    <div
                      className="phone-card-img"
                      style={{
                        background:
                          "linear-gradient(135deg, #18FD9C, #4D7BFF)",
                      }}
                    />
                    <div className="phone-card-body">
                      <p className="phone-card-title">Run club</p>
                      <p className="phone-card-meta">Dim. 9h · Canal</p>
                      <div className="phone-badges">
                        <span className="phone-badge">Course</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="phone-nav">
                <span className="phone-nav-dot" />
                <span className="phone-nav-dot active" />
                <span className="phone-nav-add">+</span>
                <span className="phone-nav-dot" />
                <span className="phone-nav-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
