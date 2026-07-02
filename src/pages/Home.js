import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import { CardLink, CardLinkGrid } from "../components/CardLink";
import {
  procedureLinks,
  cuidadosLinks,
  alimentacionLinks,
} from "../content/navigation";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  /* Espaciado entre tarjetas */
  & > * {
    margin-bottom: var(--spacing-md);
    width: 100%;
    max-width: 700px;
  }

  /* Responsive para móviles */
  @media (max-width: 768px) {
    padding: 0 var(--spacing-sm);
    max-width: 100%;

    & > * {
      max-width: 100%;
    }
  }

  /* Para pantallas grandes */
  @media (min-width: 1024px) {
    max-width: 900px;
  }
`;

export const Home = () => {
  const description =
    "Aquí encontrarás todo lo que necesitas saber sobre la diálisis peritoneal, incluyendo horarios, procedimientos de limpieza y cuidados especializados.";

  return (
    <Layout title="Diálisis Peritoneal" description={description}>
      <CenteredContainer>
        {/* Introducción principal */}
        <Card>
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="sr-only">
              Introducción
            </h2>
            <p>{description}</p>
          </section>
        </Card>

        {/* Hub: 3 secciones agrupadas por tema (R4.1). Los horarios diarios
            quedan debajo de estos grupos, ver más abajo. */}
        <Card>
          <section aria-labelledby="hub-procedimientos-heading">
            <h2 id="hub-procedimientos-heading">🧴 Procedimientos</h2>
            <p>Guías paso a paso para el aseo, la curación y la diálisis.</p>
            <CardLinkGrid aria-label="Lista de procedimientos">
              {procedureLinks.map((link) => (
                <li key={link.to}>
                  <CardLink {...link} />
                </li>
              ))}
            </CardLinkGrid>
          </section>
        </Card>

        <Card>
          <section aria-labelledby="hub-cuidados-heading">
            <h2 id="hub-cuidados-heading">🩺 Higiene y señales de alarma</h2>
            <p>Cómo cuidar tu piel y catéter, y cuándo buscar ayuda.</p>
            <CardLinkGrid aria-label="Lista de temas de cuidados">
              {cuidadosLinks.map((link) => (
                <li key={link.to}>
                  <CardLink {...link} />
                </li>
              ))}
            </CardLinkGrid>
          </section>
        </Card>

        <Card>
          <section aria-labelledby="hub-alimentacion-heading">
            <h2 id="hub-alimentacion-heading">🍽️ Comida y líquidos</h2>
            <p>Líquidos, ingresos y alimentación saludable.</p>
            <CardLinkGrid aria-label="Lista de temas de alimentación">
              {alimentacionLinks.map((link) => (
                <li key={link.to}>
                  <CardLink {...link} />
                </li>
              ))}
            </CardLinkGrid>
          </section>
        </Card>

        {/* Sección de horarios de 3 recambios */}
        <Card>
          <section aria-labelledby="schedule-3-heading">
            <h2 id="schedule-3-heading">
              📅 Horario sugerido diario para <strong>3 recambios</strong> de{" "}
              <strong>5 horas</strong>
            </h2>
            <ul role="list" aria-label="Horario de 3 recambios diarios">
              <li>
                <span aria-label="6:00 de la mañana">06:00 am</span>
                <strong>Egreso:</strong> 0 ml o más, <strong>Ingreso:</strong>{" "}
                2000 ml
              </li>
              <li>
                <span aria-label="11:00 de la mañana">11:00 am</span>
                <strong>Egreso:</strong> 2000 ml o más,{" "}
                <strong>Ingreso:</strong> 2000 ml
              </li>
              <li>
                <span aria-label="11:30 de la mañana">11:30 am</span>
                🧹 Realizar Aseo general
              </li>
              <li>
                <span aria-label="2:30 de la tarde">02:30 pm</span>
                💧 Preparar agua estéril
              </li>
              <li>
                <span aria-label="3:30 de la tarde">03:30 pm</span>
                🩹 Realizar curación
              </li>
              <li>
                <span aria-label="4:00 de la tarde">04:00 pm</span>
                <strong>Egreso:</strong> 2000 ml o más,{" "}
                <strong>Ingreso:</strong> 2000 ml
              </li>
              <li>
                <span aria-label="9:00 de la noche">09:00 pm</span>
                <strong>Egreso:</strong> 2000 ml o más,{" "}
                <strong>Ingreso:</strong> 0 ml
              </li>
            </ul>
          </section>
        </Card>

        {/* Sección de horarios de 4 recambios */}
        <Card>
          <section aria-labelledby="schedule-4-heading">
            <h2 id="schedule-4-heading">
              📅 Horario sugerido diario para <strong>4 recambios</strong> de{" "}
              <strong>4 horas</strong>
            </h2>
            <ul role="list" aria-label="Horario de 4 recambios diarios">
              <li>
                <span aria-label="6:00 de la mañana">06:00 am</span>
                <strong>Egreso:</strong> 0 ml o más, <strong>Ingreso:</strong>{" "}
                2000 ml
              </li>
              <li>
                <span aria-label="9:00 de la mañana">09:00 am</span>
                💧 Preparar agua estéril
              </li>
              <li>
                <span aria-label="10:00 de la mañana">10:00 am</span>
                <strong>Egreso:</strong> 2000 ml o más,{" "}
                <strong>Ingreso:</strong> 2000 ml
              </li>
              <li>
                <span aria-label="1:00 de la tarde">01:00 pm</span>
                🧹 Realizar Aseo general
              </li>
              <li>
                <span aria-label="2:00 de la tarde">02:00 pm</span>
                <strong>Egreso:</strong> 2000 ml o más,{" "}
                <strong>Ingreso:</strong> 2000 ml
              </li>
              <li>
                <span aria-label="5:30 de la tarde">05:30 pm</span>
                🩹 Realizar curación
              </li>
              <li>
                <span aria-label="6:00 de la tarde">06:00 pm</span>
                <strong>Egreso:</strong> 2000 ml o más,{" "}
                <strong>Ingreso:</strong> 2000 ml
              </li>
              <li>
                <span aria-label="10:00 de la noche">10:00 pm</span>
                <strong>Egreso:</strong> 2000 ml o más,{" "}
                <strong>Ingreso:</strong> 0 ml
              </li>
            </ul>
          </section>
        </Card>

        {/* Información de créditos */}
        <Card>
          <section aria-labelledby="credits-heading">
            <h2 id="credits-heading">👥 Créditos</h2>
            <address>
              <p>
                <strong>Realizado por:</strong>
              </p>
              <ul role="list">
                <li>
                  <span>👩‍⚕️ Celia García Mateo</span>
                </li>
                <li>
                  <span>👨‍💻 Héctor Martínez Reséndiz</span>
                </li>
              </ul>
            </address>
          </section>
        </Card>
      </CenteredContainer>
    </Layout>
  );
};
