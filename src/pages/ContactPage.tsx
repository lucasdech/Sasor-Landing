import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";

const CONTACT_CHANNELS = [
  {
    title: "Support général",
    value: "support@sasor.fr",
    href: "mailto:support@sasor.fr",
  },
  {
    title: "Facturation",
    value: "billing@sasor.fr",
    href: "mailto:billing@sasor.fr",
  },
  {
    title: "Partenariats",
    value: "hello@sasor.fr",
    href: "mailto:hello@sasor.fr",
  },
];

export function ContactPage() {
  return (
    <main className="page-main">
      <PageHero
        title="Contact"
        subtitle="Une question sur l'app, un abonnement ou un partenariat ? Écris-nous."
      />

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="contact-info-title">Coordonnées</h2>
            <p className="contact-info-text">
              L&apos;équipe SASOR répond en français, du lundi au vendredi
              (9 h – 18 h, heure de Paris).
            </p>
            <ul className="contact-channels">
              {CONTACT_CHANNELS.map((ch) => (
                <li key={ch.href}>
                  <span className="contact-channel-label">{ch.title}</span>
                  <a href={ch.href}>{ch.value}</a>
                </li>
              ))}
            </ul>
            <div className="contact-extra">
              <h3>Réseaux</h3>
              <p>
                Instagram & LinkedIn — <em>bientôt</em>
              </p>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2 className="contact-form-title">Formulaire</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
