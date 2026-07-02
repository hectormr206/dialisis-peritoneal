import styled, { css } from 'styled-components'

// Identidad de color por sección (R "más color" del dueño del producto) —
// tiñe fondo/borde y el color del h2/p de la tarjeta. Nunca se usa para
// UrgentWarningCallout, que conserva su semántica roja/ámbar propia.
// p usa --color-primary (no --color-secondary): sobre el fondo
// procedimientos, --color-secondary mide 4.37:1 y falla AA — ver
// GlobalStyle.js para el detalle de contraste medido.
const sectionStyles = {
  procedimientos: css`
    background: var(--section-procedimientos-bg);
    border-color: var(--section-procedimientos-border);

    h2 {
      color: var(--section-procedimientos-accent);
    }

    p {
      color: var(--color-primary);
    }
  `,
  cuidados: css`
    background: var(--section-cuidados-bg);
    border-color: var(--section-cuidados-border);

    h2 {
      color: var(--section-cuidados-accent);
    }

    p {
      color: var(--color-primary);
    }
  `,
  comida: css`
    background: var(--section-comida-bg);
    border-color: var(--section-comida-border);

    h2 {
      color: var(--section-comida-accent);
    }

    p {
      color: var(--color-primary);
    }
  `
}

export const CardComponent = styled.div`
  /* Sin margin propio: el espaciado entre tarjetas lo controla el gap del
     contenedor padre (PageContainer, Home) — antes Card sumaba su propio
     margin AL gap del padre, duplicando el espacio visualmente y siendo la
     causa principal del espaciado inconsistente reportado. */
  padding: var(--space-3);
  border-radius: var(--border-radius);
  background: var(--body-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-light);
  font-size: var(--font-size-base);
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-primary);

  /* Mejoras para accesibilidad y mobile */
  min-height: 48px; /* Área de toque mínima — subida de 44 a 48px */
  position: relative;

  /* Efecto hover suave */
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: var(--shadow-medium);
    transform: translateY(-1px);
  }

  /* Focus para navegación por teclado */
  &:focus-within {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  /* Listas mejoradas */
  ul {
    padding-left: var(--spacing-md);
    margin: var(--spacing-sm) 0;
  }

  ul li {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-xs);
    padding: var(--spacing-xs) 0;

    /* Mejor contraste para checkboxes */
    input[type="checkbox"] {
      height: 20px;
      width: 20px;
      margin-right: var(--spacing-sm);
      accent-color: var(--color-actived);
      transform: scale(1.1);
    }

    /* Etiquetas de tiempo con mejor visibilidad */
    span {
      margin-right: var(--spacing-sm);
      color: var(--color-accent);
      font-size: var(--font-size-base);
      font-weight: 600;
      background: rgba(59, 130, 246, 0.1);
      padding: 2px 6px;
      border-radius: 4px;
      display: inline-block;
    }

    /* Texto destacado con mejor contraste */
    strong {
      color: var(--color-actived);
      font-weight: 600;
    }
  }

  /* Títulos y encabezados */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
    font-weight: 600;
    line-height: 1.3;
  }

  h1 {
    font-size: var(--font-size-2xl);
  }
  h2 {
    font-size: var(--font-size-xl);
  }
  h3 {
    font-size: var(--font-size-lg);
  }
  h4,
  h5,
  h6 {
    font-size: var(--font-size-base);
  }

  /* Párrafos */
  p {
    margin-bottom: var(--spacing-sm);
    color: var(--color-secondary);
  }

  /* Links accesibles */
  a {
    color: var(--color-accent);
    text-decoration: underline;

    &:hover,
    &:focus {
      color: var(--color-actived);
    }
  }

  /* Botones dentro de cards. Actualmente sin uso real (ningún <button>
     se renderiza hoy dentro de un Card), pero se corrige el mismo patrón
     de fondo/texto que el resto de la app para que un futuro botón
     agregado aquí no reintroduzca la falla de contraste AA. */
  button {
    /* #1d4ed8 (no var(--color-accent)) porque texto blanco sobre
       var(--color-accent) mide solo 3.68:1 y falla WCAG AA. Texto blanco
       sobre #1d4ed8 = 6.70:1, cumple AA (mínimo 4.5:1). */
    background: #1d4ed8;
    color: white;
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: background 0.2s ease;

    &:hover {
      /* #047857 fijo (no var(--color-actived)) — mismo patrón que
         HomeLink/CompleteButton: texto blanco sobre #047857 = 5.48:1,
         cumple AA. */
      background: #047857;
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  }

  /* Responsive adjustments para pantallas pequeñas */
  @media (max-width: 480px) {
    padding: var(--space-3);

    ul {
      padding-left: var(--spacing-sm);
    }

    ul li span {
      display: block;
      margin-bottom: var(--spacing-xs);
      margin-right: 0;
    }
  }

  /* Mejoras para tablets y pantallas grandes: padding más generoso, mismo
     token (--space-6) que TopicSection y el resto de superficies con más
     aire en desktop — R "espaciado consistente". */
  @media (min-width: 768px) {
    padding: var(--space-6);
  }

  /* Para pantallas grandes */
  @media (min-width: 1024px) {
    max-width: var(--max-width-container);
  }

  /* Animación reducida para usuarios con preferencias de movimiento reducido */
  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }

  ${(props) => props.$section && sectionStyles[props.$section]}
`
