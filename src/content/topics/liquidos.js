import React from 'react'
import { TermTooltip } from '../../components/TermTooltip'
import { SignList } from '../../components/SignList'

// liquidos: content data for the "Líquidos" (fluid management + swelling)
// topic page (PR8), consumed by TopicPage. Every clinical claim below
// traces to sdd/accessible-redesign/content-research section 3c
// (fluid/swelling) or section 4 (glossary) — see the mapping table in
// sdd/accessible-redesign/apply-progress.
//
// R5.5 hard rule for this page: no source states a universal fixed mL/oz
// per-day fluid limit as appropriate for PD (NIDDK and DaVita both frame
// the fluid goal as individualized/dietitian-set; NKF's generic "32 oz/day"
// figure is NOT PD-specific and conflicts with that framing per the
// research's explicit caution). No numeric fluid limit appears anywhere on
// this page — verified by a rendered-text regex test in
// __tests__/Liquidos.test.js.
//
// R5.6 hard requirement for this page (the owner's lived misconception
// loop: fear of drinking -> severe self-restriction -> body still swells):
// the "why swelling happens" section presents non-behavioral causes
// (sodium intake, ultrafiltration variance/failure, membrane change over
// years of PD) alongside behavioral guidance, and never defaults to
// "you drank too much" as the explanation. The urgent callout directs
// users to contact the clinic for a *change* in swelling pattern rather
// than self-adjusting limits.
//
// Section order: intro -> fluid-overload warning signs (R5.1's
// recommended-for-this-page escalation slot) -> why swelling happens
// (misconception loop, R5.6) -> what you can do (sodium, weight,
// individualized goal) -> citations.
export const liquidos = {
  title: 'Líquidos',
  description:
    'Qué hacer si te hinchas, por qué pasa y cómo trabajar con tu clínica tu meta de líquidos.',
  intro: (
    <>
      Cuánto puedes tomar de líquido es diferente para cada persona en
      diálisis peritoneal. Aquí encuentras qué señales de retención de
      líquido vigilar, por qué puedes hincharte aunque tomes poco, y qué
      puedes hacer con el apoyo de tu clínica.
    </>
  ),
  sourceIds: ['niddk-nutrition-pd'],
  sections: [
    {
      heading: 'Señales de retención de líquido',
      body: (
        <>
          <p>
            Si tu cuerpo está reteniendo más líquido del que debería,
            puedes notar:
          </p>
          <SignList
            items={[
              {
                id: 'hinchazon',
                text: 'Hinchazón en pies, tobillos, muñecas o cara'
              },
              {
                id: 'falta-aire',
                text: 'Falta de aire o dificultad para respirar'
              },
              { id: 'calambres', text: 'Calambres' },
              { id: 'dolor-cabeza', text: 'Dolor de cabeza' },
              {
                id: 'distension-abdominal',
                text: 'Hinchazón (distensión) abdominal'
              }
            ]}
          />
        </>
      ),
      warning: {
        level: 'urgent',
        text:
          'Llama a tu clínica de inmediato si notas un cambio en cómo se hincha tu cuerpo, o si te cuesta trabajo respirar. No ajustes tú mismo tus límites de líquidos — pídele a tu clínica que revise la causa.'
      },
      sourceIds: ['nkf-fluid-overload']
    },
    {
      heading: 'Por qué te hinchas: no siempre es por tomar líquido',
      body: (
        <>
          <p>
            Es común restringirte mucho el líquido por miedo a hincharte, y
            aun así seguir hinchándote. Esto no significa que hiciste algo
            mal: la hinchazón puede tener otras causas que no dependen solo
            de cuánto tomas.
          </p>
          <p>
            La <TermTooltip termKey='sodio'>sal (sodio)</TermTooltip> hace
            que tu cuerpo retenga agua y aumenta la sed. Comer con mucha sal
            puede hacer que te hinches, aunque tomes poco líquido.
          </p>
          <p>
            La diálisis peritoneal saca líquido de tu cuerpo mediante un
            proceso llamado{' '}
            <TermTooltip termKey='ultrafiltracion'>
              ultrafiltración
            </TermTooltip>
            . La cantidad de líquido que se saca puede variar, y a veces
            puede fallar por razones médicas — no por algo que hiciste. Esto
            puede pasar si tienes uremia (acumulación de desechos en la
            sangre), peritonitis, o si usas seguido soluciones con dextrosa
            alta. Tu clínica puede revisar esto y ajustar tu tratamiento.
          </p>
          <p>
            Con los años de diálisis peritoneal, la forma en que tu
            peritoneo (la membrana donde ocurre el intercambio) filtra la
            sal y el agua puede cambiar. Esto es algo que tu clínica revisa
            con estudios especiales, no algo que puedas controlar con tu
            alimentación.
          </p>
          <p>
            Si notas más hinchazón de lo normal, llama a tu clínica para que
            revise la causa. No asumas que se debe solo a lo que bebiste:
            puede haber otras razones médicas detrás.
          </p>
        </>
      ),
      sourceIds: ['nkf-fluid-overload', 'nkf-ultrafiltration']
    },
    {
      heading: 'Qué puedes hacer',
      body: (
        <>
          <p>
            La cantidad de líquido que puedes tomar cada día es diferente
            para cada persona. Trabaja con tu nutriólogo o tu clínica para
            definir tu meta diaria de líquidos.
          </p>
          <p>
            Comer con menos sal ayuda a controlar la retención de líquido y
            la sed. Prefiere alimentos frescos, cocina en casa y usa hierbas
            y especias en lugar de sal.
          </p>
          <p>
            Pésate todos los días, a la misma hora. Esto te ayuda, junto con
            tu clínica, a detectar cambios en tu retención de líquido.
          </p>
          <p>
            Si tienes dudas sobre tu meta de líquidos, o notas cambios en tu
            hinchazón, pregúntale a tu clínica o a tu nutriólogo.
          </p>
        </>
      ),
      sourceIds: ['niddk-nutrition-pd', 'imss-797-16']
    }
  ]
}
