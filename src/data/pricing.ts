export type PlanId = "free" | "basic" | "premium";

export type PricingPlan = {
  id: PlanId;
  name: string;
  price: string;
  period: string;
  description: string;
  highlighted?: boolean;
  cta: string;
  features: string[];
};

/** Formules alignées sur le modèle backend (BASIC / PREMIUM) et Stripe (4,99 €). */
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Gratuit",
    price: "0 €",
    period: "pour toujours",
    description: "Idéal pour découvrir SASOR et rejoindre des sessions près de chez toi.",
    cta: "Commencer gratuitement",
    features: [
      "Découvrir les événements publics",
      "Carte interactive (rayon 50 km)",
      "Rejoindre des événements ouverts",
      "Profil, abonnements et recherche",
      "Messagerie d'événement (lecture)",
      "Jusqu'à 2 participations / mois",
    ],
  },
  {
    id: "basic",
    name: "Basic",
    price: "2,99 €",
    period: "/ mois",
    description: "Pour les sportifs réguliers qui organisent et suivent plus d'activités.",
    cta: "Choisir Basic",
    features: [
      "Tout le plan Gratuit",
      "Créer jusqu'à 5 événements / mois",
      "Événements privés et invitations",
      "Messagerie illimitée par événement",
      "Fil « Mes abonnements » prioritaire",
      "Badges sport sur tes événements",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "4,99 €",
    period: "/ mois",
    description: "L'offre complète — même tarif que l'abonnement Stripe de l'app.",
    highlighted: true,
    cta: "Passer Premium",
    features: [
      "Tout le plan Basic",
      "Événements illimités",
      "Mise en avant sur la carte (bientôt)",
      "Statistiques participants & exports",
      "Support prioritaire",
      "Annulation à tout moment",
    ],
  },
];
