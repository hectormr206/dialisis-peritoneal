import styled, { css } from 'styled-components'

// Franja inferior del header teñida con la identidad de color de la
// sección de la página (R "más color" — conecta el título con el resto de
// la identidad visual del grupo). Mismos tokens que Card/NavBar.
const sectionStyles = {
  procedimientos: css`
    border-bottom-color: var(--section-procedimientos-accent);
  `,
  cuidados: css`
    border-bottom-color: var(--section-cuidados-accent);
  `,
  comida: css`
    border-bottom-color: var(--section-comida-accent);
  `
}

export const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
  background-color: var(--body-header);
  border-bottom: 1px solid var(--color-secondary);

  ${(props) => props.$section && sectionStyles[props.$section]}
`
