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
    /* #047857 sobre blanco (#ffffff) = 5.48:1, cumple WCAG AA para texto normal
       (mínimo 4.5:1). El valor previo #059669 medía 3.77:1 y fallaba AA. */
    --color-actived: #047857;
    --color-accent: #3b82f6;
    --color-warning: #dc2626;
    --color-success: #16a34a;
    /* Tokens for UrgentWarningCallout (R4.4, R6.1) — a tinted-background
       treatment, deliberately different from the accent-left-border
       "informational callout" pattern (e.g. MigrationNotice) so the two
       are visually distinct, not just differently colored. Both pairs
       measured with the WCAG relative-luminance formula (same method used
       for the PR5a nav-label/CompleteButton measurements):
       #991b1b sobre #fee2e2 (urgent) = 6.80:1; #92400e sobre #fef3c7
       (caution) = 6.37:1 — ambos superan AA (4.5:1) con margen. */
    --color-urgent: #991b1b;
    --color-urgent-bg: #fee2e2;
    --color-caution: #92400e;
    --color-caution-bg: #fef3c7;
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
    /* Piso subido de 60px a 64px (PR5a): la barra de navegación ahora
       muestra etiquetas de texto visibles bajo cada ícono (antes eran
       sr-only), y necesita espacio vertical extra para 2 líneas de texto
       sin recortar contenido — R4.2, R6.3. */
    --footer-height: clamp(64px, 16vw, 84px);
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
    /* Establishes #app as the containing block for every position: absolute
       descendant that has no closer positioned ancestor (skip-link, the
       sr-only thead in EscalationTable's mobile reflow, etc.). Without
       this, those elements resolve their containing block to the true
       document root instead of #app: containing-block resolution follows
       the position property, not overflow, so #app's overflow-x: hidden
       (which computes overflow-y: auto per the CSS Overflow spec's
       one-axis-visible interop rule) does NOT scope them, and their layout
       box leaks past #app's own clipped/scrolled height straight into
       document.documentElement.scrollHeight, reproduced on
       /cuidados/senales-de-alarma at narrow widths, where the reflowed
       table hid its thead via the sr-only pattern and it silently added
       ~500px of invisible phantom height below the visible page. */
    position: relative;
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

  /* Skip link para navegación por teclado. position: fixed (no absolute)
     a propósito: su containing block queda siempre anclado al viewport
     sin importar la cadena de ancestros (evita el bug de phantom-height
     documentado sobre #app sin depender de que #app tenga
     position: relative). transform: translateY(-200%) lo saca de la
     pantalla en vez de un top negativo: no depende de ningún alto fijo
     ni se ve afectado por scroll/overflow de ancestros, y sigue siendo el
     primer elemento enfocable del documento con Tab. */
  .skip-link {
    position: fixed;
    top: 0;
    left: 6px;
    transform: translateY(-200%);
    /* #1d4ed8 (no var(--color-accent)) sobre blanco de fondo: texto blanco
       sobre #1d4ed8 = 6.70:1, cumple WCAG AA (mínimo 4.5:1). Usar
       var(--color-accent) aquí daría solo 3.68:1 y fallaría AA. */
    background: #1d4ed8;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 9999;
    border-radius: 4px;
    font-weight: 600;
    transition: transform 0.15s ease;

    &:focus,
    &:focus-visible {
      transform: translateY(6px);
      outline: 2px solid white;
      outline-offset: 2px;
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
      /* --color-actived (#047857) sobre --body-card/--body-footer (#1e293b)
         mide solo 2.67:1 en modo oscuro, falla WCAG AA. #34d399 (emerald-400)
         sobre #1e293b = 7.61:1 y sobre --body-background #0f172a = 9.29:1,
         ambos cumplen AA (mínimo 4.5:1) con margen. */
      --color-actived: #34d399;
      /* Dark-mode variants for the urgent/caution callout tokens (R6.1) —
         light text on a dark tinted background instead of dark text on a
         light one. Measured: #fca5a5 sobre #450a0a (urgent) = 8.51:1;
         #fcd34d sobre #451a03 (caution) = 10.39:1 — ambos superan AA con
         mucho margen. Also verified against --body-card (#1e293b), in case
         a component reuses these tokens outside the tinted-bg box: urgent
         7.71:1, caution 10.15:1 — still AA-compliant either way. */
      --color-urgent: #fca5a5;
      --color-urgent-bg: #450a0a;
      --color-caution: #fcd34d;
      --color-caution-bg: #451a03;
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
