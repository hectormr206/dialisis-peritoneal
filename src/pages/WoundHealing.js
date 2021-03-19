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
            <input type='checkbox' /> <span>3</span> Colocar toalla para el secado de manos
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
              </li>
              <li>
                <input type='checkbox' /> <span>4.2</span> Frotar palmas 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>4.3</span> Frotar dorsos 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>4.4</span> Enganchar manos y frotar nudillos 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>4.5</span> Frotar pulgares 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>4.6</span> Frotar las uñas 10 veces
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
              </li>
              <li>
                <input type='checkbox' /> <span>5.2</span> Secamos los dedos de la mano
              </li>
              <li>
                <input type='checkbox' /> <span>5.3</span> Con ligeros toques secamos el dorso de la mano
              </li>
              <li>
                <input type='checkbox' /> <span>5.4</span> Así como está doblada la toalla la giramos, ahora secaremos con la parte de abajo
              </li>
              <li>
                <input type='checkbox' /> <span>5.5</span> Repetimos abrazo de palmas y secado uno a uno de los dedos
              </li>
              <li>
                <input type='checkbox' /> <span>5.6</span> Con ligeros toques secamos el dorso de la mano
              </li>
              <li>
                <input type='checkbox' /> <span>5.7</span> Doblamos la toalla por el lado seco y la dejamos acomodada para el siguiente lavado de manos
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
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>9</span> Limpiamos la mesa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>10</span> Usar la misma compresa e ir doblándose  por sus diferentes lados limpios para limpiar lo siguiente e ir colocándolos en la mesa de trabajo:
            <ul>
              <li>
                <input type='checkbox' /> <span>10.1</span> Except sin tapa
              </li>
              <li>
                <input type='checkbox' /> <span>10.2</span> Guante de latex
              </li>
              <li>
                <input type='checkbox' /> <span>10.3</span> Tijeras
              </li>
              <li>
                <input type='checkbox' /> <span>10.4</span> Cinta micropore (Esta se limpia ligeramente)
              </li>
              <li>
                <input type='checkbox' /> <span>10.5</span> Pomada Mupirocina (Si es requerida)
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>11</span> Sacar aproximadamente 14 gasas si vamos a realizar curación de catéter y operación o menos si sólo es la curación de catéter
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>12</span> Cortar 4 - 6 cintas micropore y pegarlas en la mesa para tomarlas más fácilmente al colocar la gasa limpia en la herida
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
              </li>
              <li>
                <input type='checkbox' /> <span>13.2</span> Frotar palmas 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>13.3</span> Frotar dorsos 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>13.4</span> Enganchar manos y frotar nudillos 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>13.5</span> Frotar pulgares 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>13.6</span> Frotar las uñas 10 veces
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
              </li>
              <li>
                <input type='checkbox' /> <span>14.2</span> Secamos los dedos de la mano
              </li>
              <li>
                <input type='checkbox' /> <span>14.3</span> Con ligeros toques secamos el dorso de la mano
              </li>
              <li>
                <input type='checkbox' /> <span>14.4</span> Así como está doblada la toalla la giramos, ahora secaremos con la parte de abajo
              </li>
              <li>
                <input type='checkbox' /> <span>14.5</span> Repetimos abrazo de palmas y secado uno a uno de los dedos
              </li>
              <li>
                <input type='checkbox' /> <span>14.6</span> Con ligeros toques secamos el dorso de la mano
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
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>16</span> Impregnar gasa con agua estéril y jabón líquido neutro
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>17</span> Colocamos gasa en la herida y presionamos levemente
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>18</span> Hacemos un circulo con la gasa y empezamos a arrastrar la gasa del centro hacia fuera, formando círculos alrededor de la entrada del catéter
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
            <input type='checkbox' /> <span>27</span> Realizar un push de Except en herida, levantando un poquito el tubito para que caiga en toda la entrada del catéter
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>28</span> Colocar una gasa a lo largo de la entrada del catéter e ir colocando 2 cintas adhesivas en diferentes lugares a la anterior curación, para evitar irritar la piel
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>29</span> Colocar otra cinta adhesiva que abrace muy bien el tubo del catéter y pegar las dos extremidades a la piel. Con esto ayudamos a que no se jale por accidente
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>30</span> Colocar fajero limpio
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>31</span> Guardar catéter
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>32</span> Guardar la compresa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>33</span> Devolver todos los materiales a su lugar
          </li>
        </ul>
      </Card>
    </Layout>
  )
}
