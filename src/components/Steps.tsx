const STEPS = [
  {
    n: 1,
    title: "L'essentiel",
    text: "Nom de l'événement et choix du sport.",
  },
  {
    n: 2,
    title: "Les détails",
    text: "Lieu, nombre max de participants, visibilité.",
  },
  {
    n: 3,
    title: "Date & image",
    text: "Planifie la session et ajoute une photo accrocheuse.",
  },
];

export function Steps() {
  return (
    <section id="comment" className="steps">
      <div className="container">
        <h2 className="section-title">Comment ça marche</h2>
        <p className="section-subtitle">
          Créer un événement reprend le même parcours que dans l&apos;application
          — trois étapes claires, avec indicateur de progression.
        </p>
        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`step-item ${i < STEPS.length ? "" : "done"}`}
            >
              <div className="step-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
