import {
  GiVacuumCleaner,
  GiRoughWound,
  GiWaterRecycling,
  GiMedicines,
  GiWaterDrop,
  GiFruitBowl
} from 'react-icons/gi'
import { MdWarningAmber } from 'react-icons/md'
import { aseoGeneral } from './procedures/aseo-general'
import { limpiezaHerida } from './procedures/limpieza-herida'
import { realizarDialisis } from './procedures/realizar-dialisis'

// Data for the hub Home sections and the 3 group index pages
// (/procedimientos, /cuidados, /alimentacion) — R4.1, R4.2. Single-sourced
// here so Home and each index page never drift on titles/descriptions.
export const procedureLinks = [
  {
    to: aseoGeneral.route,
    title: aseoGeneral.title,
    description: aseoGeneral.description,
    icon: GiVacuumCleaner
  },
  {
    to: limpiezaHerida.route,
    title: limpiezaHerida.title,
    description: limpiezaHerida.description,
    icon: GiRoughWound
  },
  {
    to: realizarDialisis.route,
    title: realizarDialisis.title,
    description: realizarDialisis.description,
    icon: GiWaterRecycling
  }
]

export const cuidadosLinks = [
  {
    to: '/cuidados/higiene',
    title: 'Higiene',
    description: 'Cuidado de la piel, el catéter y la herida.',
    icon: GiMedicines
  },
  {
    to: '/cuidados/senales-de-alarma',
    title: 'Señales de alarma',
    description: 'Qué observar y cuándo buscar ayuda.',
    icon: MdWarningAmber
  }
]

export const alimentacionLinks = [
  {
    to: '/alimentacion/liquidos',
    title: 'Líquidos',
    description: 'Qué tomar en cuenta sobre líquidos e ingresos.',
    icon: GiWaterDrop
  },
  {
    to: '/alimentacion/nutricion',
    title: 'Nutrición',
    description: 'Alimentación saludable para diálisis peritoneal.',
    icon: GiFruitBowl
  }
]
