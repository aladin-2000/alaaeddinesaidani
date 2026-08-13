# Portfolio — Alaa Eddine Saidani

Portfolio Angular 20 (composants standalone), basé sur le CV.

## Démarrer en local

```bash
npm install
npm start
```

Puis ouvrir http://localhost:4200

## Build de production

```bash
npm run build
```

Les fichiers statiques sont générés dans `dist/portfolio/browser` — déployables tels quels sur
Vercel, Netlify, GitHub Pages ou tout hébergeur de fichiers statiques.

## Structure

```
src/app/
  app.component.ts        racine, assemble les sections
  app.config.ts
  components/
    nav.component.ts       navigation, style "endpoints REST"
    hero.component.ts      en-tête, réponse JSON simulée
    about.component.ts
    experience.component.ts
    projects.component.ts
    skills.component.ts
    contact.component.ts
    footer.component.ts
```

## Personnaliser

- Contenu : directement dans le `template` de chaque composant, ou dans les tableaux
  `roles` / `projects` / `groups` en bas de fichier pour experience/projects/skills.
- Couleurs & typographie : tokens CSS dans `src/styles.css` (`:root`).
