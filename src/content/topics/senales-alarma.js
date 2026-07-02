import React from 'react'
import { TermTooltip } from '../../components/TermTooltip'
import { SignList } from '../../components/SignList'

// senales-alarma: content data for the "Señales de alarma" (peritonitis
// warning-signs + escalation) topic page (PR7), consumed by TopicPage.
// Every clinical claim below traces to sdd/accessible-redesign/
// content-research section 3b (peritonitis) or section 4 (glossary) — see
// the mapping table in sdd/accessible-redesign/apply-progress. No numbers
// are invented; "más de 2 días" is source-stated (MedlinePlus) — R5.5.
//
// R5.3 hard requirement for this page: the escalation table must be
// reachable within normal mobile scrolling, placed immediately after the
// 1-paragraph intro and before any explanatory content. Section order below
// is therefore: intro -> escalation (immediate tier) -> escalation (also
// tier) -> what to do if you can't reach your clinic -> explanatory sign
// list (IMSS-797-16) — the last section is the only "explanatory" one, and
// it comes after every escalation section.
//
// Escalation framing (per task instruction, no ER-specific criterion list
// exists in the research): both tiers are "call your clinic" — an
// immediate-contact tier and a less-urgent "also call" tier — not a
// clinic-vs-ER split. `EscalationTable`'s `action: 'clinic'` is used for
// every row on this page; `action: 'er'` is intentionally not used here.
export const senalesAlarma = {
  title: 'Señales de alarma',
  description:
    'Qué señales pueden indicar una infección (peritonitis) y cuándo llamar a tu clínica.',
  intro: (
    <>
      La <TermTooltip termKey='peritonitis'>peritonitis</TermTooltip> es la
      complicación más frecuente en diálisis peritoneal. Cuando aparecen
      señales de alarma, actuar rápido ayuda a que tu clínica la trate a
      tiempo. Aquí encuentras qué señales vigilar y cuándo llamar.
    </>
  ),
  sourceIds: ['imss-797-16'],
  sections: [
    {
      heading: 'Llama a tu clínica de inmediato',
      body: (
        <p>
          Si notas cualquiera de estas señales, comunícate con tu clínica de
          inmediato. No esperes, sobre todo si tu{' '}
          <TermTooltip termKey='efluente'>
            líquido de diálisis (efluente)
          </TermTooltip>{' '}
          sale turbio o de un color distinto al habitual.
        </p>
      ),
      table: {
        items: [
          {
            id: 'exit-site-infection',
            symptom: (
              <>
                Enrojecimiento, hinchazón, dolor, calor o pus alrededor de tu{' '}
                <TermTooltip termKey='cateter'>catéter</TermTooltip>
              </>
            ),
            action: 'clinic'
          },
          { id: 'fever', symptom: 'Fiebre', action: 'clinic' },
          { id: 'nausea-vomiting', symptom: 'Náusea o vómito', action: 'clinic' },
          {
            id: 'cloudy-fluid',
            symptom: 'Líquido de diálisis turbio o de color anormal',
            action: 'clinic'
          },
          {
            id: 'no-gas-bowel',
            symptom: 'No poder expulsar gases ni evacuar',
            action: 'clinic'
          }
        ]
      },
      sourceIds: ['medlineplus-pd']
    },
    {
      heading: 'También llama a tu clínica si...',
      body: (
        <p>
          Estas señales son menos urgentes, pero también debes avisar a tu
          clínica — sobre todo si duran más de 2 días.
        </p>
      ),
      table: {
        items: [
          { id: 'severe-itching', symptom: 'Comezón intensa', action: 'clinic' },
          {
            id: 'sleep-problems',
            symptom: 'Problemas para dormir',
            action: 'clinic'
          },
          {
            id: 'diarrhea-constipation',
            symptom: 'Diarrea o estreñimiento',
            action: 'clinic'
          },
          {
            id: 'drowsiness-confusion',
            symptom: 'Somnolencia o confusión',
            action: 'clinic'
          },
          {
            id: 'lasting-2-days',
            symptom: 'Cualquier molestia que dure más de 2 días',
            action: 'clinic'
          }
        ]
      },
      sourceIds: ['medlineplus-pd']
    },
    {
      heading: 'Si no localizas a tu clínica',
      body: (
        <p>
          Si no logras comunicarte con tu clínica y sientes que tu situación
          es grave, acude a un servicio de urgencias.
        </p>
      )
    },
    {
      heading: 'Señales de alarma de peritonitis',
      body: (
        <>
          <p>
            Estas son las señales de alarma que debes vigilar, según la guía
            de IMSS para diálisis peritoneal:
          </p>
          <SignList
            items={[
              { id: 'nausea', text: 'Náusea' },
              { id: 'vomito', text: 'Vómito' },
              {
                id: 'apetito',
                text: (
                  <>
                    Poco apetito (
                    <TermTooltip termKey='hiporexia'>hiporexia</TermTooltip>)
                  </>
                )
              },
              { id: 'diarrea', text: 'Diarrea' },
              {
                id: 'dolor-abdominal',
                text:
                  'Dolor de panza (abdominal) generalizado, que no se siente en un solo punto'
              },
              { id: 'fiebre', text: 'Fiebre' },
              { id: 'liquido-turbio', text: 'Líquido de diálisis turbio' }
            ]}
          />
        </>
      ),
      sourceIds: ['imss-797-16']
    }
  ]
}
