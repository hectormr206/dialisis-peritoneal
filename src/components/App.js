import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { StyleSheetManager } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Loader } from "./Loader";
import { AppRoutes } from "../routes";

export const App = () => {
  return (
    <HelmetProvider>
      <StyleSheetManager shouldForwardProp={() => true}>
        <Suspense fallback={<Loader />}>
          <GlobalStyle />
          <AppRoutes />
        </Suspense>
      </StyleSheetManager>
    </HelmetProvider>
  );
};
