# SASOR Landing

Page de présentation marketing pour l'application mobile SASOR (événements sportifs sociaux).

## Stack

- React + TypeScript (Vite)
- GSAP + ScrollTrigger pour les animations

## Démarrage

```bash
npm install
npm run dev
```

Build production : `npm run build`

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Landing principale |
| `/tarifs` | Gratuit, Basic (2,99 €), Premium (4,99 € — Stripe) |
| `/faq` | FAQ utilisateur par catégories |
| `/contact` | Formulaire + coordonnées |

## Design

Reprend la charte du frontend Expo (`sasor-frontend`) :

- Bleu primaire `hsl(225, 99%, 65%)`
- Vert néon `hsl(155, 98%, 54%)` / `#18FD9C`
- Fond clair gris, titres en majuscules gras
- Section carte sombre avec bulles type marqueurs BD
