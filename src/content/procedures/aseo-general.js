// aseo-general: "Aseo General" procedure, composed from the shared
// hand-wash/hand-dry sequences plus its own steps (R3.1, R3.2, R3.4).
//
// Content extracted verbatim from the pre-migration src/pages/GeneralCleaning.js
// (same titles, descriptions, media, order) — this is a refactor, not a
// content rewrite. See PR3 apply-progress for the extraction notes.

import React from 'react'

import ColocarToalla from '../../assets/video/webm/ColocarToalla.webm'
import ColocarToallaImage from '../../assets/image/jpg/ColocarToalla.jpg'
import LimpiarMesaCincoPuntos from '../../assets/video/webm/LimpiarMesaCincoPuntos.webm'
import LimpiarMesaCincoPuntosImage from '../../assets/image/jpg/LimpiarMesaCincoPuntos.jpg'
import LimpiarMesaCompresa from '../../assets/video/webm/LimpiarMesaCompresa.webm'
import LimpiarMesaCompresaImage from '../../assets/image/jpg/LimpiarMesaCompresa.jpg'

import { Video } from '../../components/Video'
import { handWashSteps } from '../sequences/handWash'
import { handDrySteps } from '../sequences/handDry'
import { assertValidSteps, assertUniqueStepIds } from '../validateSteps'

const ownSteps = assertValidSteps([
  {
    id: 'prep-materials',
    title: 'Preparación inicial',
    description: 'Prepare los materiales necesarios antes de comenzar',
    content: (
      <div>
        <h4>📋 Materiales necesarios:</h4>
        <ul>
          <li>Agua de garrafón</li>
          <li>Cloro (10% del total)</li>
          <li>Toalla pequeña exclusiva para aseo general</li>
          <li>Jabón antibacterial</li>
        </ul>
        <h4>🧪 Preparar agua clorada:</h4>
        <p>
          <strong>Ejemplo:</strong> 450ml de agua + 50ml de cloro = 500ml de
          solución
        </p>
      </div>
    )
  },
  {
    id: 'prep-towel',
    title: 'Colocar toalla para secado',
    description: 'Coloque la toalla doblada a la mitad por lo largo para el secado de manos',
    media: { webm: ColocarToalla, poster: ColocarToallaImage, label: 'Cómo colocar la toalla' },
    content: (
      <p><strong>Importante:</strong> Use una toalla exclusiva para el aseo general</p>
    )
  },
  {
    id: 'clean-surface',
    title: 'Limpieza de superficie',
    description: 'Limpie la mesa o superficie de trabajo con la solución clorada',
    content: (
      <div>
        <p>
          <strong>Patrón:</strong> Movimientos sistemáticos cubriendo toda la
          superficie
        </p>
        <Video
          src={LimpiarMesaCincoPuntos}
          poster={LimpiarMesaCincoPuntosImage}
          title='Limpiar superficie de trabajo'
        />
        <Video
          src={LimpiarMesaCompresa}
          poster={LimpiarMesaCompresaImage}
          title='Técnica de limpieza con compresa'
        />
      </div>
    )
  }
], 'procedures/aseo-general (own steps)')

export const aseoGeneralSteps = assertUniqueStepIds(
  [
    ownSteps[0], // prep-materials
    ownSteps[1], // prep-towel
    ...handWashSteps,
    ...handDrySteps,
    ownSteps[2] // clean-surface
  ],
  'procedures/aseo-general'
)

export const aseoGeneral = {
  id: 'aseo-general',
  route: '/aseo-general',
  title: 'Aseo General',
  description:
    'Siga estos pasos en orden para realizar el aseo general correctamente. Cada paso debe completarse antes de continuar al siguiente.',
  steps: aseoGeneralSteps
}
