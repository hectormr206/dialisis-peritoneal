import React from "react";
import { Layout } from "../components/Layout";
import { ProgressStep } from "../components/ProgressStep";
import { limpiezaHerida } from "../content/procedures/limpieza-herida";

export const WoundHealing = () => {
  return (
    <Layout
      title={limpiezaHerida.title}
      description={limpiezaHerida.description}
    >
      <ProgressStep
        steps={limpiezaHerida.steps}
        pageId={limpiezaHerida.id}
        title="🩹 Lista de verificación - Limpieza de Herida"
      />
    </Layout>
  );
};
