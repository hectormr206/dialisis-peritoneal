import React from 'react'
import { TermTooltip } from '../../components/TermTooltip'

// nutricion: content data for the "Nutrición" (PD nutrition in Mexican diet
// context) topic page (PR9), consumed by TopicPage. Every clinical claim
// below traces to sdd/accessible-redesign/content-research section 3d
// (nutrition) or section 4 (glossary) — see the mapping table in
// sdd/accessible-redesign/apply-progress. This is the final medical-content
// PR in the chain (PR6-9).
//
// R5.5 hard rule for this page: no source states a universal mg/day
// ceiling for sodium, potassium, or phosphorus — NKF's own potassium and
// phosphorus pages explicitly frame management by lab levels/prescriber
// guidance, not a fixed intake number (content-research section 3d, row
// "Individualized targets confirmed..."). No mg/miligramos number appears
// anywhere on this page — verified by a rendered-text regex test in
// __tests__/Nutricion.test.js (mirrors PR8's FLUID_VOLUME_NUMBER guard
// pattern for its own unit). The source-stated portion examples (deck of
// cards, 1/2 taza, 1 rebanada, 1/4 taza) are fractions/analogies, not
// numeric ceilings, and are explicitly allowed.
//
// UNVERIFIED-and-omitted per research: the common "PD needs more protein
// than HD" comparison is NOT stated on NIDDK's own PD nutrition page
// (content-research section 3d, row 2) — deliberately absent from this
// page, guarded by a test asserting "hemodiálisis" never appears.
//
// R5.2 attribution note: the potassium and phosphorus food-category lists
// come from NKF's general CKD-diet pages (not PD-specific), used here only
// as a reference paired with NIDDK's PD-specific potassium nuance below —
// never as blanket restriction advice. The frijoles/Mexican-diet note is a
// synthesis of what both NKF lists independently state (both list beans),
// so it stays cited to both nkf-potassium and nkf-phosphorus rather than
// being left un-sourced.
//
// Glossary terms (sodio, potasio, fósforo) are wrapped with TermTooltip on
// first use only, in reading order — R5.4.
export const nutricion = {
  title: 'Nutrición',
  description:
    'Qué comer y qué cuidar sobre proteína, sal, potasio, fósforo y calorías en diálisis peritoneal.',
  intro: (
    <>
      La alimentación es una parte importante de tu cuidado en diálisis
      peritoneal. Aquí encuentras qué debes saber sobre proteína, sal,
      potasio, fósforo y calorías, y cuándo preguntarle a tu nutriólogo.
    </>
  ),
  sourceIds: ['niddk-nutrition-pd'],
  sections: [
    {
      heading: 'Come proteína de buena calidad',
      body: (
        <>
          <p>
            Elige alimentos con proteína de buena calidad, como carne, pollo,
            pescado y huevo. Este tipo de proteína genera menos desechos
            para que tu cuerpo elimine.
          </p>
          <p>
            Una porción del tamaño de una baraja de cartas es un buen punto
            de referencia para tu carne, pollo o pescado.
          </p>
        </>
      ),
      sourceIds: ['niddk-nutrition-pd']
    },
    {
      heading: 'Cocina con menos sal',
      body: (
        <>
          <p>
            Prefiere alimentos frescos y cocina en casa. Usa hierbas y
            especias en lugar de{' '}
            <TermTooltip termKey='sodio'>sal (sodio)</TermTooltip> para dar
            sabor a tu comida.
          </p>
          <p>
            Evita los alimentos enlatados, empacados, congelados y de comida
            rápida, y condimentos como la mostaza y la catsup — casi siempre
            tienen mucha sal.
          </p>
        </>
      ),
      sourceIds: ['niddk-nutrition-pd']
    },
    {
      heading: 'Potasio: pregunta a tu clínica si necesitas más o menos',
      body: (
        <>
          <p>
            La diálisis peritoneal saca el{' '}
            <TermTooltip termKey='potasio'>potasio</TermTooltip> de tu
            cuerpo de forma muy eficiente. Por eso, algunas personas en
            diálisis peritoneal necesitan comer MÁS alimentos con potasio,
            no menos — al contrario de lo que se recomienda en otras etapas
            de la enfermedad renal.
          </p>
          <p>
            Algunos alimentos con potasio son el plátano, la naranja, la
            papa y el jitomate.
          </p>
          <p>
            Esta es una referencia general de alimentos con más y con menos
            potasio. No es una regla igual para todos:
          </p>
          <ul>
            <li>
              Con más potasio: plátano, naranja, aguacate, papa, jitomate,
              frijol, verduras de hoja verde y nueces.
            </li>
            <li>
              Con menos potasio: manzana, uvas, piña, col, elote, arroz y
              pan.
            </li>
          </ul>
          <p>
            Tu clínica o tu nutriólogo revisa tus resultados de laboratorio
            y te dice si necesitas comer más o menos alimentos con potasio.
          </p>
        </>
      ),
      sourceIds: ['niddk-nutrition-pd', 'nkf-potassium']
    },
    {
      heading: 'Cuida cuánto fósforo comes',
      body: (
        <>
          <p>
            El <TermTooltip termKey='fosforo'>fósforo</TermTooltip> es un
            mineral que, en exceso, puede debilitar tus huesos y causarte
            comezón en la piel. La diálisis peritoneal no siempre saca
            suficiente fósforo, así que muchas personas necesitan cuidar
            cuánto comen.
          </p>
          <p>
            Los lácteos (leche, yogur, queso), las nueces, los frijoles
            secos y los refrescos de cola suelen tener mucho fósforo.
          </p>
          <p>
            Por ejemplo: media taza de leche o yogur, una rebanada delgada
            de queso, media taza de frijoles cocidos o un cuarto de taza de
            nueces son porciones que tu nutriólogo puede ayudarte a ajustar.
          </p>
          <p>
            Cuando compres alimentos empacados, revisa la lista de
            ingredientes. Si ves una palabra que contiene &quot;FOS&quot; o
            &quot;FÓS&quot;, ese alimento tiene fósforo agregado.
          </p>
          <p>
            Tu clínica revisa tus niveles de fósforo en la sangre y te dice
            cuánto necesitas limitar, según tus resultados.
          </p>
        </>
      ),
      sourceIds: ['niddk-nutrition-pd', 'nkf-phosphorus']
    },
    {
      // No heading: reads as a visual continuation of the potassium/
      // phosphorus sections above, since it connects a fact both of those
      // lists independently state — the Mexican-diet-specific framing task
      // brief calls out explicitly (frijoles on both lists -> portion
      // guidance, not "avoid").
      body: (
        <p>
          Los frijoles son un alimento muy común en la dieta mexicana y
          aparecen tanto en la lista de alimentos con potasio como en la de
          alimentos con fósforo. Esto no significa que debas evitarlos:
          pregúntale a tu nutriólogo qué porción es adecuada para ti.
        </p>
      ),
      sourceIds: ['nkf-potassium', 'nkf-phosphorus']
    },
    {
      heading: 'La diálisis también te da calorías',
      body: (
        <>
          <p>
            El líquido que usas para tu diálisis peritoneal contiene
            dextrosa (un tipo de azúcar) que tu cuerpo puede absorber
            durante el intercambio. Esto le da calorías extra a tu cuerpo.
          </p>
          <p>
            Por eso, algunas personas necesitan comer menos calorías en su
            comida para no subir de peso. Tu nutriólogo puede ayudarte a
            ajustar tu plan de alimentación.
          </p>
        </>
      ),
      sourceIds: ['niddk-nutrition-pd']
    },
    {
      heading: 'Usa solo los suplementos que indique tu clínica',
      body: (
        <>
          <p>
            Si necesitas vitaminas o minerales extra, tu clínica te puede
            recetar un suplemento pensado para personas en diálisis.
          </p>
          <p>
            No tomes vitaminas o suplementos que compres tú mismo sin
            indicación médica: algunos pueden ser dañinos para ti.
          </p>
          <p>
            Un nutriólogo especializado en enfermedad renal, en tu clínica
            de diálisis, puede ayudarte a hacer un plan de alimentación
            hecho para ti.
          </p>
        </>
      ),
      sourceIds: ['niddk-nutrition-pd']
    }
  ]
}
