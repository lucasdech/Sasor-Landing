import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaqAccordion } from "../components/FaqAccordion";
import { PageHero } from "../components/PageHero";
import { FAQ_CATEGORIES, FAQ_ITEMS, type FaqItem } from "../data/faq";

export function FaqPage() {
  const [category, setCategory] = useState<FaqItem["category"] | "all">("all");

  const filtered = useMemo(
    () =>
      category === "all"
        ? FAQ_ITEMS
        : FAQ_ITEMS.filter((i) => i.category === category),
    [category],
  );

  return (
    <main className="page-main">
      <PageHero
        title="FAQ utilisateur"
        subtitle="Réponses aux questions les plus fréquentes sur SASOR, les événements et les abonnements."
      />

      <section className="faq-section">
        <div className="container faq-layout">
          <aside className="faq-sidebar">
            <p className="faq-sidebar-label">Catégories</p>
            <nav className="faq-filters">
              <button
                type="button"
                className={category === "all" ? "active" : ""}
                onClick={() => setCategory("all")}
              >
                Tout voir
              </button>
              {FAQ_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={category === c.id ? "active" : ""}
                  onClick={() => setCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </nav>
            <div className="faq-sidebar-cta">
              <p>Tu ne trouves pas ta réponse ?</p>
              <Link to="/contact" className="btn btn-primary">
                Nous contacter
              </Link>
            </div>
          </aside>

          <div className="faq-content">
            <FaqAccordion items={filtered} />
          </div>
        </div>
      </section>
    </main>
  );
}
