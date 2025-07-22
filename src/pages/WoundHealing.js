import React from "react";
import { Layout } from "../components/Layout";
import { ProgressStep } from "../components/ProgressStep";
import { Video } from "../components/Video";

import ColocarToalla from "../assets/video/webm/ColocarToalla.webm";
import ColocarToallaImage from "../assets/image/jpg/ColocarToalla.jpg";

import LavarManosJabon from "../assets/video/webm/LavarManosJabon.webm";
import LavarManosJabonImage from "../assets/image/jpg/LavarManosJabon.jpg";
import LavarManosPalmas from "../assets/video/webm/LavarManosPalmas.webm";
import LavarManosPalmasImage from "../assets/image/jpg/LavarManosPalmas.jpg";
import LavarManosDorso from "../assets/video/webm/LavarManosDorso.webm";
import LavarManosDorsoImage from "../assets/image/jpg/LavarManosDorso.jpg";
import LavarManosNudillos from "../assets/video/webm/LavarManosNudillos.webm";
import LavarManosNudillosImage from "../assets/image/jpg/LavarManosNudillos.jpg";
import LavarManosPulgares from "../assets/video/webm/LavarManosPulgares.webm";
import LavarManosPulgaresImage from "../assets/image/jpg/LavarManosPulgares.jpg";
import LavarManosUnas from "../assets/video/webm/LavarManosUnas.webm";
import LavarManosUnasImage from "../assets/image/jpg/LavarManosUnas.jpg";

import SecadoManoTomarToalla from "../assets/video/webm/SecadoManoTomarToalla.webm";
import SecadoManoTomarToallaImage from "../assets/image/jpg/SecadoManoTomarToalla.jpg";
import SecadoManoDedos from "../assets/video/webm/SecadoManoDedos.webm";
import SecadoManoDedosImage from "../assets/image/jpg/SecadoManoDedos.jpg";
import SecadoManoDorso from "../assets/video/webm/SecadoManoDorso.webm";
import SecadoManoDorsoImage from "../assets/image/jpg/SecadoManoDorso.jpg";
import SecadoManoGiroToalla from "../assets/video/webm/SecadoManoGiroToalla.webm";
import SecadoManoGiroToallaImage from "../assets/image/jpg/SecadoManoGiroToalla.jpg";
import SecadoManoAbrazoPalmas from "../assets/video/webm/SecadoManoAbrazoPalmas.webm";
import SecadoManoAbrazoPalmasImage from "../assets/image/jpg/SecadoManoAbrazoPalmas.jpg";
import SecadoManoDorsoContrario from "../assets/video/webm/SecadoManoDorsoContrario.webm";
import SecadoManoDorsoContrarioImage from "../assets/image/jpg/SecadoManoDorsoContrario.jpg";

import DesprenderGasasHerida from "../assets/video/webm/DesprenderGasasHerida.webm";
import DesprenderGasasHeridaImage from "../assets/image/jpg/DesprenderGasasHerida.jpg";

import LimpiarMesaCincoPuntos from "../assets/video/webm/LimpiarMesaCincoPuntos.webm";
import LimpiarMesaCincoPuntosImage from "../assets/image/jpg/LimpiarMesaCincoPuntos.jpg";
import LimpiarMesaCompresa from "../assets/video/webm/LimpiarMesaCompresa.webm";
import LimpiarMesaCompresaImage from "../assets/image/jpg/LimpiarMesaCompresa.jpg";

import LimpiarArticuloExsept from "../assets/video/webm/LimpiarArticuloExsept.webm";
import LimpiarArticuloExseptImage from "../assets/image/jpg/LimpiarArticuloExsept.jpg";
import LimpiarArticuloTijeras from "../assets/video/webm/LimpiarArticuloTijeras.webm";
import LimpiarArticuloTijerasImage from "../assets/image/jpg/LimpiarArticuloTijeras.jpg";
import LimpiarArticuloMupirocina from "../assets/video/webm/LimpiarArticuloMupirocina.webm";
import LimpiarArticuloMupirocinaImage from "../assets/image/jpg/LimpiarArticuloMupirocina.jpg";
import LimpiarArticuloGuante from "../assets/video/webm/LimpiarArticuloGuante.webm";
import LimpiarArticuloGuanteImage from "../assets/image/jpg/LimpiarArticuloGuante.jpg";
import LimpiarArticuloCinta from "../assets/video/webm/LimpiarArticuloCinta.webm";
import LimpiarArticuloCintaImage from "../assets/image/jpg/LimpiarArticuloCinta.jpg";
import LimpiarArticuloJabonLiquido from "../assets/video/webm/LimpiarArticuloJabonLiquido.webm";
import LimpiarArticuloJabonLiquidoImage from "../assets/image/jpg/LimpiarArticuloJabonLiquido.jpg";
import LimpiarArticuloAguaEsteril from "../assets/video/webm/LimpiarArticuloAguaEsteril.webm";
import LimpiarArticuloAguaEsterilImage from "../assets/image/jpg/LimpiarArticuloAguaEsteril.jpg";

import CortarCinta from "../assets/video/webm/CortarCinta.webm";
import CortarCintaImage from "../assets/image/jpg/CortarCinta.jpg";

import AbrirGasa from "../assets/video/webm/AbrirGasa.webm";
import AbrirGasaImage from "../assets/image/jpg/AbrirGasa.jpg";

import EnjuagarGuante from "../assets/video/webm/EnjuagarGuante.webm";
import EnjuagarGuanteImage from "../assets/image/jpg/EnjuagarGuante.jpg";
import ImpregnarGasaAguaEsterilJabonLiquido from "../assets/video/webm/ImpregnarGasaAguaEsterilJabonLiquido.webm";
import ImpregnarGasaAguaEsterilJabonLiquidoImage from "../assets/image/jpg/ImpregnarGasaAguaEsterilJabonLiquido.jpg";
import GasaHeridaPresionamosLevemente from "../assets/video/webm/GasaHeridaPresionamosLevemente.webm";
import GasaHeridaPresionamosLevementeImage from "../assets/image/jpg/GasaHeridaPresionamosLevemente.jpg";
import CirculoArrastramosEspiral from "../assets/video/webm/CirculoArrastramosEspiral.webm";
import CirculoArrastramosEspiralImage from "../assets/image/jpg/CirculoArrastramosEspiral.jpg";
import OtraGasaQuitarJabon from "../assets/video/webm/OtraGasaQuitarJabon.webm";
import OtraGasaQuitarJabonImage from "../assets/image/jpg/OtraGasaQuitarJabon.jpg";
import OtraGasaSecarBien from "../assets/video/webm/OtraGasaSecarBien.webm";
import OtraGasaSecarBienImage from "../assets/image/jpg/OtraGasaSecarBien.jpg";
import PushExseptHerida from "../assets/video/webm/PushExseptHerida.webm";
import PushExseptHeridaImage from "../assets/image/jpg/PushExseptHerida.jpg";
import ColocarMupirocina from "../assets/video/webm/ColocarMupirocina.webm";
import ColocarMupirocinaImage from "../assets/image/jpg/ColocarMupirocina.jpg";
import ColocarGasaHerida from "../assets/video/webm/ColocarGasaHerida.webm";
import ColocarGasaHeridaImage from "../assets/image/jpg/ColocarGasaHerida.jpg";
import ColocarGasaTuboHerida from "../assets/video/webm/ColocarGasaTuboHerida.webm";
import ColocarGasaTuboHeridaImage from "../assets/image/jpg/ColocarGasaTuboHerida.jpg";

export const WoundHealing = () => {
  const description =
    "Siga estos pasos en orden para realizar la curación de heridas correctamente. Es importante no omitir ningún paso para evitar infecciones.";

  const steps = [
    {
      title: "Preparación de materiales",
      description:
        "Verifique que tenga todos los materiales necesarios antes de comenzar",
      content: (
        <div>
          <h4>🧴 Materiales necesarios:</h4>
          <ul>
            <li>Agua estéril o hervida (5 minutos o más)</li>
            <li>Jabón líquido neutro</li>
            <li>Fajero limpio</li>
          </ul>
          <h4>⚠️ Importante:</h4>
          <p>
            <strong>
              Al bañar al paciente, las gasas y el fajero no se quitan
            </strong>{" "}
            para no dejar descubierta la herida y evitar infecciones.
          </p>
        </div>
      ),
    },
    {
      title: "Colocar cubrebocas",
      description: "Coloque cubrebocas al paciente y familiares presentes",
      content: (
        <div>
          <p>
            <strong>Protección:</strong> Todos los presentes deben usar
            cubrebocas para evitar contaminación.
          </p>
        </div>
      ),
    },
    {
      title: "Colocar toalla para secado",
      description:
        "Prepare la toalla doblada a la mitad por lo largo para el secado de manos",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Doble la toalla a la mitad por lo largo
          </p>
          <Video
            src={ColocarToalla}
            poster={ColocarToallaImage}
            title="Colocar toalla para secado"
          />
        </div>
      ),
    },
    {
      title: "Primer lavado - Aplicar jabón",
      description:
        "Inicie el primer lavado de manos clínico. Moje las manos y aplique jabón",
      content: (
        <div>
          <p>
            <strong>Inicio:</strong> Lavado clínico empezando por mano no
            dominante
          </p>
          <Video
            src={LavarManosJabon}
            poster={LavarManosJabonImage}
            title="Aplicar jabón en las manos"
          />
        </div>
      ),
    },
    {
      title: "Primer lavado - Frotar palmas",
      description: "Frote las palmas de las manos 10 veces",
      content: (
        <div>
          <p>
            <strong>Cuenta:</strong> 10 movimientos circulares completos
          </p>
          <Video
            src={LavarManosPalmas}
            poster={LavarManosPalmasImage}
            title="Frotar palmas"
          />
        </div>
      ),
    },
    {
      title: "Primer lavado - Frotar dorsos",
      description: "Frote el dorso de cada mano 10 veces",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Palma sobre dorso, movimientos
            arriba-abajo
          </p>
          <Video
            src={LavarManosDorso}
            poster={LavarManosDorsoImage}
            title="Frotar dorsos"
          />
        </div>
      ),
    },
    {
      title: "Primer lavado - Frotar nudillos",
      description: "Enganche los dedos y frote los nudillos 10 veces",
      content: (
        <div>
          <p>
            <strong>Posición:</strong> Dedos entrelazados, frotar nudillos
          </p>
          <Video
            src={LavarManosNudillos}
            poster={LavarManosNudillosImage}
            title="Frotar nudillos"
          />
        </div>
      ),
    },
    {
      title: "Primer lavado - Frotar pulgares",
      description: "Frote cada pulgar 10 veces con la palma contraria",
      content: (
        <div>
          <p>
            <strong>Movimiento:</strong> Pulgar rodeado por palma contraria
          </p>
          <Video
            src={LavarManosPulgares}
            poster={LavarManosPulgaresImage}
            title="Frotar pulgares"
          />
        </div>
      ),
    },
    {
      title: "Primer lavado - Frotar uñas",
      description: "Frote las uñas contra las palmas 10 veces cada mano",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Uñas contra palma contraria, movimiento
            circular
          </p>
          <Video
            src={LavarManosUnas}
            poster={LavarManosUnasImage}
            title="Frotar uñas"
          />
        </div>
      ),
    },
    {
      title: "Primer secado - Tomar toalla",
      description: "Tome la toalla y abrace sus palmas para comenzar el secado",
      content: (
        <div>
          <p>
            <strong>Inicio:</strong> Palmas juntas con toalla entre ellas
          </p>
          <Video
            src={SecadoManoTomarToalla}
            poster={SecadoManoTomarToallaImage}
            title="Tomar toalla para secado"
          />
        </div>
      ),
    },
    {
      title: "Primer secado - Secar dedos",
      description: "Seque cada dedo individualmente",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Dedo por dedo, base hasta punta
          </p>
          <Video
            src={SecadoManoDedos}
            poster={SecadoManoDedosImage}
            title="Secar dedos"
          />
        </div>
      ),
    },
    {
      title: "Primer secado - Secar dorso",
      description: "Seque el dorso de la mano con toques ligeros",
      content: (
        <div>
          <p>
            <strong>Movimiento:</strong> Toques suaves, sin frotar
          </p>
          <Video
            src={SecadoManoDorso}
            poster={SecadoManoDorsoImage}
            title="Secar dorso"
          />
        </div>
      ),
    },
    {
      title: "Preparar área de trabajo",
      description:
        "Saque la línea de catéter y déjela descansar cubierta con una compresa",
      content: (
        <div>
          <p>
            <strong>Cuidado:</strong> Mantenga el catéter cubierto y en lugar
            seguro
          </p>
        </div>
      ),
    },
    {
      title: "Retirar fajero",
      description: "Retire cuidadosamente el fajero actual",
      content: (
        <div>
          <p>
            <strong>Cuidado:</strong> Retire sin tocar la herida directamente
          </p>
        </div>
      ),
    },
    {
      title: "Retirar gasas viejas",
      description: "Desprenda las gasas de las heridas y deséchelas",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Retire con cuidado y deseche
            inmediatamente
          </p>
          <Video
            src={DesprenderGasasHerida}
            poster={DesprenderGasasHeridaImage}
            title="Retirar gasas de herida"
          />
        </div>
      ),
    },
    {
      title: "Limpiar mesa de trabajo",
      description:
        "Desinfecte la mesa con agua clorada siguiendo el patrón de 5 puntos",
      content: (
        <div>
          <p>
            <strong>Patrón:</strong> Chorros en esquinas y centro, limpiar
            adelante-atrás
          </p>
          <Video
            src={LimpiarMesaCincoPuntos}
            poster={LimpiarMesaCincoPuntosImage}
            title="Limpiar mesa - 5 puntos"
          />
          <Video
            src={LimpiarMesaCompresa}
            poster={LimpiarMesaCompresaImage}
            title="Limpiar con compresa"
          />
        </div>
      ),
    },
    {
      title: "Limpiar materiales - Exsept",
      description: "Limpie el Exsept (sin tapa) con agua clorada al 10%",
      content: (
        <div>
          <p>
            <strong>Importante:</strong> Limpie sin la tapa
          </p>
          <Video
            src={LimpiarArticuloExsept}
            poster={LimpiarArticuloExseptImage}
            title="Limpiar Exsept"
          />
        </div>
      ),
    },
    {
      title: "Limpiar materiales - Tijeras",
      description: "Limpie las tijeras abiertas con agua clorada",
      content: (
        <div>
          <p>
            <strong>Posición:</strong> Tijeras abiertas para limpieza completa
          </p>
          <Video
            src={LimpiarArticuloTijeras}
            poster={LimpiarArticuloTijerasImage}
            title="Limpiar tijeras"
          />
        </div>
      ),
    },
    {
      title: "Limpiar materiales - Mupirocina",
      description: "Limpie la pomada Mupirocina (si es requerida)",
      content: (
        <div>
          <p>
            <strong>Nota:</strong> Solo si está prescrita por el médico
          </p>
          <Video
            src={LimpiarArticuloMupirocina}
            poster={LimpiarArticuloMupirocinaImage}
            title="Limpiar Mupirocina"
          />
        </div>
      ),
    },
    {
      title: "Limpiar materiales - Guante",
      description: "Limpie el guante de látex",
      content: (
        <div>
          <p>
            <strong>Preparación:</strong> Guante listo para uso estéril
          </p>
          <Video
            src={LimpiarArticuloGuante}
            poster={LimpiarArticuloGuanteImage}
            title="Limpiar guante"
          />
        </div>
      ),
    },
    {
      title: "Limpiar materiales - Cinta",
      description:
        "Limpie ligeramente la cinta micropore frotando con compresa húmeda",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Limpieza ligera con compresa húmeda
          </p>
          <Video
            src={LimpiarArticuloCinta}
            poster={LimpiarArticuloCintaImage}
            title="Limpiar cinta micropore"
          />
        </div>
      ),
    },
    {
      title: "Limpiar materiales - Jabón",
      description: "Limpie el jabón líquido",
      content: (
        <div>
          <p>
            <strong>Higiene:</strong> Jabón neutro limpio
          </p>
          <Video
            src={LimpiarArticuloJabonLiquido}
            poster={LimpiarArticuloJabonLiquidoImage}
            title="Limpiar jabón líquido"
          />
        </div>
      ),
    },
    {
      title: "Limpiar materiales - Agua estéril",
      description: "Limpie el recipiente de agua estéril",
      content: (
        <div>
          <p>
            <strong>Esterilidad:</strong> Mantenga el agua completamente estéril
          </p>
          <Video
            src={LimpiarArticuloAguaEsteril}
            poster={LimpiarArticuloAguaEsterilImage}
            title="Limpiar agua estéril"
          />
        </div>
      ),
    },
    {
      title: "Preparar cintas adhesivas",
      description:
        "Corte 3-4 cintas micropore y péguelas en la mesa para fácil acceso",
      content: (
        <div>
          <p>
            <strong>Preparación:</strong> Cintas listas para colocar gasas
          </p>
          <Video
            src={CortarCinta}
            poster={CortarCintaImage}
            title="Cortar cintas micropore"
          />
        </div>
      ),
    },
    {
      title: "Preparar gasas",
      description: "Saque aproximadamente 7 gasas o más para el procedimiento",
      content: (
        <div>
          <p>
            <strong>Cantidad:</strong> Suficientes gasas para todo el proceso
          </p>
          <Video
            src={AbrirGasa}
            poster={AbrirGasaImage}
            title="Preparar gasas estériles"
          />
        </div>
      ),
    },
    {
      title: "Segundo lavado - Aplicar jabón",
      description:
        "Inicie el segundo lavado de manos clínico antes de la curación",
      content: (
        <div>
          <p>
            <strong>Lavado estéril:</strong> Empezando por mano no dominante
          </p>
          <Video
            src={LavarManosJabon}
            poster={LavarManosJabonImage}
            title="Segundo lavado - jabón"
          />
        </div>
      ),
    },
    {
      title: "Segundo lavado - Frotar palmas",
      description: "Frote las palmas 10 veces en el segundo lavado",
      content: (
        <div>
          <p>
            <strong>Cuenta:</strong> 10 movimientos completos
          </p>
          <Video
            src={LavarManosPalmas}
            poster={LavarManosPalmasImage}
            title="Segundo lavado - palmas"
          />
        </div>
      ),
    },
    {
      title: "Segundo lavado - Frotar dorsos",
      description: "Frote los dorsos 10 veces en el segundo lavado",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Dorso completo de ambas manos
          </p>
          <Video
            src={LavarManosDorso}
            poster={LavarManosDorsoImage}
            title="Segundo lavado - dorsos"
          />
        </div>
      ),
    },
    {
      title: "Segundo lavado - Frotar nudillos",
      description: "Frote los nudillos 10 veces en el segundo lavado",
      content: (
        <div>
          <p>
            <strong>Posición:</strong> Dedos entrelazados
          </p>
          <Video
            src={LavarManosNudillos}
            poster={LavarManosNudillosImage}
            title="Segundo lavado - nudillos"
          />
        </div>
      ),
    },
    {
      title: "Segundo lavado - Frotar pulgares",
      description: "Frote los pulgares 10 veces en el segundo lavado",
      content: (
        <div>
          <p>
            <strong>Movimiento:</strong> Pulgar con palma contraria
          </p>
          <Video
            src={LavarManosPulgares}
            poster={LavarManosPulgaresImage}
            title="Segundo lavado - pulgares"
          />
        </div>
      ),
    },
    {
      title: "Segundo lavado - Frotar uñas",
      description: "Frote las uñas 10 veces en el segundo lavado",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Uñas contra palma contraria
          </p>
          <Video
            src={LavarManosUnas}
            poster={LavarManosUnasImage}
            title="Segundo lavado - uñas"
          />
        </div>
      ),
    },
    {
      title: "Segundo secado - Tomar toalla",
      description: "Inicie el secado con la toalla limpia",
      content: (
        <div>
          <p>
            <strong>Secado estéril:</strong> Toalla abraza palmas
          </p>
          <Video
            src={SecadoManoTomarToalla}
            poster={SecadoManoTomarToallaImage}
            title="Segundo secado - tomar toalla"
          />
        </div>
      ),
    },
    {
      title: "Segundo secado - Secar dedos",
      description: "Seque cada dedo del segundo lavado",
      content: (
        <div>
          <p>
            <strong>Precisión:</strong> Cada dedo individualmente
          </p>
          <Video
            src={SecadoManoDedos}
            poster={SecadoManoDedosImage}
            title="Segundo secado - dedos"
          />
        </div>
      ),
    },
    {
      title: "Segundo secado - Secar dorso",
      description: "Seque el dorso con toques ligeros",
      content: (
        <div>
          <p>
            <strong>Suavidad:</strong> Sin frotar, solo toques
          </p>
          <Video
            src={SecadoManoDorso}
            poster={SecadoManoDorsoImage}
            title="Segundo secado - dorso"
          />
        </div>
      ),
    },
    {
      title: "Segundo secado - Girar toalla",
      description: "Gire la toalla para usar la parte limpia",
      content: (
        <div>
          <p>
            <strong>Limpieza:</strong> Parte no contaminada de la toalla
          </p>
          <Video
            src={SecadoManoGiroToalla}
            poster={SecadoManoGiroToallaImage}
            title="Girar toalla para segunda mano"
          />
        </div>
      ),
    },
    {
      title: "Segundo secado - Segunda mano",
      description: "Repita secado con la segunda mano",
      content: (
        <div>
          <p>
            <strong>Repetir:</strong> Mismo proceso con mano contraria
          </p>
          <Video
            src={SecadoManoAbrazoPalmas}
            poster={SecadoManoAbrazoPalmasImage}
            title="Secar segunda mano"
          />
        </div>
      ),
    },
    {
      title: "Segundo secado - Dorso segunda mano",
      description: "Seque el dorso de la segunda mano",
      content: (
        <div>
          <p>
            <strong>Finalización:</strong> Dorso de la segunda mano
          </p>
          <Video
            src={SecadoManoDorsoContrario}
            poster={SecadoManoDorsoContrarioImage}
            title="Dorso segunda mano"
          />
        </div>
      ),
    },
    {
      title: "Colocar guante estéril",
      description:
        "Coloque guante en mano dominante y enjuague con agua estéril",
      content: (
        <div>
          <p>
            <strong>Esterilidad:</strong> Guante en mano dominante, enjuagar
          </p>
          <Video
            src={EnjuagarGuante}
            poster={EnjuagarGuanteImage}
            title="Colocar y enjuagar guante"
          />
        </div>
      ),
    },
    {
      title: "Preparar gasa con jabón",
      description: "Impregne gasa con agua estéril y jabón líquido neutro",
      content: (
        <div>
          <p>
            <strong>Preparación:</strong> Gasa húmeda con jabón neutro
          </p>
          <Video
            src={ImpregnarGasaAguaEsterilJabonLiquido}
            poster={ImpregnarGasaAguaEsterilJabonLiquidoImage}
            title="Impregnar gasa con jabón"
          />
        </div>
      ),
    },
    {
      title: "Limpiar herida - Colocar gasa",
      description: "Coloque gasa en la herida y presione levemente",
      content: (
        <div>
          <p>
            <strong>Suavidad:</strong> Presión leve en la herida
          </p>
          <Video
            src={GasaHeridaPresionamosLevemente}
            poster={GasaHeridaPresionamosLevementeImage}
            title="Colocar gasa en herida"
          />
        </div>
      ),
    },
    {
      title: "Limpiar herida - Movimiento circular",
      description: "Haga círculos arrastrando del centro hacia fuera",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Centro hacia fuera, círculos alrededor del
            catéter
          </p>
          <Video
            src={CirculoArrastramosEspiral}
            poster={CirculoArrastramosEspiralImage}
            title="Movimiento circular espiral"
          />
        </div>
      ),
    },
    {
      title: "Limpiar herida - Una sola pasada",
      description:
        "Haga la limpieza con jabón una vez, arrastrando toda la suciedad",
      content: (
        <div>
          <p>
            <strong>Eficiencia:</strong> Una pasada efectiva para arrastrar
            suciedad
          </p>
        </div>
      ),
    },
    {
      title: "Desechar primera gasa",
      description: "Deseche la gasa usada inmediatamente",
      content: (
        <div>
          <p>
            <strong>Higiene:</strong> Desechar sin contaminar área
          </p>
        </div>
      ),
    },
    {
      title: "Revisar residuos",
      description: "Verifique que no queden residuos de pegamento en la piel",
      content: (
        <div>
          <p>
            <strong>Inspección:</strong> Si hay pegamento, retire con gasa en
            movimiento circular
          </p>
        </div>
      ),
    },
    {
      title: "Enjuagar con agua estéril",
      description: "Use gasa con agua estéril para quitar el jabón",
      content: (
        <div>
          <p>
            <strong>Enjuague:</strong> Mismo proceso circular para retirar jabón
          </p>
          <Video
            src={OtraGasaQuitarJabon}
            poster={OtraGasaQuitarJabonImage}
            title="Quitar jabón con agua estéril"
          />
        </div>
      ),
    },
    {
      title: "Desechar gasa de enjuague",
      description: "Deseche la gasa del enjuague",
      content: (
        <div>
          <p>
            <strong>Limpieza:</strong> Desechar gasa usada
          </p>
        </div>
      ),
    },
    {
      title: "Repetir enjuague",
      description: "Repita 2-3 veces más hasta eliminar todo el jabón",
      content: (
        <div>
          <p>
            <strong>Completo:</strong> Asegurar que no quede jabón residual
          </p>
        </div>
      ),
    },
    {
      title: "Secar herida completamente",
      description: "Use gasas limpias para secar toda la entrada del catéter",
      content: (
        <div>
          <p>
            <strong>Secado total:</strong> Entrada completa del catéter, dejar
            orear
          </p>
          <Video
            src={OtraGasaSecarBien}
            poster={OtraGasaSecarBienImage}
            title="Secar herida completamente"
          />
        </div>
      ),
    },
    {
      title: "Evitar contaminación",
      description: "No sople ni use elementos externos para secar",
      content: (
        <div>
          <p>
            <strong>⚠️ Prohibido:</strong> No soplar, no usar aire externo, solo
            gasas
          </p>
        </div>
      ),
    },
    {
      title: "Aplicar Exsept",
      description: "Aplique Exsept en la herida levantando el tubo",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Levantar tubito para que caiga en toda la
            entrada
          </p>
          <Video
            src={PushExseptHerida}
            poster={PushExseptHeridaImage}
            title="Aplicar Exsept en herida"
          />
        </div>
      ),
    },
    {
      title: "Aplicar Mupirocina (opcional)",
      description: "Aplique Mupirocina solo si está prescrita",
      content: (
        <div>
          <p>
            <strong>Solo si es requerida:</strong> Con dedo meñique del guante,
            directo en herida
          </p>
          <Video
            src={ColocarMupirocina}
            poster={ColocarMupirocinaImage}
            title="Aplicar Mupirocina"
          />
        </div>
      ),
    },
    {
      title: "Colocar gasa nueva",
      description: "Coloque gasa limpia a lo largo del catéter con cintas",
      content: (
        <div>
          <p>
            <strong>Posición:</strong> 2 cintas en lugares diferentes a la
            curación anterior
          </p>
          <Video
            src={ColocarGasaHerida}
            poster={ColocarGasaHeridaImage}
            title="Colocar gasa nueva"
          />
        </div>
      ),
    },
    {
      title: "Asegurar catéter",
      description: "Coloque cinta que abrace el tubo del catéter",
      content: (
        <div>
          <p>
            <strong>Seguridad:</strong> Cinta abrazando tubo, extremos a la piel
          </p>
          <Video
            src={ColocarGasaTuboHerida}
            poster={ColocarGasaTuboHeridaImage}
            title="Asegurar catéter con cinta"
          />
        </div>
      ),
    },
    {
      title: "Colocar fajero limpio",
      description: "Coloque el fajero limpio sobre la gasa",
      content: (
        <div>
          <p>
            <strong>Protección:</strong> Fajero limpio para proteger la curación
          </p>
        </div>
      ),
    },
    {
      title: "Guardar catéter",
      description: "Guarde el catéter en su posición segura",
      content: (
        <div>
          <p>
            <strong>Posición:</strong> Catéter en lugar seguro y cómodo
          </p>
        </div>
      ),
    },
    {
      title: "Limpiar área de trabajo",
      description: "Guarde la compresa y limpie el área",
      content: (
        <div>
          <p>
            <strong>Limpieza:</strong> Recoger compresa y limpiar área de
            trabajo
          </p>
        </div>
      ),
    },
    {
      title: "Guardar materiales",
      description: "Devuelva todos los materiales a su lugar",
      content: (
        <div>
          <p>
            <strong>Organización:</strong> Cada material en su lugar designado
          </p>
          <p>
            <strong>✅ Proceso completado:</strong> La herida está limpia y
            protegida
          </p>
        </div>
      ),
    },
  ];

  return (
    <Layout title="Limpieza de Herida" description={description}>
      <ProgressStep
        steps={steps}
        pageId="limpieza-herida"
        title="🩹 Lista de verificación - Limpieza de Herida"
      />
    </Layout>
  );
};
