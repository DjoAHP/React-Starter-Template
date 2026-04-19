# React Starter Template


Template moderne et prête pour la production pour créer des applications React rapidement.

## Stack Technique

| Technologie | Version | Description |
|-------------|---------|-------------|
| **React** | 19.2.x | Dernière version stable |
| **Vite** | 8.0.x | Build tool ultra-rapide |
| **TypeScript** | 6.0.x | Typage statique |
| **Tailwind CSS** | 3.4.x | Framework utility-first |
| **shadcn/ui** | dernier | Composants UI accessibles |
| **Lucide Icons** | 1.6.x | Icônes cohérentes |

## Fonctionnalités

- **Style sombre par défaut** — Thème sombre préconfiguré avec CSS variables
- **Glassmorphism** — Effets de verre dépoli avec backdrop blur
- **Design moderne** — Badges glass, boutons glass, cartes avec transparence
- **Typographie Inter** — Police moderne depuis Google Fonts
- **Responsive** — Navigation adaptative, grid responsive
- **Accessible** — Composants shadcn/ui avec ARIA
- **TypeScript strict** — Meilleure sécurité de typage

## Structure du projet

```
├── src/
│   ├── components/
│   │   ├── ui/              # Composants shadcn/ui
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── input.tsx
│   │   └── lib/
│   │       └── utils.ts     # Utility cn() pour merging classes
│   ├── App.tsx              # Page principale avec design sombre/glassmorphism
│   ├── index.css            # Styles globaux + Tailwind + thème CSS vars
│   └── main.tsx             # Point d'entrée
├── components.json          # Configuration shadcn
├── tailwind.config.js       # Configuration Tailwind
├── vite.config.ts           # Configuration Vite
└── package.json            # Dépendances
```

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## Personnalisation

### Couleurs du thème

Modifiez les variables CSS dans `src/index.css` :

```css
:root {
  --primary: 262 83% 58%;      /* Violet */
  --accent: 217 91% 60%;       /* Bleu */
  --radius: 0.75rem;           /* Border radius */
}
```

### Ajouter des composants shadcn/ui

Pour ajouter de nouveaux composants shadcn :

```bash
npx shadcn@latest add dropdown-menu
npx shadcn@latest add dialog
npx shadcn@latest add sheet
```

## Architecture

### Composants UI
Les composants dans `src/components/ui/` sont basés sur shadcn/ui et utilisent:
- `class-variance-authority` pour les variantes
- `tailwind-merge` pour fusionner les classes
- `@radix-ui/react-slot` pour la composition

### Design System

Couleurs (format HSL) :
- `--background: 240 10% 3.9%` — Fond très sombre
- `--foreground: 0 0% 98%` — Texte clair
- `--primary: 262 83% 58%` — Violet accent
- `--accent: 217 91% 60%` — Bleu accent

### Glassmorphism

Classes CSS définies dans `src/index.css` :
- `.glass-card` — Carte avec verre dépoli
- `.glass-button` — Bouton avec effet verre
- `.glass-input` — Input avec verre dépoli

## Aliases

Les imports utilisent l'alias `@/` pour `src/` (configuré dans `vite.config.ts` et `tsconfig.app.json`).

## Notes

- **TypeScript strict mode** — Options de linting activées
- **ES2023 target** — Modern browsers uniquement
- **Tailwind 3** — Dernière version stable sans beta
- **Recommandation** — Évoluez cette template selon vos besoins

## Compatibilité

- Node.js >= 18.0.0
- npm 9+ ou equivalent
