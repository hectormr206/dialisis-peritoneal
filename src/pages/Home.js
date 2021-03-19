import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'

export const Home = () => {
  const description = 'Aquí encontrarás todo lo que necesitas saber sobre la diálisis peritoneal.'

  return (
    <Layout title='Diálisis' description={description}>
      <Card>
        {description}
      </Card>
      <Card>
        Horario sugerido diario para 4 recambios de 4 horas al día:
        <ul>
          <li>
            <span>06:00 am</span> <strong>Egreso:</strong> 0 ml o más, <strong>Ingreso:</strong> 2000 ml
          </li>
          <li>
            <span>09:00 am</span> Preparar agua estéril
          </li>
          <li>
            <span>09:30 am</span> Realizar curación
          </li>
          <li>
            <span>10:00 am</span> <strong>Egreso:</strong> 2000 ml o más, <strong>Ingreso:</strong> 2000 ml
          </li>
          <li>
            <span>01:00 pm</span> Realizar Aseo general
          </li>
          <li>
            <span>02:00 pm</span> <strong>Egreso:</strong> 2000 ml o más, <strong>Ingreso:</strong> 2000 ml
          </li>
          <li>
            <span>05:30 am</span> Realizar curación
          </li>
          <li>
            <span>06:00 pm</span> <strong>Egreso:</strong> 2000 ml o más, <strong>Ingreso:</strong> 2000 ml
          </li>
          <li>
            <span>10:00 pm</span> <strong>Egreso:</strong> 2000 ml o más, <strong>Ingreso:</strong> 150 - 200 ml
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            Realizado por:
          </li>
          <li>
            <span>Celia García Mateo</span>
          </li>
          <li>
            <span>Héctor Martínez Reséndiz</span>
          </li>
        </ul>
      </Card>
    </Layout>
  )
}
