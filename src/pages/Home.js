import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import { CardLink, CardLinkGrid } from "../components/CardLink";
import { PageContainer } from "../components/PageContainer";
import { InstallBanner } from "../components/InstallBanner";
import {
  procedureLinks,
  cuidadosLinks,
  alimentacionLinks,
} from "../content/navigation";

// Card y CardLinkGrid quedan agrupados dentro de cada sección del hub con
// el mismo gap que PageContainer usa entre sus hijos de nivel superior
// (--space-4) — así el espacio "intro de la sección -> su grilla de
// tarjetas" es idéntico al espacio "sección -> siguiente sección".
const HubSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

export const Home = () => {
  const description =
    "Aquí encontrarás todo lo que necesitas saber sobre la diálisis peritoneal, incluyendo horarios, procedimientos de limpieza y cuidados especializados.";

  return (
    <Layout title="Diálisis Peritoneal" description={description}>
      <PageContainer>
        {/* Introducción principal */}
        <Card>
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="sr-only">
              Introducción
            </h2>
            <p>Guías claras para tus procedimientos, cuidados y alimentación diarios.</p>
          </section>
        </Card>

        {/* Promo de instalación PWA: solo en Home, debajo de la intro y
            arriba del hub — se oculta sola si ya está instalada, si fue
            descartada hace menos de 30 días, o si el navegador no ofrece
            ningún camino de instalación (ni evento nativo ni iOS Safari). */}
        <InstallBanner />

        {/* Hub: 3 secciones agrupadas por tema (R4.1). Los horarios diarios
            quedan debajo de estos grupos, ver más abajo.

            CardLinkGrid vive como hermano de Card (no anidado dentro), igual
            que en las páginas índice — el selector `a` de CardComponent
            (0,1,1 de especificidad) pisaría los estilos propios de
            CardLinkElement (0,1,0) si quedara anidado adentro. */}
        <HubSection aria-labelledby="hub-procedimientos-heading">
          <Card section="procedimientos">
            <h2 id="hub-procedimientos-heading">
              <span aria-hidden="true">🧴</span> Procedimientos
            </h2>
            <p>Guías paso a paso: aseo, curación y diálisis.</p>
          </Card>
          <CardLinkGrid aria-label="Lista de procedimientos">
            {procedureLinks.map((link) => (
              <li key={link.to}>
                <CardLink {...link} />
              </li>
            ))}
          </CardLinkGrid>
        </HubSection>

        <HubSection aria-labelledby="hub-cuidados-heading">
          <Card section="cuidados">
            <h2 id="hub-cuidados-heading">
              <span aria-hidden="true">🩺</span> Higiene y señales de alarma
            </h2>
            <p>Cómo cuidar tu piel y catéter, y cuándo buscar ayuda.</p>
          </Card>
          <CardLinkGrid aria-label="Lista de temas de cuidados">
            {cuidadosLinks.map((link) => (
              <li key={link.to}>
                <CardLink {...link} />
              </li>
            ))}
          </CardLinkGrid>
        </HubSection>

        <HubSection aria-labelledby="hub-alimentacion-heading">
          <Card section="comida">
            <h2 id="hub-alimentacion-heading">
              <span aria-hidden="true">🍽️</span> Comida y líquidos
            </h2>
            <p>Qué comer y cuánto líquido tomar.</p>
          </Card>
          <CardLinkGrid aria-label="Lista de temas de alimentación">
            {alimentacionLinks.map((link) => (
              <li key={link.to}>
                <CardLink {...link} />
              </li>
            ))}
          </CardLinkGrid>
        </HubSection>

        {/* Sección de horarios de 3 recambios */}
        <Card>
          <section aria-labelledby="schedule-3-heading">
            <h2 id="schedule-3-heading">
              <span aria-hidden="true">📅</span> Horario sugerido diario para{" "}
              <strong>3 recambios</strong> de <strong>5 horas</strong>
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
              <span aria-hidden="true">📅</span> Horario sugerido diario para{" "}
              <strong>4 recambios</strong> de <strong>4 horas</strong>
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
            <h2 id="credits-heading">
              <span aria-hidden="true">👥</span> Créditos
            </h2>
            <address>
              <p>
                <strong>Realizado por:</strong>
              </p>
              <ul role="list">
                <li>
                  <a
                    href="https://hectormr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">👩‍⚕️</span> Celia García Mateo
                  </a>
                </li>
                <li>
                  <a
                    href="https://hectormr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">👨‍💻</span> Héctor Martínez Reséndiz
                  </a>
                </li>
              </ul>
            </address>
          </section>
        </Card>
      </PageContainer>
    </Layout>
  );
};
