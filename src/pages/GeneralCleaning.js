import React from "react";
import { Layout } from "../components/Layout";
import { ProgressStep } from "../components/ProgressStep";
import { aseoGeneral } from "../content/procedures/aseo-general";

export const GeneralCleaning = () => {
  return (
    <Layout
      title={aseoGeneral.title}
      description={aseoGeneral.description}
      section='procedimientos'
    >
      <ProgressStep
        steps={aseoGeneral.steps}
        pageId={aseoGeneral.id}
        title="🧹 Lista de verificación - Aseo General"
      />
    </Layout>
  );
};
