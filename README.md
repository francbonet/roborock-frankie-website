# Roborock S5 + ChatGPT Landing

Landing page multiidioma per al projecte de connexió ChatGPT amb Roborock S5.

## 🚀 Tecnologies

- React 18 + TypeScript
- Vite
- Context API per gestió d'estat
- Suport multiidioma (Català, Castellà, Anglès)

## 📦 Instal·lació

```bash
npm install
```

## 🔧 Scripts disponibles

```bash
# Executar en mode desenvolupament
npm run dev

# Compilar per producció
npm run build

# Previsualitzar build de producció
npm run preview

# Lint del codi
npm run lint
```

## 🌍 Idiomes suportats

- Català (ca)
- Castellà (es)
- Anglès (en)

## 📁 Estructura del projecte

```
src/
├── components/          # Components React
│   └── LanguageSelector.tsx
├── content/            # Contingut i traduccions
│   └── translations.ts
├── context/            # Context providers
│   └── LanguageContext.tsx
├── hooks/              # Custom hooks
│   └── useLanguage.ts
├── App.tsx             # Component principal
└── main.tsx            # Entry point
```

## ✅ Estat del projecte

- [x] Setup inicial amb Vite + React + TypeScript
- [x] Sistema de traduccions amb Context API
- [x] Selector d'idioma funcional
- [x] Hello World en 3 idiomes
- [x] Estructura escalable

## 🚀 Desplegament

El projecte es desplega automàticament a GitHub Pages mitjançant GitHub Actions quan es fa push a la branca `main`.

**URL de producció:** https://[username].github.io/roborock-chatgpt/

### Configuració necessària

1. Anar a Settings > Pages al repositori de GitHub
2. A "Build and deployment" > "Source", seleccionar "GitHub Actions"
3. El workflow `.github/workflows/deploy.yml` gestionarà el desplegament automàtic

## 🔄 Pròxims passos

- Afegir seccions: Hero, Features, Demo, Contact
- Implementar disseny responsive
- Afegir animacions i transicions