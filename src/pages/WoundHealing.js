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

import DesprenderGasasHerida from '../assets/video/webm/DesprenderGasasHerida.webm'
import DesprenderGasasHeridaImage from '../assets/image/jpg/DesprenderGasasHerida.jpg'

import LimpiarMesaCincoPuntos from '../assets/video/webm/LimpiarMesaCincoPuntos.webm'
import LimpiarMesaCincoPuntosImage from '../assets/image/jpg/LimpiarMesaCincoPuntos.jpg'
import LimpiarMesaCompresa from '../assets/video/webm/LimpiarMesaCompresa.webm'
import LimpiarMesaCompresaImage from '../assets/image/jpg/LimpiarMesaCompresa.jpg'
import LimpiarMesaCompresaLaterales from '../assets/video/webm/LimpiarMesaCompresaLaterales.webm'
import LimpiarMesaCompresaLateralesImage from '../assets/image/jpg/LimpiarMesaCompresaLaterales.jpg'

import LimpiarArticuloExsept from '../assets/video/webm/LimpiarArticuloExsept.webm'
import LimpiarArticuloExseptImage from '../assets/image/jpg/LimpiarArticuloExsept.jpg'
import LimpiarArticuloTijeras from '../assets/video/webm/LimpiarArticuloTijeras.webm'
import LimpiarArticuloTijerasImage from '../assets/image/jpg/LimpiarArticuloTijeras.jpg'
import LimpiarArticuloMupirocina from '../assets/video/webm/LimpiarArticuloMupirocina.webm'
import LimpiarArticuloMupirocinaImage from '../assets/image/jpg/LimpiarArticuloMupirocina.jpg'
import LimpiarArticuloGuante from '../assets/video/webm/LimpiarArticuloGuante.webm'
import LimpiarArticuloGuanteImage from '../assets/image/jpg/LimpiarArticuloGuante.jpg'
import LimpiarArticuloCinta from '../assets/video/webm/LimpiarArticuloCinta.webm'
import LimpiarArticuloCintaImage from '../assets/image/jpg/LimpiarArticuloCinta.jpg'
import LimpiarArticuloJabonLiquido from '../assets/video/webm/LimpiarArticuloJabonLiquido.webm'
import LimpiarArticuloJabonLiquidoImage from '../assets/image/jpg/LimpiarArticuloJabonLiquido.jpg'
import LimpiarArticuloAguaEsteril from '../assets/video/webm/LimpiarArticuloAguaEsteril.webm'
import LimpiarArticuloAguaEsterilImage from '../assets/image/jpg/LimpiarArticuloAguaEsteril.jpg'

import CortarCinta from '../assets/video/webm/CortarCinta.webm'
import CortarCintaImage from '../assets/image/jpg/CortarCinta.jpg'

import AbrirGasa from '../assets/video/webm/AbrirGasa.webm'
import AbrirGasaImage from '../assets/image/jpg/AbrirGasa.jpg'

import EnjuagarGuante from '../assets/video/webm/EnjuagarGuante.webm'
import EnjuagarGuanteImage from '../assets/image/jpg/EnjuagarGuante.jpg'
import ImpregnarGasaAguaEsterilJabonLiquido from '../assets/video/webm/ImpregnarGasaAguaEsterilJabonLiquido.webm'
import ImpregnarGasaAguaEsterilJabonLiquidoImage from '../assets/image/jpg/ImpregnarGasaAguaEsterilJabonLiquido.jpg'
import GasaHeridaPresionamosLevemente from '../assets/video/webm/GasaHeridaPresionamosLevemente.webm'
import GasaHeridaPresionamosLevementeImage from '../assets/image/jpg/GasaHeridaPresionamosLevemente.jpg'
import CirculoArrastramosEspiral from '../assets/video/webm/CirculoArrastramosEspiral.webm'
import CirculoArrastramosEspiralImage from '../assets/image/jpg/CirculoArrastramosEspiral.jpg'
import OtraGasaQuitarJabon from '../assets/video/webm/OtraGasaQuitarJabon.webm'
import OtraGasaQuitarJabonImage from '../assets/image/jpg/OtraGasaQuitarJabon.jpg'
import OtraGasaSecarBien from '../assets/video/webm/OtraGasaSecarBien.webm'
import OtraGasaSecarBienImage from '../assets/image/jpg/OtraGasaSecarBien.jpg'
import PushExseptHerida from '../assets/video/webm/PushExseptHerida.webm'
import PushExseptHeridaImage from '../assets/image/jpg/PushExseptHerida.jpg'
import ColocarMupirocina from '../assets/video/webm/ColocarMupirocina.webm'
import ColocarMupirocinaImage from '../assets/image/jpg/ColocarMupirocina.jpg'
import ColocarGasaHerida from '../assets/video/webm/ColocarGasaHerida.webm'
import ColocarGasaHeridaImage from '../assets/image/jpg/ColocarGasaHerida.jpg'
import ColocarGasaTuboHerida from '../assets/video/webm/ColocarGasaTuboHerida.webm'
import ColocarGasaTuboHeridaImage from '../assets/image/jpg/ColocarGasaTuboHerida.jpg'

export const WoundHealing = () => {
  const description = 'Proceso para realizar la curación de la herida del catéter y la herida de cirugía.'
  return (
    <Layout title='Curación de heridas' description={description}>
      <Card>
        {description}
      </Card>
      <Card>
        Al bañar al paciente las gasas y el fajero no se quitan. Esto para no dejar descubierta la herida e infectarse
      </Card>
      <Card>
        <ul>
          <li>
            <span>1</span> Antes de iniciar el proceso se necesita lo siguiente:
            <ul>
              <li>
                <input type='checkbox' /> <span>1.1</span> Agua estéril o hervida (Se deja hervir 5 minutos o más)
              </li>
              <li>
                <input type='checkbox' /> <span>1.2</span> Jabón líquido neutro
              </li>
              <li>
                <input type='checkbox' /> <span>1.3</span> Fajero limpio
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>2</span> Colocar cubrebocas al paciente y familiares
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>3</span> Colocar toalla para el secado de manos <strong>(Doblada a la mitad por lo largo)</strong>
            <Video src={ColocarToalla} poster={ColocarToallaImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>4</span> Lavado de manos clínico en 3 tiempos empezando por mano no dominante:
            <ul>
              <li>
                <input type='checkbox' /> <span>4.1</span> Mojar las manos y aplicar jabón
                <Video src={LavarManosJabon} poster={LavarManosJabonImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.2</span> Frotar palmas 10 veces
                <Video src={LavarManosPalmas} poster={LavarManosPalmasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.3</span> Frotar dorsos 10 veces
                <Video src={LavarManosDorso} poster={LavarManosDorsoImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.4</span> Enganchar manos y frotar nudillos 10 veces
                <Video src={LavarManosNudillos} poster={LavarManosNudillosImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.5</span> Frotar pulgares 10 veces
                <Video src={LavarManosPulgares} poster={LavarManosPulgaresImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>4.6</span> Frotar las uñas 10 veces
                <Video src={LavarManosUnas} poster={LavarManosUnasImage} />
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>5</span> Secado de manos:
            <ul>
              <li>
                <input type='checkbox' /> <span>5.1</span> Tomamos la toalla y abrazamos nuestras palmas
                <Video src={SecadoManoTomarToalla} poster={SecadoManoTomarToallaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>5.2</span> Secamos los dedos de la mano
                <Video src={SecadoManoDedos} poster={SecadoManoDedosImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>5.3</span> Con ligeros toques secamos el dorso de la mano
                <Video src={SecadoManoDorso} poster={SecadoManoDorsoImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>5.4</span> Así como está doblada la toalla la giramos, ahora secaremos con la parte de abajo
                <Video src={SecadoManoGiroToalla} poster={SecadoManoGiroToallaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>5.5</span> Repetimos abrazo de palmas y secado uno a uno de los dedos
                <Video src={SecadoManoAbrazoPalmas} poster={SecadoManoAbrazoPalmasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>5.6</span> Con ligeros toques secamos el dorso de la mano
                <Video src={SecadoManoDorsoContrario} poster={SecadoManoDorsoContrarioImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>5.7</span> Doblamos la toalla por el lado seco y la dejamos acomodada para el siguiente lavado de manos
                <Video src={SecadoManoDobladoToalla} poster={SecadoManoDobladoToallaImage} />
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>6</span> Sacar línea de catéter y dejarla descansar en una compresa cubriéndola
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>7</span> Retirar fajero
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>8</span> Desprender gasas de las heridas y desecharlas
            <Video src={DesprenderGasasHerida} poster={DesprenderGasasHeridaImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>9</span> Limpiar mesa de trabajo (Con agua clorada al 10% o Exsept):
            <ul>
              <li>
                <input type='checkbox' /> <span>9.1</span> Colocar chorrito de agua clorada en las esquinas de la mesa y en el centro
                <Video src={LimpiarMesaCincoPuntos} poster={LimpiarMesaCincoPuntosImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>9.2</span> Impregnar compresa con los chorritos de cloro puestos en la mesa y limpiar de frente hacia atrás (Hacer presión con la compresa para que la mesa quede bien seca)
                <Video src={LimpiarMesaCompresa} poster={LimpiarMesaCompresaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>9.3</span> Doblar compresa y limpiar los lados de la mesa (Cuidar que nuestra ropa no toque la mesa)
                <Video src={LimpiarMesaCompresaLaterales} poster={LimpiarMesaCompresaLateralesImage} />
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>10</span> Usar la misma compresa e ir doblándose  por sus diferentes lados limpios para limpiar lo siguiente e ir colocándolos en la mesa de trabajo:
            <ul>
              <li>
                <input type='checkbox' /> <span>10.1</span> Exsept sin tapa
                <Video src={LimpiarArticuloExsept} poster={LimpiarArticuloExseptImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>10.2</span> Tijeras
                <Video src={LimpiarArticuloTijeras} poster={LimpiarArticuloTijerasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>10.3</span> Pomada mupirocina (Si es requerida)
                <Video src={LimpiarArticuloMupirocina} poster={LimpiarArticuloMupirocinaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>10.4</span> Guante de latex
                <Video src={LimpiarArticuloGuante} poster={LimpiarArticuloGuanteImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>10.5</span> Cinta micropore (Esta se limpia ligeramente)
                <Video src={LimpiarArticuloCinta} poster={LimpiarArticuloCintaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>10.6</span> Jabón líquido
                <Video src={LimpiarArticuloJabonLiquido} poster={LimpiarArticuloJabonLiquidoImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>10.7</span> Agua estéril
                <Video src={LimpiarArticuloAguaEsteril} poster={LimpiarArticuloAguaEsterilImage} />
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>11</span> Cortar 3 o 4 cintas micropore y pegarlas en la mesa para tomarlas más fácilmente al colocar la gasa limpia en la herida
            <Video src={CortarCinta} poster={CortarCintaImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>12</span> Sacar aproximadamente 7 gasas o más
            <Video src={AbrirGasa} poster={AbrirGasaImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>13</span> Lavado de manos clínico en 3 tiempos empezando por mano no dominante:
            <ul>
              <li>
                <input type='checkbox' /> <span>13.1</span> Mojar las manos y aplicar jabón
                <Video src={LavarManosJabon} poster={LavarManosJabonImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>13.2</span> Frotar palmas 10 veces
                <Video src={LavarManosPalmas} poster={LavarManosPalmasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>13.3</span> Frotar dorsos 10 veces
                <Video src={LavarManosDorso} poster={LavarManosDorsoImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>13.4</span> Enganchar manos y frotar nudillos 10 veces
                <Video src={LavarManosNudillos} poster={LavarManosNudillosImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>13.5</span> Frotar pulgares 10 veces
                <Video src={LavarManosPulgares} poster={LavarManosPulgaresImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>13.6</span> Frotar las uñas 10 veces
                <Video src={LavarManosUnas} poster={LavarManosUnasImage} />
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>14</span> Secado de manos:
            <ul>
              <li>
                <input type='checkbox' /> <span>14.1</span> Tomamos la toalla y abrazamos nuestras palmas
                <Video src={SecadoManoTomarToalla} poster={SecadoManoTomarToallaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>14.2</span> Secamos los dedos de la mano
                <Video src={SecadoManoDedos} poster={SecadoManoDedosImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>14.3</span> Con ligeros toques secamos el dorso de la mano
                <Video src={SecadoManoDorso} poster={SecadoManoDorsoImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>14.4</span> Así como está doblada la toalla la giramos, ahora secaremos con la parte de abajo
                <Video src={SecadoManoGiroToalla} poster={SecadoManoGiroToallaImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>14.5</span> Repetimos abrazo de palmas y secado uno a uno de los dedos
                <Video src={SecadoManoAbrazoPalmas} poster={SecadoManoAbrazoPalmasImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>14.6</span> Con ligeros toques secamos el dorso de la mano
                <Video src={SecadoManoDorsoContrario} poster={SecadoManoDorsoContrarioImage} />
              </li>
              <li>
                <input type='checkbox' /> <span>14.7</span> Depositamos la toalla en el cesto de toallas sucias
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>15</span> Colocar guante en mano dominante y enjuagar con el agua estéril
            <Video src={EnjuagarGuante} poster={EnjuagarGuanteImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>16</span> Impregnar gasa con agua estéril y jabón líquido neutro
            <Video src={ImpregnarGasaAguaEsterilJabonLiquido} poster={ImpregnarGasaAguaEsterilJabonLiquidoImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>17</span> Colocamos gasa en la herida y presionamos levemente
            <Video src={GasaHeridaPresionamosLevemente} poster={GasaHeridaPresionamosLevementeImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>18</span> Hacemos un circulo con la gasa y empezamos a arrastrar la gasa del centro hacia fuera, formando círculos alrededor de la entrada del catéter
            <Video src={CirculoArrastramosEspiral} poster={CirculoArrastramosEspiralImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>19</span> Lo mejor es hacer la limpieza con jabón una vez, tratando de arrastrar toda la suciedad
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>20</span> Desechamos la gasa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>21</span> Revisar que no queden residuos de pegamento en la piel, si es así, retirar cuidadosamente con la gasa y en forma circular tratando de no contaminar la herida
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>22</span> Con otra gasa con agua estéril realizamos el mismo proceso para quitar el jabón
            <Video src={OtraGasaQuitarJabon} poster={OtraGasaQuitarJabonImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>23</span> Desechamos la gasa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>24</span> Repetimos 2 o 3 veces más hasta quitar el jabón
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>25</span> Tomar otras gasas para secar muy bien la entrada completa del catéter y dejar orear un poco
            <Video src={OtraGasaSecarBien} poster={OtraGasaSecarBienImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>26</span> No soplar, hechar aire, o ayudar con algo externo que no sea la gasa para secar el área mojada
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>27</span> Realizar un push de Exsept en herida, levantando un poquito el tubito para que caiga en toda la entrada del catéter y secar muy poco el exceso de líquido con una gasa
            <Video src={PushExseptHerida} poster={PushExseptHeridaImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>28</span> Colocar Mupirocina sólo si es requerida, destapando con una mano la pomada y aplicando en el dedo meñique de la mano que trae el guante. <strong>Colocar directo en la herida.</strong>
            <Video src={ColocarMupirocina} poster={ColocarMupirocinaImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>29</span> Colocar una gasa a lo largo de la entrada del catéter e ir colocando 2 cintas adhesivas en diferentes lugares a la anterior curación, para evitar irritar la piel
            <Video src={ColocarGasaHerida} poster={ColocarGasaHeridaImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>30</span> Colocar otra cinta adhesiva que abrace muy bien el tubo del catéter y pegar las dos extremidades a la piel. Con esto ayudamos a que no se jale por accidente
            <Video src={ColocarGasaTuboHerida} poster={ColocarGasaTuboHeridaImage} />
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>31</span> Colocar fajero limpio
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>32</span> Guardar catéter
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>33</span> Guardar la compresa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>34</span> Devolver todos los materiales a su lugar
          </li>
        </ul>
      </Card>
    </Layout>
  )
}
