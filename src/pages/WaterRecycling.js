import React from "react";
import { Layout } from "../components/Layout";
import { ProgressStep } from "../components/ProgressStep";
import { realizarDialisis } from "../content/procedures/realizar-dialisis";

export const WaterRecycling = () => {
  return (
    <Layout
      title={realizarDialisis.title}
      description={realizarDialisis.description}
      section='procedimientos'
    >
      <ProgressStep
        steps={realizarDialisis.steps}
        pageId={realizarDialisis.id}
        title="💧 Lista de verificación - Realizar Diálisis"
      />
    </Layout>
  );
};
