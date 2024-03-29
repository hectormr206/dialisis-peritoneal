import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { Video } from '../components/Video'

import ColocarToalla from '../assets/video/webm/ColocarToalla.webm'
import ColocarToallaImage from '../assets/image/jpg/ColocarToalla.jpg'

import LavarManosJabon from '../assets/video/webm/LavarManosJabon.webm'
import LavarManosJabonImage from '../assets/image/jpg/LavarManosJabon.jpg'
import LavarManosPalmas from '../assets/video/webm/LavarManosPalmas.webm'
import LavarManosPalmasImage from '../assets/image/jpg/LavarManosPalmas.jpg'
import LavarManosDorso from '../assets/video/webm/LavarManosDorso.webm'
import LavarManosDorsoImage from '../assets/image/jpg/LavarManosDorso.jpg'
import LavarManosNudillos from '../assets/video/webm/LavarManosNudillos.webm'
import LavarManosNudillosImage from '../assets/image/jpg/LavarManosNudillos.jpg'
import LavarManosPulgares from '../assets/video/webm/LavarManosPulgares.webm'
import LavarManosPulgaresImage from '../assets/image/jpg/LavarManosPulgares.jpg'
import LavarManosUnas from '../assets/video/webm/LavarManosUnas.webm'
import LavarManosUnasImage from '../assets/image/jpg/LavarManosUnas.jpg'

import SecadoManoTomarToalla from '../assets/video/webm/SecadoManoTomarToalla.webm'
import SecadoManoTomarToallaImage from '../assets/image/jpg/SecadoManoTomarToalla.jpg'
import SecadoManoDedos from '../assets/video/webm/SecadoManoDedos.webm'
import SecadoManoDedosImage from '../assets/image/jpg/SecadoManoDedos.jpg'
import SecadoManoDorso from '../assets/video/webm/SecadoManoDorso.webm'
import SecadoManoDorsoImage from '../assets/image/jpg/SecadoManoDorso.jpg'
import SecadoManoGiroToalla from '../assets/video/webm/SecadoManoGiroToalla.webm'
import SecadoManoGiroToallaImage from '../assets/image/jpg/SecadoManoGiroToalla.jpg'
import SecadoManoAbrazoPalmas from '../assets/video/webm/SecadoManoAbrazoPalmas.webm'
import SecadoManoAbrazoPalmasImage from '../assets/image/jpg/SecadoManoAbrazoPalmas.jpg'
import SecadoManoDorsoContrario from '../assets/video/webm/SecadoManoDorsoContrario.webm'
import SecadoManoDorsoContrarioImage from '../assets/image/jpg/SecadoManoDorsoContrario.jpg'
import SecadoManoDobladoToalla from '../assets/video/webm/SecadoManoDobladoToalla.webm'
import SecadoManoDobladoToallaImage from '../assets/image/jpg/SecadoManoDobladoToalla.jpg'

import LimpiarMesaCincoPuntos from '../assets/video/webm/LimpiarMesaCincoPuntos.webm'
import LimpiarMesaCincoPuntosImage from '../assets/image/jpg/LimpiarMesaCincoPuntos.jpg'
import LimpiarMesaCompresa from '../assets/video/webm/LimpiarMesaCompresa.webm'
import LimpiarMesaCompresaImage from '../assets/image/jpg/LimpiarMesaCompresa.jpg'
import LimpiarMesaCompresaLaterales from '../assets/video/webm/LimpiarMesaCompresaLaterales.webm'
import LimpiarMesaCompresaLateralesImage from '../assets/image/jpg/LimpiarMesaCompresaLaterales.jpg'

import LimpiarArticuloExsept from '../assets/video/webm/LimpiarArticuloExsept.webm'
import LimpiarArticuloExseptImage from '../assets/image/jpg/LimpiarArticuloExsept.jpg'
import LimpiarArticuloPinzas from '../assets/video/webm/LimpiarArticuloPinzas.webm'
import LimpiarArticuloPinzasImage from '../assets/image/jpg/LimpiarArticuloPinzas.jpg'
import LimpiarArticuloTijeras from '../assets/video/webm/LimpiarArticuloTijeras.webm'
import LimpiarArticuloTijerasImage from '../assets/image/jpg/LimpiarArticuloTijeras.jpg'
import LimpiarArticuloMupirocina from '../assets/video/webm/LimpiarArticuloMupirocina.webm'
import LimpiarArticuloMupirocinaImage from '../assets/image/jpg/LimpiarArticuloMupirocina.jpg'
import LimpiarArticuloCinta from '../assets/video/webm/LimpiarArticuloCinta.webm'
import LimpiarArticuloCintaImage from '../assets/image/jpg/LimpiarArticuloCinta.jpg'

import LimpiarMicroondasCentro from '../assets/video/webm/LimpiarMicroondasCentro.webm'
import LimpiarMicroondasCentroImage from '../assets/image/jpg/LimpiarMicroondasCentro.jpg'
import LimpiarMicroondasParedes from '../assets/video/webm/LimpiarMicroondasParedes.webm'
import LimpiarMicroondasParedesImage from '../assets/image/jpg/LimpiarMicroondasParedes.jpg'
import LimpiarMicroondasPuerta from '../assets/video/webm/LimpiarMicroondasPuerta.webm'
import LimpiarMicroondasPuertaImage from '../assets/image/jpg/LimpiarMicroondasPuerta.jpg'
import LimpiarMicroondasParteFuera from '../assets/video/webm/LimpiarMicroondasParteFuera.webm'
import LimpiarMicroondasParteFueraImage from '../assets/image/jpg/LimpiarMicroondasParteFuera.jpg'

import LimpiarTripie from '../assets/video/webm/LimpiarTripie.webm'
import LimpiarTripieImage from '../assets/image/jpg/LimpiarTripie.jpg'

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
            <input type='checkbox' /> <span>1</span> Preparar agua clorada <strong>(Con agua de garrafón y 10% de cloro, ejemplo: 450ml de agua y 50 ml de cloro)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>2</span> Colocar toalla para el secado de manos <strong>(Doblada a la mitad por lo largo)</strong>
            <Video src={ColocarToalla} poster={ColocarToallaImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>3</span> Lavado de manos clínico en 3 tiempos empezando por mano no dominante:
            <ul>
              <li>
                <input type='checkbox' /> <span>3.1</span> Mojar las manos y aplicar jabón
                <Video src={LavarManosJabon} poster={LavarManosJabonImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>3.2</span> Frotar palmas 10 veces
                <Video src={LavarManosPalmas} poster={LavarManosPalmasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>3.3</span> Frotar dorsos 10 veces
                <Video src={LavarManosDorso} poster={LavarManosDorsoImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>3.4</span> Enganchar manos y frotar nudillos 10 veces
                <Video src={LavarManosNudillos} poster={LavarManosNudillosImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>3.5</span> Frotar pulgares 10 veces
                <Video src={LavarManosPulgares} poster={LavarManosPulgaresImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>3.6</span> Frotar las uñas 10 veces
                <Video src={LavarManosUnas} poster={LavarManosUnasImage} />
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
                <input type='checkbox' /> <span>4.1</span> Tomamos la toalla y abrazamos nuestras palmas
                <Video src={SecadoManoTomarToalla} poster={SecadoManoTomarToallaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.2</span> Secamos los dedos de la mano
                <Video src={SecadoManoDedos} poster={SecadoManoDedosImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.3</span> Con ligeros toques secamos el dorso de la mano
                <Video src={SecadoManoDorso} poster={SecadoManoDorsoImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.4</span> Así como está doblada la toalla la giramos, ahora secaremos con la parte de abajo
                <Video src={SecadoManoGiroToalla} poster={SecadoManoGiroToallaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.5</span> Repetimos abrazo de palmas y secado uno a uno de los dedos
                <Video src={SecadoManoAbrazoPalmas} poster={SecadoManoAbrazoPalmasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.6</span> Con ligeros toques secamos el dorso de la mano
                <Video src={SecadoManoDorsoContrario} poster={SecadoManoDorsoContrarioImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.7</span> Doblamos la toalla por el lado seco y la dejamos acomodada para el siguiente lavado de manos
                <Video src={SecadoManoDobladoToalla} poster={SecadoManoDobladoToallaImage} />
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>5</span>  Limpiar mesa de trabajo (Con agua clorada al 10% o Exsept):
            <ul>
              <li>
                <input type='checkbox' /> <span>5.1</span> Colocar chorrito de agua clorada en las esquinas de la mesa y en el centro
                <Video src={LimpiarMesaCincoPuntos} poster={LimpiarMesaCincoPuntosImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>5.2</span> Impregnar compresa con los chorritos de cloro puestos en la mesa y limpiar de frente hacia atrás (Hacer presión con la compresa para que la mesa quede bien seca)
                <Video src={LimpiarMesaCompresa} poster={LimpiarMesaCompresaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>5.3</span> Doblar compresa y limpiar los lados de la mesa (Cuidar que nuestra ropa no toque la mesa)
                <Video src={LimpiarMesaCompresaLaterales} poster={LimpiarMesaCompresaLateralesImage} />
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>6</span> Usar la compresa e ir doblándose  por sus diferentes lados limpios colocando agua clorada al 10% para limpiar lo siguiente, e ir colocándolos en la mesa de trabajo:
            <ul>
              <li>
                <input type='checkbox' /> <span>6.1</span> Exsept con tapa sobre la compresa y poner agua clorada al 10%
                <Video src={LimpiarArticuloExsept} poster={LimpiarArticuloExseptImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>6.2</span> Pinzas sobre la compresa y poner agua clorada al 10%, las pinzas deben estar abiertas
                <Video src={LimpiarArticuloPinzas} poster={LimpiarArticuloPinzasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>6.3</span> Tijeras sobre la compresa y poner agua clorada al 10%, las tijeras deben estar abiertas
                <Video src={LimpiarArticuloTijeras} poster={LimpiarArticuloTijerasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>6.4</span> Pomada Mupirocina sobre la compresa y poner agua clorada al 10%
                <Video src={LimpiarArticuloMupirocina} poster={LimpiarArticuloMupirocinaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>6.5</span> Cinta micropore sobre la compresa y <strong>frotar con la compresa ya humeda</strong>
                <Video src={LimpiarArticuloCinta} poster={LimpiarArticuloCintaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>6.6</span> Limpiar horno de microondas:
                <ul>
                  <li>
                    <input type='checkbox' /> <span>6.6.1</span> Centro primero
                    <Video src={LimpiarMicroondasCentro} poster={LimpiarMicroondasCentroImage} />
                  </li>
                  <li>
                    <input type='checkbox' /> <span>6.6.2</span> Paredes
                    <Video src={LimpiarMicroondasParedes} poster={LimpiarMicroondasParedesImage} />
                  </li>
                  <li>
                    <input type='checkbox' /> <span>6.6.3</span> Puerta
                    <Video src={LimpiarMicroondasPuerta} poster={LimpiarMicroondasPuertaImage} />
                  </li>
                  <li>
                    <input type='checkbox' /> <span>6.6.4</span> Parte de afuera
                    <Video src={LimpiarMicroondasParteFuera} poster={LimpiarMicroondasParteFueraImage} />
                  </li>
                </ul>
              </li>
              <li>
                <input type='checkbox' /> <span>6.7</span> Limpiar tripié
                <Video src={LimpiarTripie} poster={LimpiarTripieImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>6.8</span> Limpiar báscula
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>7</span> Usar otra compresa e ir doblándose  por sus diferentes lados limpios colocando agua clorada al 10% en 5 puntos para limpiar lo siguiente:
            <ul>
              <li>
                <input type='checkbox' /> <span>7.1</span> Limpiar las cajas de material
              </li>
              <li>
                <input type='checkbox' /> <span>7.2</span> Limpiar las mesas
              </li>
              <li>
                <input type='checkbox' /> <span>7.3</span> Limpiar el lavabo o dispensador de agua
              </li>
              <li>
                <input type='checkbox' /> <span>7.4</span> Limpiar la cama
              </li>
              <li>
                <input type='checkbox' /> <span>7.5</span> Limpiar las sillas
              </li>
              <li>
                <input type='checkbox' /> <span>7.6</span> Limpiar la ventana
              </li>
              <li>
                <input type='checkbox' /> <span>7.7</span> Limpiar demás cosas en donde se pueda acumular el polvo
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
                <input type='checkbox' /> <span>8.1</span> Mojar las manos y aplicar jabón
                <Video src={LavarManosJabon} poster={LavarManosJabonImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>8.2</span> Frotar palmas 10 veces
                <Video src={LavarManosPalmas} poster={LavarManosPalmasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>8.3</span> Frotar dorsos 10 veces
                <Video src={LavarManosDorso} poster={LavarManosDorsoImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>8.4</span> Enganchar manos y frotar nudillos 10 veces
                <Video src={LavarManosNudillos} poster={LavarManosNudillosImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>8.5</span> Frotar pulgares 10 veces
                <Video src={LavarManosPulgares} poster={LavarManosPulgaresImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>8.6</span> Frotar las uñas 10 veces
                <Video src={LavarManosUnas} poster={LavarManosUnasImage} />
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
                <input type='checkbox' /> <span>9.1</span> Tomamos la toalla y abrazamos nuestras palmas
                <Video src={SecadoManoTomarToalla} poster={SecadoManoTomarToallaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>9.2</span> Secamos los dedos de la mano
                <Video src={SecadoManoDedos} poster={SecadoManoDedosImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>9.3</span> Con ligeros toques secamos el dorso de la mano
                <Video src={SecadoManoDorso} poster={SecadoManoDorsoImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>9.4</span> Así como está doblada la toalla la giramos, ahora secaremos con la parte de abajo
                <Video src={SecadoManoGiroToalla} poster={SecadoManoGiroToallaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>9.5</span> Repetimos abrazo de palmas y secado uno a uno de los dedos
                <Video src={SecadoManoAbrazoPalmas} poster={SecadoManoAbrazoPalmasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>9.6</span> Con ligeros toques secamos el dorso de la mano
                <Video src={SecadoManoDorsoContrario} poster={SecadoManoDorsoContrarioImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>9.7</span> Depositamos la toalla en el cesto de toallas sucias
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>10</span> Regresar los artículos limpios de la mesa de trabajo a la caja de materiales
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>11</span> Colocar en la mesa de trabajo un metro de manta
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>12</span> Usar otra compresa e ir doblándose  por sus diferentes lados limpios colocando agua clorada al 10% en 5 puntos para limpiar 5 bolsas de diálisis <strong>(Esto según número de recambios al día indicados por el médico más 1 y se debe definir una compresa exclusiva solo para el limpiado de bolsas)</strong>:
            <ul>
              <li>
                <input type='checkbox' /> <span>12.1</span> Sacudir la bolsa para despegarla
              </li>
              <li>
                <input type='checkbox' /> <span>12.2</span> Colocar la bolsa en la mesa con la apertura hacia enfrente y líneas de egreso e ingreso hacia abajo <strong>(Mangueritas)</strong>
              </li>
              <li>
                <input type='checkbox' /> <span>12.3</span> Tomar una compresa y colocar en 5 puntos el agua clorada al 10%
              </li>
              <li>
                Limpiamos la bolsa:
                <ul>
                  <li>
                    <input type='checkbox' /> <span>12.4.1</span> Primero abajo de izquierda a derecha
                  </li>
                  <li>
                    <input type='checkbox' /> <span>12.4.2</span> Luego de abajo hacia arriba con fuerza
                  </li>
                  <li>
                    <input type='checkbox' /> <span>12.4.3</span> Limpiamos los dedos de ambas manos antes de girar la bolsa
                  </li>
                  <li>
                    <input type='checkbox' /> <span>12.4.4</span> Se da la vuelta a la compresa y a la bolsa, colocándola en el otro lado de la mesa
                  </li>
                  <li>
                    <input type='checkbox' /> <span>12.4.5</span> Primero abajo de izquierda a derecha
                  </li>
                  <li>
                    <input type='checkbox' /> <span>12.4.6</span> Luego de abajo hacia arriba con fuerza
                  </li>
                  <li>
                    <input type='checkbox' /> <span>12.4.7</span> Limpiamos los dedos de ambas manos antes de girar la bolsa
                  </li>
                </ul>
              </li>
              <li>
                <input type='checkbox' /> <span>12.5</span> Limpiamos los dedos de ambas manos antes de colocarla en la caja
              </li>
              <li>
                <input type='checkbox' /> <span>12.6</span> Colocar la bolsa en la caja grande <strong>(Lavar las cajas cada 8 días con agua y con jabón)</strong>
              </li>
              <li>
                <input type='checkbox' /> <span>12.7</span> Quitamos la manta, la doblamos y guardamos para la siguiente limpieza
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>13</span> Trapear <strong>(Recordar que el cuarto de diálisis no se barre)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>14</span> Sacar botes con basura y lavarlos
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>15</span> Desechar bolsa al drenaje
          </li>
        </ul>
      </Card>
    </Layout>
  )
}
