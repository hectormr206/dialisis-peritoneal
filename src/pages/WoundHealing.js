import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'

export const WoundHealing = () => {
  const description = 'Proceso para realizar la curación de la herida del catéter y la herida de cirugía.'
  return (
    <Layout title='Curación de heridas' description={description}>
      <Card>
        {description}
      </Card>
      <Card>
        Si es posible y el paciente quiere, se puede bañar. Las gasas y el fajero no se quitan.
      </Card>
      <Card>
        <ul>
          <li>
            <span>1</span> Colocar cubrebocas al paciente y familiares
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>2</span> Acomodamos la toalla
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
                <span>3.2</span> Frotar palma con palma 10 veces
              </li>
              <li>
                <span>3.3</span> Frotar dorso de mano no dominante con palma de mano dominante 10 veces
              </li>
              <li>
                <span>3.4</span> Frotar dorso de mano dominante con palma de mano no dominante 10 veces
              </li>
              <li>
                <span>3.5</span> Frotar nudillos de mano no dominante con dedo pulgar de mano dominante 10 veces
              </li>
              <li>
                <span>3.6</span> Frotar nudillos de mano dominante con dedo pulgar de mano no dominante 10 veces
              </li>
              <li>
                <span>3.7</span> Enganchar manos y frotar nudillos de la mano no dominante con el pulgar de la mano dominante 10 veces
              </li>
              <li>
                <span>3.8</span> Enganchar manos y frotar nudillos de la mano dominante con el pulgar de la mano no dominante 10 veces
              </li>
              <li>
                <span>3.9</span> Abrazar pulgar de la mano no dominante con la mano dominante y realizar giros. Al mismo tiempo con el pulgar de la mano dominante frotamos parte del dorso de la mano no dominante. 10 veces
              </li>
              <li>
                <span>3.10</span> Abrazar pulgar de la mano dominante con la mano no dominante y realizar giros. Al mismo tiempo con el pulgar de la mano no dominante frotamos parte del dorso de la mano dominante. 10 veces
              </li>
              <li>
                <span>3.11</span> Frotamos las uñas de la mano no dominante en la palma de la mano dominante 10 veces
              </li>
              <li>
                <span>3.12</span> Frotamos las uñas de la mano dominante en la palma de la mano no dominante 10 veces
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>4</span> Limpiamos la mesa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>5</span> Usar la misma compresa e ir doblándola por sus diferentes lados limpios para limpiar lo siguiente e ir colocándolos en la mesa de trabajo:
            <ul>
              <li>
                <span>5.1</span> Except sin tapa
              </li>
              <li>
                <span>5.2</span> Guante de latex
              </li>
              <li>
                <span>5.3</span> Tijeras
              </li>
              <li>
                <span>5.4</span> Cinta micropore (Esta se limpia ligeramente)
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        Sacar gasas aproximadamente 10.

        También se necesita lo siguiente:
        Agua esteril o hervida (se deja hervir 5 minutos o más)
        Jabón líquido neutro
        Fajero limpio

        Cortar 6 cintas micropore y pegarlas en la mesa para tomarlas más fácilmente al colocar la gasa limpia en la herida
        Sacar línea de catéter y dejarla descansar en una compresa cubriendola
        retirar fajero.
        Desprender cintas de la herida, pero aun no retirarlas solo despegarlas.
        Lavado clínico de manos en 3 tiempos
        Secar con la toalla y dejarla en el sesto
        Quitamos las gasas del paciente.
        Colocar guante en mano derecha y enjuagar mano con el agua esteril
        Impregnar gasa con agua esteril y jabón líquido neutro
        Colocamos gasa en la herida y presionamos levemente
        Hacemos un circulo con la gasa y empezamos a arrastrar la gasa del centro hacia fuera, formando círculos alrededor de la entrada del catéter
        Lo mejor es hacer la limpieza con jabón una vez, tratando de arrastrar toda la suciedad
        Desechamos la gasa
        Revisar que no queden residuos de pegamento en la piel, si es así, retirar cuidadosamente con la gasa y en forma circular tratando de no contaminar la herida
        Con otra gasa con agua esteril realizamos el mismo proceso para quitar el jabón
        Desechamos la gasa
        Repetimos 2 o 3 veces más hasta quitar el jabón
        Tomar otras gasas para secar muy bien la entrada completa del catéter y dejar orear un poco.
        No soplar, hechar aire, o ayudar con algo externo que no sea la gasa para secar el área mojada
        Realizar un push de except en herida, levantando un poquito el tubito para que caiga en toda la entrada del cateter.
        Colocar una gasa a lo largo de la entrada del catéter e ir colocando 2 cintas adhesivas en diferentes lugares a la anterior curación, para evitar irritar la piel.
        Colocar otra cinta adhesiva que abrace muy bien el tubo del catéter y pegar las dos extremidades a la piel. Con esto ayudamos a que no se jale por accidente
        Colocar fajero limpio.
        Guardar catéter.
        Guardar la compresa.
        devolver todos los materiales a su lugar.
      </Card>
    </Layout>
  )
}
