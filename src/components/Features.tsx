const FEATURES = [
  {
    title: "Découvrir & suivre",
    description:
      "Parcours les événements autour de toi et ceux de tes abonnements. Rejoins une session en un geste.",
  },
  {
    title: "Carte interactive",
    description:
      "Visualise les événements sur une carte stylisée avec des bulles photo — comme dans l'app.",
  },
  {
    title: "Créer en 3 étapes",
    description:
      "Organise ton événement : l'essentiel, les détails, puis date et image. Simple et rapide.",
  },
  {
    title: "Communauté",
    description:
      "Suis d'autres sportifs, cherche des profils et échange via la messagerie d'événement.",
  },
  {
    title: "Mes événements",
    description:
      "Retrouve ceux que tu organises ou auxquels tu participes, avec badges sport et places.",
  },
  {
    title: "Événements privés",
    description:
      "Sessions publiques ou privées, avec limite de participants et invitations.",
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="features">
      <div className="container">
        <h2 className="section-title">Fonctionnalités</h2>
        <p className="section-subtitle">
          Tout ce dont tu as besoin pour bouger, rencontrer et pratiquer — dans
          une interface épurée, pensée mobile.
        </p>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <article key={f.title} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
