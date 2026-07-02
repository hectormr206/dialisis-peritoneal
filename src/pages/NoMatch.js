import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

const NoMatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-2xl) var(--spacing-md);
  gap: var(--spacing-md);
`;

const NoMatchTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
`;

const NoMatchText = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-secondary);
  line-height: 1.6;
  max-width: 480px;
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  min-width: 44px;
  padding: var(--spacing-sm) var(--spacing-xl);
  margin-top: var(--spacing-sm);
  /* #1d4ed8 (no var(--color-accent)) porque texto blanco sobre
     var(--color-accent) mide solo 3.68:1 y falla WCAG AA. Texto blanco
     sobre #1d4ed8 = 6.70:1, cumple AA (mínimo 4.5:1). */
  background: #1d4ed8;
  color: white;
  font-weight: 600;
  font-size: var(--font-size-base);
  border-radius: var(--border-radius);
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover,
  &:focus {
    /* #047857 fijo (no var(--color-actived)) — texto blanco sobre #047857
       = 5.48:1, cumple AA. */
    background: #047857;
    text-decoration: none;
  }

  &:focus-visible {
    outline: 2px solid var(--color-actived);
    outline-offset: 2px;
  }
`;

export const NoMatch = () => (
  <Layout
    title="Página no encontrada"
    description="La página que buscas no existe o fue movida."
  >
    <NoMatchContainer>
      <NoMatchTitle>No encontramos esta página</NoMatchTitle>
      <NoMatchText>
        La página que buscas no existe o cambió de dirección. Puedes regresar
        al inicio para seguir consultando tus horarios y procedimientos.
      </NoMatchText>
      <HomeLink to="/">Ir al inicio</HomeLink>
    </NoMatchContainer>
  </Layout>
);
