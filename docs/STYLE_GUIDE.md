# Guia d'Estils - Roborock S5 + ChatGPT

## Índex
- [Colors](#colors)
- [Tipografia](#tipografia)
- [Espaciats](#espaciats)
- [Components](#components)
- [Bones Pràctiques](#bones-pràctiques)

---

## Colors

Tots els colors del projecte estan definits com a variables CSS a `src/styles/variables.css`.

### Colors Primaris

```css
--color-primary: #646cff;        /* Blau primari */
--color-primary-hover: #535bf2;  /* Hover del primari */
--color-primary-dark: #4338ca;   /* Variant fosc */
```

**Ús**: Botons principals, enllaços, accents destacats.

### Colors de Fons

```css
--color-bg-primary: #242424;     /* Fons principal */
--color-bg-secondary: #1a1a1a;   /* Fons secundari */
--color-bg-card: rgba(255, 255, 255, 0.05);  /* Targetes */
--color-bg-card-hover: rgba(255, 255, 255, 0.08);  /* Hover targetes */
```

**Ús**: Fons de pàgina, targetes, cards, seccions.

### Colors de Text

```css
--color-text-primary: rgba(255, 255, 255, 0.87);   /* Text principal */
--color-text-secondary: rgba(255, 255, 255, 0.7);  /* Text secundari */
--color-text-muted: rgba(255, 255, 255, 0.5);      /* Text apagat */
```

**Ús**: Jerarquia de text segons importància.

### Colors d'Accent

```css
--color-accent-blue: #4a9eff;
--color-accent-purple: #8b5cf6;
--color-accent-green: #10b981;
```

**Ús**: Gradients, destacats especials, icones.

### Colors Semàntics

```css
--color-success: #10b981;  /* Verd - Èxit */
--color-warning: #f59e0b;  /* Taronja - Avís */
--color-error: #ef4444;    /* Vermell - Error */
--color-info: #3b82f6;     /* Blau - Informació */
```

**Ús**: Missatges d'estat, validacions, notificacions.

---

## Tipografia

### Font Family

```css
--font-family-base: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
--font-family-mono: 'Courier New', monospace;
```

### Mides de Font

| Variable | Mida | Píxels | Ús |
|----------|------|--------|----|
| `--font-size-xs` | 0.75rem | 12px | Text molt petit |
| `--font-size-sm` | 0.875rem | 14px | Text petit |
| `--font-size-base` | 1rem | 16px | Text base |
| `--font-size-lg` | 1.125rem | 18px | Text gran |
| `--font-size-xl` | 1.25rem | 20px | Subtítols |
| `--font-size-2xl` | 1.5rem | 24px | H4 |
| `--font-size-3xl` | 1.875rem | 30px | H3 |
| `--font-size-4xl` | 2.25rem | 36px | H2 |
| `--font-size-5xl` | 3rem | 48px | H1 |
| `--font-size-6xl` | 3.75rem | 60px | Hero titles |

### Font Weights

```css
--font-weight-normal: 400;    /* Text normal */
--font-weight-medium: 500;    /* Èmfasi lleuger */
--font-weight-semibold: 600;  /* Subtítols */
--font-weight-bold: 700;      /* Títols */
```

### Line Heights

```css
--line-height-tight: 1.2;     /* Títols */
--line-height-normal: 1.5;    /* Text base */
--line-height-relaxed: 1.75;  /* Paràgrafs llargs */
```

### Exemple d'Ús

```css
/* Títol principal */
h1 {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

/* Paràgraf */
p {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}
```

---

## Espaciats

### Sistema d'Espaciats

| Variable | Valor | Píxels |
|----------|-------|--------|
| `--spacing-xs` | 0.25rem | 4px |
| `--spacing-sm` | 0.5rem | 8px |
| `--spacing-md` | 1rem | 16px |
| `--spacing-lg` | 1.5rem | 24px |
| `--spacing-xl` | 2rem | 32px |
| `--spacing-2xl` | 3rem | 48px |
| `--spacing-3xl` | 4rem | 64px |
| `--spacing-4xl` | 6rem | 96px |

### Exemple d'Ús

```css
.card {
  padding: var(--spacing-xl);        /* 32px */
  margin-bottom: var(--spacing-lg);  /* 24px */
  gap: var(--spacing-md);            /* 16px */
}
```

---

## Components

### Botons

```css
.button {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
}

.button:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
}
```

### Targetes

```css
.card {
  padding: var(--spacing-xl);
  background-color: var(--color-bg-card);
  border-radius: var(--border-radius-lg);
  transition: background-color var(--transition-base);
}

.card:hover {
  background-color: var(--color-bg-card-hover);
}
```

### Border Radius

```css
--border-radius-sm: 4px;
--border-radius-md: 8px;
--border-radius-lg: 12px;
--border-radius-xl: 16px;
--border-radius-full: 9999px;  /* Circular */
```

### Sombres

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### Transicions

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
```

---

## Bones Pràctiques

### 1. Utilitzar Variables CSS Sempre

❌ **Malament**:
```css
.button {
  color: #646cff;
  padding: 16px 32px;
  font-size: 16px;
}
```

✅ **Correcte**:
```css
.button {
  color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-base);
}
```

### 2. Jerarquia Visual Clara

- Utilitzar `--font-size-*` per establir jerarquia tipogràfica
- Utilitzar `--color-text-*` per diferenciar importància del text
- Mantenir consistència en pesos de font

### 3. Espaciats Consistents

- Utilitzar el sistema d'espaciats definit
- Evitar valors arbitraris (com `23px` o `17px`)
- Mantenir múltiples de l'escala d'espaciats

### 4. Hover i Transicions

```css
.element {
  transition: all var(--transition-base);
}

.element:hover {
  /* Canvis visuals */
}
```

### 5. Accessibilitat

- Mantenir contrast de colors adequat
- Utilitzar `line-height` generós per llegibilitat
- Mides de font mínimes de 14px per text de cos

### 6. Responsive Design

```css
@media (max-width: 768px) {
  .hero h1 {
    font-size: var(--font-size-4xl); /* Reduir en mòbil */
  }
}
```

### 7. Z-index Organitzat

```css
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
```

---

## Actualitzacions

**Data**: 2024-01-XX  
**Versió**: 1.0.0  
**Autor**: Equip de desenvolupament

### Changelog

- ✅ Sistema de variables CSS implementat
- ✅ Paleta de colors estandarditzada
- ✅ Tipografia unificada
- ✅ Espaciats consistents
- ✅ Components refactoritzats

---

## Recursos

- [Fitxer de variables](../src/styles/variables.css)
- [CSS Variables MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Design Tokens](https://www.designtokens.org/)
