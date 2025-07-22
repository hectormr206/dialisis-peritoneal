import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Colores mejorados para accesibilidad WCAG 2.1 AA */
    --body-background: #f8fafc;
    --body-header: #ffffff;
    --body-footer: #ffffff;
    --body-card: #ffffff;
    --color-primary: #1e293b;
    --color-secondary: #64748b;
    --color-tertiary: #94a3b8;
    --color-actived: #059669;
    --color-accent: #3b82f6;
    --color-warning: #dc2626;
    --color-success: #16a34a;
    --border-color: #e2e8f0;
    --shadow-light: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-medium: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    
    /* Tipografía escalable y responsive */
    --font-family-primary: 'Noto Sans JP', system-ui, -apple-system, sans-serif;
    --font-size-base: clamp(16px, 4vw, 18px);
    --font-size-sm: clamp(14px, 3.5vw, 16px);
    --font-size-lg: clamp(18px, 4.5vw, 20px);
    --font-size-xl: clamp(20px, 5vw, 24px);
    --font-size-2xl: clamp(24px, 6vw, 32px);
    
    /* Espaciado responsivo */
    --spacing-xs: clamp(0.25rem, 1vw, 0.5rem);
    --spacing-sm: clamp(0.5rem, 2vw, 0.75rem);
    --spacing-md: clamp(0.75rem, 3vw, 1rem);
    --spacing-lg: clamp(1rem, 4vw, 1.5rem);
    --spacing-xl: clamp(1.5rem, 5vw, 2rem);
    --spacing-2xl: clamp(2rem, 6vw, 3rem);
    
    /* Dimensiones responsive */
    --header-height: clamp(60px, 15vw, 80px);
    --footer-height: clamp(60px, 15vw, 80px);
    --border-radius: 0.5rem;
    --max-width-container: 1200px;
  }

  /* Reset y configuración base */
  *, *::before, *::after {
    font-family: var(--font-family-primary);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    height: 100%;
    color: var(--color-primary);
    font-size: var(--font-size-base);
    line-height: 1.6;
    scroll-behavior: smooth;
    
    /* Mejoras para dispositivos táctiles */
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    height: 100%;
    width: 100%;
    background: var(--body-background);
    overscroll-behavior: none;
    /* Prevenir zoom en inputs en iOS */
    -webkit-text-size-adjust: 100%;
  }

  /* Reset para elementos de lista y texto */
  ul, li, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  /* Botones accesibles */
  button {
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    font-family: inherit;
    
    /* Área de toque mínima para móviles */
    min-height: 44px;
    min-width: 44px;
    
    /* Estados de interacción */
    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  /* Links accesibles */
  a {
    color: var(--color-accent);
    text-decoration: none;
    
    &:hover, &:focus {
      text-decoration: underline;
    }
    
    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  }

  /* Inputs accesibles */
  input, textarea, select {
    font-family: inherit;
    font-size: var(--font-size-base);
    line-height: 1.6;
    
    &:focus {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
  }
  }

  /* Contenedor principal */
  #app {
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }

  /* Utilidades para accesibilidad */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Skip link para navegación por teclado */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--color-accent);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 9999;
    border-radius: 4px;
    
    &:focus {
      top: 6px;
    }
  }

  /* Breakpoints para responsive design */
  @media (max-width: 480px) {
    :root {
      --font-size-base: 16px;
      --spacing-md: 0.75rem;
      --spacing-lg: 1rem;
    }
  }

  @media (min-width: 768px) {
    :root {
      --font-size-base: 18px;
    }
  }

  @media (min-width: 1024px) {
    :root {
      --font-size-base: 18px;
      --spacing-lg: 1.5rem;
      --spacing-xl: 2rem;
    }
  }

  /* Mejoras para modo oscuro (respeta preferencias del sistema) */
  @media (prefers-color-scheme: dark) {
    :root {
      --body-background: #0f172a;
      --body-header: #1e293b;
      --body-footer: #1e293b;
      --body-card: #1e293b;
      --color-primary: #f1f5f9;
      --color-secondary: #94a3b8;
      --color-tertiary: #64748b;
      --border-color: #334155;
    }
  }

  /* Reducir animaciones para usuarios con preferencias de movimiento reducido */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    html {
      scroll-behavior: auto;
    }
  }
`;
