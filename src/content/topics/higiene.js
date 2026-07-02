import React from 'react'
import { TermTooltip } from '../../components/TermTooltip'

// higiene: content data for the "Higiene" deep-dive topic page (PR6),
// consumed by TopicPage (design section 1's topic shape). Every clinical
// claim below traces to a claim in sdd/accessible-redesign/content-research
// section 3a (hygiene) or 3b (exit-site infection escalation) — see the
// mapping table in sdd/accessible-redesign/apply-progress. No numbers are
// invented; the only numeric claim ("2 semanas") and the "70%" alcohol-gel
// concentration are both source-stated (IMSS-797-16) — R5.5.
//
// Glossary terms (peritonitis, sitio de salida, catéter) are wrapped with
// TermTooltip on first use only, in reading order — R5.4.

export const higiene = {
  title: 'Higiene',
  description:
    'Cómo lavarte las manos, cuidar tu catéter y mantener limpio tu espacio para prevenir infecciones.',
  intro: (
    <>
      La higiene te ayuda a prevenir la{' '}
      <TermTooltip termKey='peritonitis'>peritonitis</TermTooltip>: una
      infección dentro del abdomen que puede pasar si entran microbios
      durante tus intercambios. Lavarte las manos, cuidar tu piel y mantener
      limpio tu espacio de trabajo ayuda a evitarla.
    </>
  ),
  sourceIds: ['imss-797-16'],
  sections: [
    {
      heading: 'Señales de infección en el sitio de salida',
      body: (
        <p>
          El <TermTooltip termKey='sitioSalida'>sitio de salida</TermTooltip>{' '}
          es el lugar de tu piel por donde sale tu{' '}
          <TermTooltip termKey='cateter'>catéter</TermTooltip>. Revísalo
          todos los días.
        </p>
      ),
      warning: {
        level: 'urgent',
        text:
          'Llama a tu clínica de inmediato si notas enrojecimiento, hinchazón, dolor, calor o pus alrededor del catéter.'
      },
      sourceIds: ['medlineplus-pd']
    },
    {
      heading: 'Lávate las manos antes de cada intercambio',
      body: (
        <>
          <p>
            Lávate las manos con agua y jabón, o usa gel de alcohol etílico
            al 70% antes de tocar tu material de diálisis.
          </p>
          <p>
            Usa cubrebocas durante el intercambio. Lavarte las manos, usar
            cubrebocas y seguir esta técnica limpia reduce el riesgo de
            peritonitis.
          </p>
        </>
      ),
      sourceIds: ['imss-797-16']
    },
    {
      heading: 'Cuida el sitio de salida y el catéter',
      body: (
        <>
          <p>Haz la curación de tu sitio de salida todos los días.</p>
          <p>
            Mantén el sitio de salida seco y el catéter bien sujeto
            (inmovilizado), para que no jale ni se mueva.
          </p>
          <p>
            No mojes el sitio de salida ni el apósito (la gasa que lo cubre)
            hasta que cicatrice. Esto suele tardar alrededor de 2 semanas.
            Mientras tanto, báñate con cuidado para no mojar esa zona.
          </p>
          <p>
            Usa antisépticos a base de clorhexidina para limpiar el sitio de
            salida, según te lo indique tu clínica.
          </p>
          <p>
            Cuando el sitio de salida ya cicatrizó, lávalo todos los días con
            jabón antibacterial o con el antiséptico que te recomiende tu
            clínica.
          </p>
          <p>
            Mantén tus manos y uñas limpias; tu equipo de salud revisa esto
            en cada visita.
          </p>
        </>
      ),
      sourceIds: ['imss-797-16']
    },
    {
      heading: 'Mantén limpio tu espacio de intercambio',
      body: (
        <>
          <p>
            Limpia y sacude el polvo de tu espacio de intercambio todos los
            días: paredes, piso y superficies donde guardas tu material de
            diálisis.
          </p>
          <p>
            No tengas mascotas ni plantas en el cuarto donde haces tus
            intercambios. Pueden traer microbios que contaminan el
            ambiente.
          </p>
        </>
      ),
      sourceIds: ['imss-797-16', 'ispd-peritonitis-2022']
    },
    {
      heading: 'Prepara tus alimentos con higiene',
      body: (
        <>
          <p>
            La Organización Mundial de la Salud recomienda seguir cinco
            reglas al preparar tus alimentos:
          </p>
          <ul>
            <li>Mantén la limpieza.</li>
            <li>Separa los alimentos crudos de los cocinados.</li>
            <li>Cocina completamente los alimentos.</li>
            <li>Mantén los alimentos a temperaturas seguras.</li>
            <li>Usa agua y materias primas seguras.</li>
          </ul>
        </>
      ),
      sourceIds: ['who-five-keys']
    }
  ]
}
