import {
  GiVacuumCleaner,
  GiRoughWound,
  GiWaterRecycling,
  GiMedicines,
  GiWaterDrop,
  GiFruitBowl,
  GiWeightScale
} from 'react-icons/gi'
import { MdWarningAmber } from 'react-icons/md'
import { aseoGeneral } from './procedures/aseo-general'
import { limpiezaHerida } from './procedures/limpieza-herida'
import { realizarDialisis } from './procedures/realizar-dialisis'

// Data for the hub Home sections and the 3 group index pages
// (/procedimientos, /cuidados, /alimentacion) — R4.1, R4.2. Single-sourced
// here so Home and each index page never drift on titles/descriptions.
//
// `description` here is short card copy (~8-12 words, one sentence) —
// deliberately NOT the same string as each procedure's `description` field
// (which feeds <meta name="description"> in Layout, SEO-only, can be
// longer). Owner feedback: cards had "too much text, users get lost" — one
// short line per card, everywhere, es-MX plain language.
//
// `section` (procedimientos/cuidados/comida) drives the color identity
// (tinted chip on CardLink, tinted background on the Home/index hub Card)
// — see GlobalStyle.js for the tokens.
export const procedureLinks = [
  {
    to: aseoGeneral.route,
    title: aseoGeneral.title,
    description: 'Pasos para el aseo diario, uno por uno.',
    icon: GiVacuumCleaner,
    section: 'procedimientos'
  },
  {
    to: limpiezaHerida.route,
    title: limpiezaHerida.title,
    description: 'Cómo curar la herida del catéter, paso a paso.',
    icon: GiRoughWound,
    section: 'procedimientos'
  },
  {
    to: realizarDialisis.route,
    title: realizarDialisis.title,
    description: 'Guía completa para hacer tu diálisis con seguridad.',
    icon: GiWaterRecycling,
    section: 'procedimientos'
  }
]

export const cuidadosLinks = [
  {
    to: '/cuidados/higiene',
    title: 'Higiene',
    description: 'Cuidado de la piel, el catéter y la herida.',
    icon: GiMedicines,
    section: 'cuidados'
  },
  {
    to: '/cuidados/senales-de-alarma',
    title: 'Señales de alarma',
    description: 'Qué observar y cuándo buscar ayuda.',
    icon: MdWarningAmber,
    section: 'cuidados'
  }
]

export const alimentacionLinks = [
  {
    to: '/alimentacion/liquidos',
    title: 'Líquidos',
    description: 'Cuánto líquido tomar y qué vigilar.',
    icon: GiWaterDrop,
    section: 'comida'
  },
  {
    to: '/alimentacion/nutricion',
    title: 'Nutrición',
    description: 'Alimentación saludable para diálisis peritoneal.',
    icon: GiFruitBowl,
    section: 'comida'
  },
  {
    // Route is a top-level `/registro` (design section 7 sketch), not
    // nested under /alimentacion — same pattern as the 3 legacy procedure
    // routes, which live outside /procedimientos but still appear in the
    // Procedimientos hub group and nav tab (see NavBar's comment). This
    // single navigation.js entry supplies both required entry points
    // (Home hub card + /alimentacion index card) since both pages already
    // render this array — no per-page wiring needed.
    to: '/registro',
    title: 'Mi registro diario',
    description: 'Anota tu peso cada día, solo en tu teléfono.',
    icon: GiWeightScale,
    section: 'comida'
  }
]
