// handDry: shared hand-drying step sequence (R3.2), the counterpart to
// handWash.js. Covers the drying actions that follow hand-washing; the
// "prepare the towel" step that precedes washing is kept as a page-owned
// step in each procedure because its wording differs page to page (verified
// against GeneralCleaning vs. WoundHealing source text) — see PR3
// apply-progress notes for the fidelity rationale.

import React from 'react'

import SecadoManoTomarToalla from '../../assets/video/webm/SecadoManoTomarToalla.webm'
import SecadoManoTomarToallaImage from '../../assets/image/jpg/SecadoManoTomarToalla.jpg'
import SecadoManoDedos from '../../assets/video/webm/SecadoManoDedos.webm'
import SecadoManoDedosImage from '../../assets/image/jpg/SecadoManoDedos.jpg'
import SecadoManoDorso from '../../assets/video/webm/SecadoManoDorso.webm'
import SecadoManoDorsoImage from '../../assets/image/jpg/SecadoManoDorso.jpg'
import SecadoManoGiroToalla from '../../assets/video/webm/SecadoManoGiroToalla.webm'
import SecadoManoGiroToallaImage from '../../assets/image/jpg/SecadoManoGiroToalla.jpg'
import SecadoManoAbrazoPalmas from '../../assets/video/webm/SecadoManoAbrazoPalmas.webm'
import SecadoManoAbrazoPalmasImage from '../../assets/image/jpg/SecadoManoAbrazoPalmas.jpg'

import { assertValidSteps } from '../validateSteps'

export const handDrySteps = assertValidSteps([
  {
    id: 'hand-dry-take-towel',
    title: 'Secado - Tomar toalla',
    description: 'Tome la toalla y abrace sus palmas para comenzar el secado',
    media: { webm: SecadoManoTomarToalla, poster: SecadoManoTomarToallaImage, label: 'Tomar toalla para secado' },
    content: (
      <p><strong>Inicio:</strong> Palmas juntas con la toalla entre ellas</p>
    )
  },
  {
    id: 'hand-dry-fingers',
    title: 'Secado - Secar dedos',
    description: 'Seque cada dedo individualmente con movimientos suaves',
    media: { webm: SecadoManoDedos, poster: SecadoManoDedosImage, label: 'Secar dedos individualmente' },
    content: (
      <p><strong>Técnica:</strong> Dedo por dedo, desde la base hasta la punta</p>
    )
  },
  {
    id: 'hand-dry-back',
    title: 'Secado - Secar dorso',
    description: 'Seque el dorso de la mano con toques ligeros',
    media: { webm: SecadoManoDorso, poster: SecadoManoDorsoImage, label: 'Secar dorso de la mano' },
    content: (
      <p><strong>Movimiento:</strong> Toques suaves, sin frotar</p>
    )
  },
  {
    id: 'hand-dry-turn-towel',
    title: 'Secado - Girar toalla',
    description: 'Gire la toalla para usar la parte limpia para la segunda mano',
    media: { webm: SecadoManoGiroToalla, poster: SecadoManoGiroToallaImage, label: 'Girar toalla para segunda mano' },
    content: (
      <p><strong>Importante:</strong> Use la parte no contaminada de la toalla</p>
    )
  },
  {
    id: 'hand-dry-second-hand',
    title: 'Secado - Segunda mano',
    description: 'Repita el proceso de secado con la segunda mano',
    media: { webm: SecadoManoAbrazoPalmas, poster: SecadoManoAbrazoPalmasImage, label: 'Secar segunda mano' },
    content: (
      <p><strong>Repetir:</strong> Mismo proceso de abrazo y secado individual</p>
    )
  }
], 'sequences/handDry')
