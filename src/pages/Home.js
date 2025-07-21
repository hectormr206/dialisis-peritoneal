import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";

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

        {/* Navegación rápida a otras secciones */}
        <Card>
          <section aria-labelledby="quick-nav-heading">
            <h2 id="quick-nav-heading">🔗 Acceso rápido</h2>
            <nav aria-label="Navegación a secciones principales">
              <ul role="list">
                <li>
                  <a href="/aseo-general" aria-describedby="aseo-desc">
                    🧹 <strong>Aseo General</strong>
                  </a>
                  <div id="aseo-desc" className="sr-only">
                    Instrucciones paso a paso para la limpieza del área
                  </div>
                </li>
                <li>
                  <a href="/limpieza-herida" aria-describedby="herida-desc">
                    🩹 <strong>Limpieza de Herida</strong>
                  </a>
                  <div id="herida-desc" className="sr-only">
                    Procedimientos de curación y cuidado de heridas
                  </div>
                </li>
                <li>
                  <a href="/realizar-dialisis" aria-describedby="dialisis-desc">
                    💧 <strong>Realizar Diálisis</strong>
                  </a>
                  <div id="dialisis-desc" className="sr-only">
                    Proceso completo de diálisis peritoneal con videos
                    instructivos
                  </div>
                </li>
              </ul>
            </nav>
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
