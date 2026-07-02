import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../Header";
import { Content, Title } from "./styles";
import { Footer } from "../Footer";

// section: 'procedimientos' | 'cuidados' | 'comida' — opcional, tiñe el
// header y el h1 de la página con la identidad de color del grupo al que
// pertenece (R "más color" del dueño del producto).
export const Layout = ({ children, title, description, section }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Diálisis peritoneal</title>}
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="author"
          content="Celia García Mateo, Héctor Martínez Reséndiz"
        />
        <meta name="language" content="es" />
        <html lang="es" />

        {/* Plausible Analytics */}
        <script
          defer
          data-domain="dialisis.hectormr.com"
          src="https://plausible.hectormr.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }",
          }}
        />
      </Helmet>

      <Header role="banner" section={section}>
        {title && (
          <Title id="page-title" tabIndex="-1" $section={section}>
            {title}
          </Title>
        )}
      </Header>

      <Content
        id="main-content"
        role="main"
        aria-labelledby={title ? "page-title" : undefined}
        tabIndex="-1"
      >
        {children}
      </Content>

      <Footer role="contentinfo" />
    </>
  );
};
