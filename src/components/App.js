import React, { Suspense } from "react";
import { StyleSheetManager } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Loader } from "./Loader";
import { AppRoutes } from "../routes";

export const App = () => {
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <Suspense fallback={<Loader />}>
        <GlobalStyle />
        <AppRoutes />
      </Suspense>
    </StyleSheetManager>
  );
};
