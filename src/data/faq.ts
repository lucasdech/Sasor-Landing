export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: "compte" | "evenements" | "abonnement" | "technique";
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-sasor",
    category: "compte",
    question: "Qu'est-ce que SASOR ?",
    answer:
      "SASOR est une application mobile qui met en relation des sportifs autour d'événements locaux : foot, running, padel, etc. Tu peux découvrir des sessions, les visualiser sur une carte, créer les tiennes et échanger avec les participants.",
  },
  {
    id: "free-account",
    category: "compte",
    question: "L'inscription est-elle gratuite ?",
    answer:
      "Oui. La création de compte et l'utilisation du plan Gratuit ne nécessitent aucun paiement. Des formules payantes (Basic et Premium) débloquent davantage de fonctionnalités pour les organisateurs.",
  },
  {
    id: "create-event",
    category: "evenements",
    question: "Comment créer un événement ?",
    answer:
      "Depuis l'app, appuie sur le bouton « + » dans la barre de navigation. Le parcours se fait en 3 étapes : l'essentiel (nom, sport), les détails (lieu, participants max) puis la date et l'image. Selon ton abonnement, un quota mensuel peut s'appliquer.",
  },
  {
    id: "join-event",
    category: "evenements",
    question: "Comment rejoindre ou quitter un événement ?",
    answer:
      "Ouvre la fiche de l'événement depuis l'accueil, la carte ou la recherche, puis appuie sur « Rejoindre ». Si l'événement est complet, le bouton affiche « Plus de place ». En tant que participant, tu peux quitter à tout moment via « Quitter ».",
  },
  {
    id: "private-events",
    category: "evenements",
    question: "Qu'est-ce qu'un événement privé ?",
    answer:
      "Un événement privé n'apparaît pas dans la découverte publique de la même manière et s'appuie sur le système d'invitations. Cette option est disponible à partir du plan Basic.",
  },
  {
    id: "map-radius",
    category: "evenements",
    question: "Quels événements vois-je sur la carte ?",
    answer:
      "La carte affiche les événements publics géolocalisés dans un rayon d'environ 50 km autour de ta position. Tu peux ouvrir une bulle pour voir les détails, la distance et lancer la navigation (Google Maps, Apple Plans ou Waze).",
  },
  {
    id: "messaging",
    category: "evenements",
    question: "Qui peut accéder à la messagerie d'un événement ?",
    answer:
      "Seuls l'organisateur et les participants inscrits peuvent échanger dans le chat de l'événement. Sur le plan Gratuit, l'envoi de messages peut être limité ; les formules payantes lèvent cette restriction.",
  },
  {
    id: "plans-diff",
    category: "abonnement",
    question: "Quelle différence entre Gratuit, Basic et Premium ?",
    answer:
      "Le plan Gratuit permet de découvrir et rejoindre des événements avec des limites. Basic ajoute la création régulière d'événements et les sessions privées. Premium (4,99 €/mois) supprime les quotas de création et ajoute des avantages organisateur — c'est l'offre facturée via Stripe dans l'application.",
  },
  {
    id: "cancel-sub",
    category: "abonnement",
    question: "Puis-je annuler mon abonnement ?",
    answer:
      "Oui. Les abonnements Basic et Premium sont sans engagement : tu peux annuler depuis les réglages de paiement de ton compte (App Store / Google Play ou portail Stripe selon la plateforme de souscription). Tu conserves l'accès jusqu'à la fin de la période en cours.",
  },
  {
    id: "payment-security",
    category: "abonnement",
    question: "Les paiements sont-ils sécurisés ?",
    answer:
      "Les transactions passent par Stripe, un prestataire certifié PCI-DSS. SASOR ne stocke pas les numéros de carte bancaire sur ses serveurs.",
  },
  {
    id: "offline",
    category: "technique",
    question: "L'app fonctionne-t-elle hors ligne ?",
    answer:
      "Une connexion internet est nécessaire pour synchroniser les événements, la carte et la messagerie. Certaines informations déjà chargées peuvent rester visibles brièvement, mais les actions (rejoindre, publier) requièrent le réseau.",
  },
  {
    id: "contact-support",
    category: "technique",
    question: "Comment contacter le support ?",
    answer:
      "Utilise le formulaire sur la page Contact ou écris à support@sasor.fr. Les abonnés Premium bénéficient d'un délai de réponse prioritaire.",
  },
];

export const FAQ_CATEGORIES: { id: FaqItem["category"]; label: string }[] = [
  { id: "compte", label: "Compte" },
  { id: "evenements", label: "Événements" },
  { id: "abonnement", label: "Abonnement" },
  { id: "technique", label: "Technique" },
];
