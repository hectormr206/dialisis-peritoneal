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

import LimpiarMesaCincoPuntos from "../assets/video/webm/LimpiarMesaCincoPuntos.webm";
import LimpiarMesaCincoPuntosImage from "../assets/image/jpg/LimpiarMesaCincoPuntos.jpg";
import LimpiarMesaCompresa from "../assets/video/webm/LimpiarMesaCompresa.webm";
import LimpiarMesaCompresaImage from "../assets/image/jpg/LimpiarMesaCompresa.jpg";

export const GeneralCleaning = () => {
  const description =
    "Siga estos pasos en orden para realizar el aseo general correctamente. Cada paso debe completarse antes de continuar al siguiente.";

  const steps = [
    {
      title: "Preparación inicial",
      description: "Prepare los materiales necesarios antes de comenzar",
      content: (
        <div>
          <h4>📋 Materiales necesarios:</h4>
          <ul>
            <li>Agua de garrafón</li>
            <li>Cloro (10% del total)</li>
            <li>Toalla pequeña exclusiva para aseo general</li>
            <li>Jabón antibacterial</li>
          </ul>
          <h4>🧪 Preparar agua clorada:</h4>
          <p>
            <strong>Ejemplo:</strong> 450ml de agua + 50ml de cloro = 500ml de
            solución
          </p>
        </div>
      ),
    },
    {
      title: "Colocar toalla para secado",
      description:
        "Coloque la toalla doblada a la mitad por lo largo para el secado de manos",
      content: (
        <div>
          <p>
            <strong>Importante:</strong> Use una toalla exclusiva para el aseo
            general
          </p>
          <Video
            src={ColocarToalla}
            poster={ColocarToallaImage}
            title="Cómo colocar la toalla"
          />
        </div>
      ),
    },
    {
      title: "Lavado de manos - Aplicar jabón",
      description:
        "Moje las manos y aplique jabón antibacterial. Comience por la mano no dominante",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Manos bajo el agua, aplicar jabón en
            cantidad suficiente
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
      title: "Lavado de manos - Frotar palmas",
      description: "Frote las palmas de las manos 10 veces de manera circular",
      content: (
        <div>
          <p>
            <strong>Cuenta:</strong> 10 movimientos circulares completos
          </p>
          <Video
            src={LavarManosPalmas}
            poster={LavarManosPalmasImage}
            title="Frotar palmas de las manos"
          />
        </div>
      ),
    },
    {
      title: "Lavado de manos - Frotar dorsos",
      description:
        "Frote el dorso de cada mano 10 veces con la palma contraria",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Palma sobre dorso, movimientos de arriba
            hacia abajo
          </p>
          <Video
            src={LavarManosDorso}
            poster={LavarManosDorsoImage}
            title="Frotar dorso de las manos"
          />
        </div>
      ),
    },
    {
      title: "Lavado de manos - Frotar nudillos",
      description: "Enganche los dedos y frote los nudillos 10 veces",
      content: (
        <div>
          <p>
            <strong>Posición:</strong> Dedos entrelazados, frotar nudillos entre
            sí
          </p>
          <Video
            src={LavarManosNudillos}
            poster={LavarManosNudillosImage}
            title="Frotar nudillos de las manos"
          />
        </div>
      ),
    },
    {
      title: "Lavado de manos - Frotar pulgares",
      description: "Frote cada pulgar 10 veces con la palma contraria",
      content: (
        <div>
          <p>
            <strong>Movimiento:</strong> Pulgar rodeado por la palma contraria,
            movimiento rotatorio
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
      title: "Lavado de manos - Frotar uñas",
      description: "Frote las uñas contra las palmas 10 veces cada mano",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Uñas contra la palma contraria, movimiento
            circular
          </p>
          <Video
            src={LavarManosUnas}
            poster={LavarManosUnasImage}
            title="Frotar uñas contra palmas"
          />
        </div>
      ),
    },
    {
      title: "Secado - Tomar toalla",
      description: "Tome la toalla y abrace sus palmas para comenzar el secado",
      content: (
        <div>
          <p>
            <strong>Inicio:</strong> Palmas juntas con la toalla entre ellas
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
      title: "Secado - Secar dedos",
      description: "Seque cada dedo individualmente con movimientos suaves",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Dedo por dedo, desde la base hasta la
            punta
          </p>
          <Video
            src={SecadoManoDedos}
            poster={SecadoManoDedosImage}
            title="Secar dedos individualmente"
          />
        </div>
      ),
    },
    {
      title: "Secado - Secar dorso",
      description: "Seque el dorso de la mano con toques ligeros",
      content: (
        <div>
          <p>
            <strong>Movimiento:</strong> Toques suaves, sin frotar
          </p>
          <Video
            src={SecadoManoDorso}
            poster={SecadoManoDorsoImage}
            title="Secar dorso de la mano"
          />
        </div>
      ),
    },
    {
      title: "Secado - Girar toalla",
      description:
        "Gire la toalla para usar la parte limpia para la segunda mano",
      content: (
        <div>
          <p>
            <strong>Importante:</strong> Use la parte no contaminada de la
            toalla
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
      title: "Secado - Segunda mano",
      description: "Repita el proceso de secado con la segunda mano",
      content: (
        <div>
          <p>
            <strong>Repetir:</strong> Mismo proceso de abrazo y secado
            individual
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
      title: "Limpieza de superficie",
      description:
        "Limpie la mesa o superficie de trabajo con la solución clorada",
      content: (
        <div>
          <p>
            <strong>Patrón:</strong> Movimientos sistemáticos cubriendo toda la
            superficie
          </p>
          <Video
            src={LimpiarMesaCincoPuntos}
            poster={LimpiarMesaCincoPuntosImage}
            title="Limpiar superficie de trabajo"
          />
          <Video
            src={LimpiarMesaCompresa}
            poster={LimpiarMesaCompresaImage}
            title="Técnica de limpieza con compresa"
          />
        </div>
      ),
    },
  ];

  return (
    <Layout title="Aseo General" description={description}>
      <ProgressStep
        steps={steps}
        pageId="aseo-general"
        title="🧹 Lista de verificación - Aseo General"
      />
    </Layout>
  );
};
