// handWash: shared hand-washing step sequence (R3.2 — single-sourced, spread
// into whichever procedure needs it instead of copy-pasted per page).
//
// Content extracted verbatim from src/pages/GeneralCleaning.js (this PR only
// migrates GeneralCleaning; WoundHealing/WaterRecycling adopt this sequence
// in PR4 — see design section 8).

import React from 'react'

import LavarManosJabon from '../../assets/video/webm/LavarManosJabon.webm'
import LavarManosJabonImage from '../../assets/image/jpg/LavarManosJabon.jpg'
import LavarManosPalmas from '../../assets/video/webm/LavarManosPalmas.webm'
import LavarManosPalmasImage from '../../assets/image/jpg/LavarManosPalmas.jpg'
import LavarManosDorso from '../../assets/video/webm/LavarManosDorso.webm'
import LavarManosDorsoImage from '../../assets/image/jpg/LavarManosDorso.jpg'
import LavarManosNudillos from '../../assets/video/webm/LavarManosNudillos.webm'
import LavarManosNudillosImage from '../../assets/image/jpg/LavarManosNudillos.jpg'
import LavarManosPulgares from '../../assets/video/webm/LavarManosPulgares.webm'
import LavarManosPulgaresImage from '../../assets/image/jpg/LavarManosPulgares.jpg'
import LavarManosUnas from '../../assets/video/webm/LavarManosUnas.webm'
import LavarManosUnasImage from '../../assets/image/jpg/LavarManosUnas.jpg'

import { assertValidSteps } from '../validateSteps'

export const handWashSteps = assertValidSteps([
  {
    id: 'hand-wash-soap',
    title: 'Lavado de manos - Aplicar jabón',
    description: 'Moje las manos y aplique jabón antibacterial. Comience por la mano no dominante',
    media: { webm: LavarManosJabon, poster: LavarManosJabonImage, label: 'Aplicar jabón en las manos' },
    content: (
      <p><strong>Técnica:</strong> Manos bajo el agua, aplicar jabón en cantidad suficiente</p>
    )
  },
  {
    id: 'hand-wash-palms',
    title: 'Lavado de manos - Frotar palmas',
    description: 'Frote las palmas de las manos 10 veces de manera circular',
    media: { webm: LavarManosPalmas, poster: LavarManosPalmasImage, label: 'Frotar palmas de las manos' },
    content: (
      <p><strong>Cuenta:</strong> 10 movimientos circulares completos</p>
    )
  },
  {
    id: 'hand-wash-backs',
    title: 'Lavado de manos - Frotar dorsos',
    description: 'Frote el dorso de cada mano 10 veces con la palma contraria',
    media: { webm: LavarManosDorso, poster: LavarManosDorsoImage, label: 'Frotar dorso de las manos' },
    content: (
      <p><strong>Técnica:</strong> Palma sobre dorso, movimientos de arriba hacia abajo</p>
    )
  },
  {
    id: 'hand-wash-knuckles',
    title: 'Lavado de manos - Frotar nudillos',
    description: 'Enganche los dedos y frote los nudillos 10 veces',
    media: { webm: LavarManosNudillos, poster: LavarManosNudillosImage, label: 'Frotar nudillos de las manos' },
    content: (
      <p><strong>Posición:</strong> Dedos entrelazados, frotar nudillos entre sí</p>
    )
  },
  {
    id: 'hand-wash-thumbs',
    title: 'Lavado de manos - Frotar pulgares',
    description: 'Frote cada pulgar 10 veces con la palma contraria',
    media: { webm: LavarManosPulgares, poster: LavarManosPulgaresImage, label: 'Frotar pulgares' },
    content: (
      <p><strong>Movimiento:</strong> Pulgar rodeado por la palma contraria, movimiento rotatorio</p>
    )
  },
  {
    id: 'hand-wash-nails',
    title: 'Lavado de manos - Frotar uñas',
    description: 'Frote las uñas contra las palmas 10 veces cada mano',
    media: { webm: LavarManosUnas, poster: LavarManosUnasImage, label: 'Frotar uñas contra palmas' },
    content: (
      <p><strong>Técnica:</strong> Uñas contra la palma contraria, movimiento circular</p>
    )
  }
], 'sequences/handWash')
