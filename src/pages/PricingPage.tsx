import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { PRICING_PLANS } from "../data/pricing";

export function PricingPage() {
  return (
    <main className="page-main">
      <PageHero
        badge="Abonnements"
        title="Tarifs"
        subtitle="Choisis la formule qui correspond à ton rythme — du sport occasionnel à l'organisation régulière."
      />

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {PRICING_PLANS.map((plan) => (
              <article
                key={plan.id}
                className={`pricing-card ${plan.highlighted ? "pricing-card-highlight" : ""}`}
              >
                {plan.highlighted && (
                  <span className="pricing-popular">Le plus populaire</span>
                )}
                <h2 className="pricing-name">{plan.name}</h2>
                <div className="pricing-price-row">
                  <span className="pricing-price">{plan.price}</span>
                  <span className="pricing-period">{plan.period}</span>
                </div>
                <p className="pricing-desc">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${plan.highlighted ? "btn-secondary" : "btn-outline"} pricing-cta`}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>

          <p className="pricing-note">
            Le plan Premium correspond au paiement Stripe configuré dans
            l&apos;application (4,99 €). Les tarifs peuvent évoluer au lancement
            officiel — les abonnés actifs seront prévenus par e-mail.
          </p>
        </div>
      </section>

      <section className="pricing-compare">
        <div className="container">
          <h2 className="section-title">Comparatif rapide</h2>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Fonctionnalité</th>
                  <th>Gratuit</th>
                  <th>Basic</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <CompareRow feature="Carte & découverte" free basic premium />
                <CompareRow feature="Rejoindre des événements" free basic premium />
                <CompareRow
                  feature="Créer des événements"
                  free="2 / mois"
                  basic="5 / mois"
                  premium="Illimité"
                />
                <CompareRow
                  feature="Événements privés"
                  free={false}
                  basic
                  premium
                />
                <CompareRow
                  feature="Messagerie événement"
                  free="Limitée"
                  basic="Illimitée"
                  premium="Illimitée"
                />
                <CompareRow
                  feature="Support"
                  free="Standard"
                  basic="Standard"
                  premium="Prioritaire"
                />
              </tbody>
            </table>
          </div>
          <p className="pricing-faq-link">
            Des questions ? Consulte la{" "}
            <Link to="/faq">FAQ utilisateur</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}

function CompareRow({
  feature,
  free,
  basic = true,
  premium = true,
}: {
  feature: string;
  free: boolean | string;
  basic?: boolean | string;
  premium?: boolean | string;
}) {
  return (
    <tr>
      <td>{feature}</td>
      <td><Cell value={free} /></td>
      <td><Cell value={basic} /></td>
      <td><Cell value={premium} /></td>
    </tr>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="compare-yes">✓</span>;
  if (value === false) return <span className="compare-no">—</span>;
  return <span>{value}</span>;
}
