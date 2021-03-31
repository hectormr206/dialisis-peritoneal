import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'

export const WaterRecycling = () => {
  const description = 'Proceso para realizar la diálisis peritoneal.'
  return (
    <Layout title='Diálisis peritoneal' description={description}>
      <Card>
        {description}
      </Card>
      <Card>
        <strong>Nunca hacer la diálisis si presentas agrietaduras, cortadas o lesiones en las manos, ya que podemos infectar a nuestro paciente.</strong>
      </Card>
      <Card>
        <strong>!Si la presión está baja no sacar más de 200 ml, si la presión está normal sacar más líquido y compensar en lo que toma!</strong>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>1</span> Colocar cubrebocas al paciente y familiares
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>2</span> <strong>Pesar al paciente antes de la primera diálisis del día</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>3</span> Preparar jeringa de 20 ml con 10 ml de cloro
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>4</span> Colocar toalla para el secado de manos
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>5</span> Acomodar la báscula
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>6</span> Lavado de manos clínico en 3 tiempos empezando por mano no dominante:
            <ul>
              <li>
                <input type='checkbox' /> <span>6.1</span> Mojar las manos y aplicar jabón
              </li>
              <li>
                <input type='checkbox' /> <span>6.2</span> Frotar palmas 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>6.3</span> Frotar dorsos 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>6.4</span> Enganchar manos y frotar nudillos 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>6.5</span> Frotar pulgares 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>6.6</span> Frotar las uñas 10 veces
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>7</span> Secado de manos:
            <ul>
              <li>
                <input type='checkbox' /> <span>7.1</span> Tomamos la toalla y abrazamos nuestras palmas
              </li>
              <li>
                <input type='checkbox' /> <span>7.2</span> Secamos los dedos de la mano
              </li>
              <li>
                <input type='checkbox' /> <span>7.3</span> Con ligeros toques secamos el dorso de la mano
              </li>
              <li>
                <input type='checkbox' /> <span>7.4</span> Así como está doblada la toalla la giramos, ahora secaremos con la parte de abajo
              </li>
              <li>
                <input type='checkbox' /> <span>7.5</span> Repetimos abrazo de palmas y secado uno a uno de los dedos
              </li>
              <li>
                <input type='checkbox' /> <span>7.6</span> Con ligeros toques secamos el dorso de la mano
              </li>
              <li>
                <input type='checkbox' /> <span>7.7</span> Doblamos la toalla por el lado seco y la dejamos acomodada para el siguiente lavado de manos
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>8</span> Sacar el catéter del paciente y cubrirlo con la compresa limpia <strong>(Marcar una compresa para usarla exclusivamente para el catéter)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>9</span> Calentar bolsa (36 o 37 grados) con las líneas de transferencia hacia abajo <strong>(2.5 min aproximadamente dependiendo de la potencia del horno y del clima)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>10</span> Limpiar mesa de trabajo (Con agua clorada al 10% o Except):
            <ul>
              <li>
                <input type='checkbox' /> <span>10.1</span> Colocar chorrito de agua clorada en las esquinas de la mesa y en el centro
              </li>
              <li>
                <input type='checkbox' /> <span>10.2</span> Impregnar compresa con los chorritos de cloro puestos en la mesa y limpiar de frente hacia atrás (Hacer presión con la compresa para que la mesa quede bien seca)
              </li>
              <li>
                <input type='checkbox' /> <span>10.3</span> Doblar compresa y limpiar los lados de la mesa (Cuidar que nuestra ropa no toque la mesa)
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>11</span>Usar la misma compresa e ir doblándose  por sus diferentes lados limpios para limpiar lo siguiente, e ir colocándolos en la mesa de trabajo:
            <ul>
              <li>
                <input type='checkbox' /> <span>11.1</span> Pinzas abiertas sobre la compresa y poner agua clorada al 10%
              </li>
              <li>
                <input type='checkbox' /> <span>11.2</span> Except sin tapa sobre la compresa y poner agua clorada al 10%
              </li>
              <li>
                <input type='checkbox' /> <span>11.3</span> Gasa sin tocar
              </li>
              <li>
                <span>11.4</span> Lo siguiente solo se limpia si se llegara a inyectar algún medicamento a la bolsa o heparina (Que se inyecta cuando hay fibrina):
                <ul>
                  <li>
                    <input type='checkbox' /> <span>11.4.1</span> Heparina o medicamento indicado (Poniendo agua clorada en el tapón y comenzar a limpiar hacia abajo, <strong>punta de Heparina hacia nosotros</strong>)
                  </li>
                  <li>
                    <input type='checkbox' /> <span>11.4.2</span> Jeringa sacarla sin tocarla y colocarla en la mesa <strong>(Se abre jalando las puntas del empaque)</strong>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>12</span> Sacar la bolsa del horno y colocarla en la mesa de trabajo
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>13</span> Abrir la bolsa colocando el brazo sobre una mitad de la bolsa y con la otra mano tomar la cejita abierta estando hacia el frente y rasgar hacia ti
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>14</span> Destapar catéter (Recordar que está tapado con compresa)
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>15</span> Lavado de manos quirúrgico en 3 tiempos empezando por mano no dominante <strong>(Recordar que el cepillo se utiliza máximo por 5 días y el proceso de uso y limpieza se explica al final)</strong>:
            <ul>
              <li>
                <input type='checkbox' /> <span>15.1</span> Mojar mi cepillo
              </li>
              <li>
                <input type='checkbox' /> <span>15.2</span> Mojar la mano hasta el codo y aplicar jabón en cepillo
              </li>
              <li>
                <input type='checkbox' /> <span>15.3</span> Cepillamos uñas en forma circular por 10 veces
              </li>
              <li>
                <input type='checkbox' /> <span>15.4</span> Cepillamos entre dedos de mano empezando por pulgar de atrás hacia delante por 3 veces
              </li>
              <li>
                <input type='checkbox' /> <span>15.5</span> Imaginariamente dividimos la palma de la mano en dos y cepillamos de adelante hacia atrás 10 veces arriba y 10 veces abajo
              </li>
              <li>
                <input type='checkbox' /> <span>15.6</span> Imaginariamente dividimos el dorso de la mano en dos y cepillamos de adelante hacia atrás 10 veces arriba y 10 veces abajo
              </li>
              <li>
                <input type='checkbox' /> <span>15.7</span> Cepillamos brazo desde el huesito hasta el codo, de arriba hacia abajo formando líneas hasta enjabonar todo el brazo
              </li>
              <li>
                <input type='checkbox' /> <span>15.8</span> Pasamos el cepillo por el agua sin presionar e inmedíatamente lo pasamos a la mano contraria
              </li>
              <li>
                <input type='checkbox' /> <span>15.9</span> Enjuagamos mano empezando por los dedos hasta llegar al codo <strong>(Siempre de forma ascendente)</strong>
              </li>
              <li>
                <input type='checkbox' /> <span>15.10</span> Regresamos al paso 15.2 con la mano contraria
              </li>
              <li>
                <input type='checkbox' /> <span>15.11</span> En el último recambio del día depositamos el cepillo en agua clorada durante 15 minutos tal como se explica hasta el último
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>16</span> Secado de manos:
            <ul>
              <li>
                <input type='checkbox' /> <span>16.1</span> Tomamos la toalla y abrazamos nuestras palmas
              </li>
              <li>
                <input type='checkbox' /> <span>16.2</span> Secamos los dedos de la mano
              </li>
              <li>
                <input type='checkbox' /> <span>16.3</span> Con ligeros toques secamos el dorso de la mano y el brazo hasta llegar al codo
              </li>
              <li>
                <input type='checkbox' /> <span>16.4</span> Así como está doblada la toalla la giramos, ahora secaremos con la parte de abajo
              </li>
              <li>
                <input type='checkbox' /> <span>16.5</span> Repetimos abrazo de palmas y secado uno a uno de los dedos
              </li>
              <li>
                <input type='checkbox' /> <span>16.6</span> Con ligeros toques secamos el dorso de la mano y el brazo hasta llegar al codo
              </li>
              <li>
                <input type='checkbox' /> <span>16.7</span> Depositamos la toalla en el cesto de toallas sucias
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>17</span> Poner <strong>medio</strong> push de Except en nuestra mano y frotar ligeramente nuestras palmas, entre dedos y uñas
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>18</span> Poner <strong>2</strong> push de Except en la línea de transferencia (Donde es la desconexión entre área verde y azul)
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>19</span> Colocar la gasa
          </li>
        </ul>
      </Card>
      <Card>
        <strong> ¡Si no acomodaste tus materiales, puedes acomodarlos en esté momento para dejar el espacio para la bolsa en el área limpia de la mesa de trabajo!</strong>
      </Card>
      <Card>
        <ul>
          <li>
            <span>20</span> Sacar la bolsa con agua díalizante, <strong>cuidando de no tocar la parte exterior</strong>:
            <ul>
              <li>
                <input type='checkbox' /> <span>20.1</span> Se acomoda sobre el lado limpio de la mesa de trabajo, con el lado de inyección de medicamento hacia nosotros
              </li>
              <li>
                <input type='checkbox' /> <span>20.2</span> Jalamos sitio de inyección y sitio de salida de la bolsa de solución
              </li>
              <li>
                <input type='checkbox' /> <span>20.3</span> Quitamos los sellos
              </li>
              <li>
                <input type='checkbox' /> <span>20.4</span> Despegamos el conector "Y", una parte pequeña de las líneas (Mangueras) y lo colocamos debajo de la bolsa
              </li>
              <li>
                <input type='checkbox' /> <span>20.5</span> Empezamos a despegar las líneas de ingreso y egreso (Mangueras)
              </li>
              <li>
                <input type='checkbox' /> <span>20.6</span> Tomamos la bolsa de drenado y la enrollamos colocándola debajo de la bolsa
              </li>
              <li>
                <input type='checkbox' /> <span>20.7</span> Se pinza la línea de ingreso cerca de la "Y" (Manguera blanca)
              </li>
              <li>
                <input type='checkbox' /> <span>20.8</span> Si fuera necesario, se inyecta el medicamento en el sitio de inyección
              </li>
              <li>
                <span>20.9</span> Si es medicamento en polvo:
                <ul>
                  <li>
                    <input type='checkbox' /> <span>20.9.1</span> Utilizar 5ml de la solución dializante y inyectarlos en frasco pequeño o 10 ml en frasco grande (Para ambos casos usamos las jeringas de 10 ml)
                  </li>
                  <li>
                    <input type='checkbox' /> <span>20.9.2</span> Con mucho cuidado de no perforar la bolsa de solución se saca el líquido de la bolsa de diálisis para prepararlo
                  </li>
                  <li>
                    <input type='checkbox' /> <span>20.9.3</span> Sin sacar la jeringa del frasco, una vez que se le haya introducido el líquido, se agita de un lado hacia otro y se extrae el medicamento, posteriormente se inyecta a la bolsa de diálisis
                  </li>
                  <li>
                    <input type='checkbox' /> <span>20.9.4</span> Si la concentración de la heparina es de 5000 unidades, solo se inyectaran 40 unidades a la bolsa
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>21</span> Tomamos la línea de la bolsa colocándola entre el dedo índice y medio en el lugar indicado para sujetar correctamente
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>22</span> Con la gasa que colocamos para cubrir, la deslizamos limpiando en forma circular hasta sujetar solo el conector azul
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>23</span> Tomamos con nuestra mano el conector verde de la línea y lo ponemos entre el pulgar y el dedo índice
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>24</span> Seguimos limpiando con la gasa la demás parte de la línea
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>25</span> Aflojamos tapón de la bolsa de diálisis
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>26</span> Aflojamos tapón del catéter del paciente
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>27</span> Quitamos tapón de la bolsa y ponemos <strong>dos push</strong> de Except
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>28</span> Quitamos tapón del catéter y ponemos <strong>dos push</strong> de Except
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>29</span> Conectamos
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>30</span> Colgamos la bolsa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>31</span> Despegamos la bolsa de drenado y bajamos la bolsa a la charola. La bolsa de drenado debe tener una altura menor a la del paciente
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>32</span> Abrimos línea <strong>(Las dos flechitas rojas quedan separadas)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>33</span> Cubrimos la línea con la compresa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>34</span> Anotamos hora de apertura de línea en el cuaderno
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>35</span> El líquido debe empezar a salir <strong>(Si no sale cambiamos la postura del paciente, el líquido debe tardar en salir de 15 a 25 minutos, si tarda más algo puede estar mal)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>36</span> Cerramos línea de transferencia <strong>(Las dos marquitas rojas quedan juntas)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>38</span> Cubrimos la línea con la compresa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>39</span> Anotamos hora de cierre de línea en el cuaderno
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>40</span> Sostener la "Y" y rompemos el segmento de ruptura de la línea de ingreso <strong>(Manguera blanca)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>41</span> Quitamos la pinza, esperamos 1 segundos y pinzamos la linea de egreso <strong>(Manguera verde)</strong> hasta que salgan todas las burbujas de aire de la línea de ingreso
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>42</span> Abrimos línea para que entre el líquido limpio <strong>(Debe tardar entre 8 y 10 minutos aproximadamente)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>43</span> Cubrimos la línea con la compresa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>44</span> Anotamos hora de apertura de línea en el cuaderno
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>45</span> Cerramos línea de transferencia <strong>(Las dos marquitas rojas quedan juntas)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>46</span> Cubrimos la línea con la compresa
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>47</span> Anotamos hora de cierre de línea en el cuaderno
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>48</span> Cerramos obturador inviolable
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>49</span> Bajamos la bolsa del tripié
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>50</span> Rompemos el cople de ruptura <strong>y colocamos la jeringa con el cloro en la entrada que quedó después de romper el cople de ruptura, sin inyectarla aun</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>51</span> Despinzamos la línea de egreso <strong>(Manguera verde)</strong> y pinzamos la línea de ingreso <strong>(Manguera blanca)</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>52</span> Inyectamos los 10 ml de cloro en la bolsa de diálisis con el agua sucia y pinzamos la línea de egreso en la parte baja
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>53</span> Hacemos un nudo en ambas líneas y despinzamos la línea de egreso
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>54</span> <strong>Se revisa la bolsa de egreso y anotamos en el cuaderno</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>55</span> Tiramos bolsa. <strong>Se deja 15 minutos, posteriormente se desecha en la cañería</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>56</span> Se guarda el catéter en el fajero
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>57</span> Doblamos la compresa y la guardamos. Recordar que siempre se utiliza la misma compresa en todo el día. <strong>En la ultima diálisis deposítela en el cesto de toallas sucias.</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>58</span> Con una de las compresas impregnada de cloro limpiamos la báscula, tina de plástico <strong>(La que tenía la bolsa de agua sucia)</strong> y la ponemos en su lugar
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>59</span>Si es el último cambio de bolsa colocar el cepillo en la jabonera con agua clorada al 10% por 15 minutos, después enjuago bien mi cepillo y con una compresa limpia exprimimos suavemente tratando de no romperlo, exprimimos con otra compresa limpia para secar lo más que se pueda. La dejamos secar al sol y la volvemos a guardar. La jabonera se lava, se seca y se deja en su lugar. <strong>Recordar que el cepillo se utiliza máximo por 5 días</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <input type='checkbox' /> <span>60</span> Llevamos la bolsa de egreso al drenaje para desechar su contenido con la ayuda de unas tijeras
          </li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>
            <span>¡Si se utiliza el mismo cepillo por más días puede ser una fuente de contaminación para el paciente!</span>
          </li>
        </ul>
      </Card>
    </Layout>
  )
}
