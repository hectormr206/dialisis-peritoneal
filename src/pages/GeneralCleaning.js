import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'

export const GeneralCleaning = () => {
  const description = 'Proceso para realizar el aseo general una vez al día, de preferencia a la misma hora.'
  return (
    <Layout title='Aseo general' description={description}>
      <Card>
        {description}
      </Card>
      <Card>
        Asignar una toalla chica para secar las manos, solo se usará para el aseo general.
      </Card>
      <Card>
        <ul>
          <li>
            <span>1</span> Preparar agua clorada (Con agua de garrafón y 10% de cloro, ejemplo: 450ml de agua y 50 ml de cloro)
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>2</span> Colocar la toalla (Doblada a la mitad por lo largo)
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>3</span> Lavado de manos clínico en 3 tiempos empezando por mano no dominante:
            <ul>
              <li>
                <span>3.1</span> Mojar las manos
              </li>
              <li>
                <span>3.2</span> Frotar palmas 10 veces
              </li>
              <li>
                <span>3.3</span> Frotar dorsos 10 veces
              </li>
              <li>
                <span>3.4</span> Enganchar manos y frotar nudillos 10 veces
              </li>
              <li>
                <span>3.5</span> Frotar pulgares 10 veces
              </li>
              <li>
                <span>3.6</span> Frotamos las uñas 10 veces
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>4</span> Secado de manos:
            <ul>
              <li>
                <span>4.1</span> Tomamos la toalla y abrazamos nuestras palmas
              </li>
              <li>
                <span>4.2</span> Secamos los dedos uno a uno presionando solamente
              </li>
              <li>
                <span>4.3</span> Con ligeros toques secamos el dorso de la mano
              </li>
              <li>
                <span>4.4</span> Así como está doblada la toalla la giramos, ahora secaremos con la parte de abajo
              </li>
              <li>
                <span>4.5</span> Repetimos abrazo de palmas y secamos uno a uno los dedos
              </li>
              <li>
                <span>4.6</span> Con ligeros toques secamos el dorso de la mano
              </li>
              <li>
                <span>4.7</span> Doblamos la toalla por el lado seco y la dejamos acomodada para el siguiente lavado de manos
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>5</span> Limpiar mesa de trabajo (Con agua clorada al 10% o Except):
            <ul>
              <li>
                <span>5.1</span> Colocar chorrito de agua clorada en las esquinas de la mesa y en el centro
              </li>
              <li>
                <span>5.2</span> Impregnar compresa con los chorritos de cloro puestos en la mesa y limpiar de frente hacia atrás (hacer presión con la compresa para que la mesa quede bien seca)
              </li>
              <li>
                <span>5.3</span> Doblar compresa y limpiar los lados de la mesa (Cuidar que nuestra ropa no toque la mesa)
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>6</span> Usar la compresa e ir doblándola por sus diferentes lados limpios colocando agua clorada al 10% para limpiar lo siguiente e ir colocándolos en la mesa de trabajo:
            <ul>
              <li>
                <span>6.1</span> Except con tapa sobre la compresa y poner agua clorada al 10%
              </li>
              <li>
                <span>6.2</span> Pinzas sobre la compresa y poner agua clorada al 10%, las pinzas deben estar abiertas
              </li>
              <li>
                <span>6.3</span> Limpiar horno de microondas:
                <ul>
                  <li>
                    <span>6.3.1</span> Centro primero
                  </li>
                  <li>
                    <span>6.3.2</span> Paredes
                  </li>
                  <li>
                    <span>6.3.3</span> Puerta
                  </li>
                  <li>
                    <span>6.3.4</span> Parte de afuera
                  </li>
                </ul>
              </li>
              <li>
                <span>6.4</span> Limpiar tripie
              </li>
              <li>
                <span>6.5</span> Limpiar báscula y charola
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>7</span> Usar otra compresa e ir doblándola por sus diferentes lados limpios colocando agua clorada al 10% en 5 puntos para limpiar lo siguiente:
            <ul>
              <li>
                <span>7.1</span> Limpiar la mesa
              </li>
              <li>
                <span>7.2</span> Limpiar las cajas de material
              </li>
              <li>
                <span>7.3</span> Limpiar las sillas
              </li>
              <li>
                <span>7.4</span> Limpiar la cama
              </li>
              <li>
                <span>7.5</span> Limpiar los alrededores de la ventana
              </li>
              <li>
                <span>7.6</span> Limpiar demás cosas en donde se pueda acumular el polvo
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>8</span> Lavado de manos clínico en 3 tiempos empezando por mano no dominante:
            <ul>
              <li>
                <span>8.1</span> Mojar las manos
              </li>
              <li>
                <span>8.2</span> Frotar palmas 10 veces
              </li>
              <li>
                <span>8.3</span> Frotar dorsos 10 veces
              </li>
              <li>
                <span>8.4</span> Enganchar manos y frotar nudillos 10 veces
              </li>
              <li>
                <span>8.5</span> Frotar pulgares 10 veces
              </li>
              <li>
                <span>8.6</span> Frotar uñas 10 veces
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>9</span> Secado de manos:
            <ul>
              <li>
                <span>9.1</span> Tomamos la toalla y abrazamos nuestras palmas
              </li>
              <li>
                <span>9.2</span> Secamos los dedos de la mano
              </li>
              <li>
                <span>9.3</span> Con ligeros toques secamos el dorso de la mano
              </li>
              <li>
                <span>9.4</span> Así como está doblada la toalla la giramos, ahora secaremos con la parte de abajo
              </li>
              <li>
                <span>9.5</span> Repetimos abrazo de palmas y secado uno a uno de los dedos
              </li>
              <li>
                <span>9.6</span> Con ligeros toques secamos el dorso de la mano
              </li>
              <li>
                <span>9.7</span> Depositamos la toalla en el cesto de toallas sucias
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>10</span> Regresar los artículos limpios de la mesa de trabajo a la mesa de material
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>11</span> Colocar en la mesa de trabajo un metro de manta
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>12</span> Usar otra compresa e ir doblándola por sus diferentes lados limpios colocando agua clorada al 10% en 5 puntos para limpiar 5 bolsas de diálisis (Esto según número de recambios al dia indicados por el médico más 1 y se debe definir una compresa exclusiva solo para el limpiado de bolsas):
            <ul>
              <li>
                <span>12.1</span> Sacudir la bolsa para despegarla
              </li>
              <li>
                <span>12.2</span> Colocar la bolsa en la mesa con la apertura hacia enfrente y líneas de egreso e ingreso hacia abajo (Mangueritas)
              </li>
              <li>
                <span>12.3</span> Tomar una compresa y colocar en 5 puntos el agua clorada al 10%
              </li>
              <li>
                <span>12.4</span> Limpiamos la bolsa:
                <ul>
                  <li>
                    <span>12.4.1</span> Primero abajo de izquierda a derecha
                  </li>
                  <li>
                    <span>12.4.2</span> Luego de abajo hacia arriba con fuerza
                  </li>
                  <li>
                    <span>12.4.3</span> Limpiamos los dedos de ambas manos antes de girar la bolsa
                  </li>
                  <li>
                    <span>12.4.4</span> Se da la vuelta a la compresa y a la bolsa, colocándola en el otro lado de la mesa
                  </li>
                  <li>
                    <span>12.4.5</span> Primero abajo de izquierda a derecha
                  </li>
                  <li>
                    <span>12.4.6</span> Luego de abajo hacia arriba con fuerza
                  </li>
                  <li>
                    <span>12.4.7</span> Limpiamos los dedos de ambas manos antes de girar la bolsa
                  </li>
                </ul>
              </li>
              <li>
                <span>12.5</span> Limpiamos los dedos de ambas manos antes de colocarla en la caja
              </li>
              <li>
                <span>12.6</span> Colocar la bolsa en la caja grande (Lavar las cajas cada 8 días con agua y con jabón)
              </li>
              <li>
                <span>12.7</span> Quitamos la manta, la doblamos y guardamos para la siguiente limpieza
              </li>
            </ul>
          </li>
        </ul>
      </Card>
    </Layout>
  )
}