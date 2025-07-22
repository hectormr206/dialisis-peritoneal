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

import CalentarBolsaHorno from "../assets/video/webm/CalentarBolsaHorno.webm";
import CalentarBolsaHornoImage from "../assets/image/jpg/CalentarBolsaHorno.jpg";

import LimpiarMesaCincoPuntos from "../assets/video/webm/LimpiarMesaCincoPuntos.webm";
import LimpiarMesaCincoPuntosImage from "../assets/image/jpg/LimpiarMesaCincoPuntos.jpg";
import LimpiarMesaCompresa from "../assets/video/webm/LimpiarMesaCompresa.webm";
import LimpiarMesaCompresaImage from "../assets/image/jpg/LimpiarMesaCompresa.jpg";

import LimpiarArticuloExsept from "../assets/video/webm/LimpiarArticuloExsept.webm";
import LimpiarArticuloExseptImage from "../assets/image/jpg/LimpiarArticuloExsept.jpg";
import LimpiarArticuloPinzas from "../assets/video/webm/LimpiarArticuloPinzas.webm";
import LimpiarArticuloPinzasImage from "../assets/image/jpg/LimpiarArticuloPinzas.jpg";
import LimpiarArticuloHeparina from "../assets/video/webm/LimpiarArticuloHeparina.webm";
import LimpiarArticuloHeparinaImage from "../assets/image/jpg/LimpiarArticuloHeparina.jpg";

import AbrirGasa from "../assets/video/webm/AbrirGasa.webm";
import AbrirGasaImage from "../assets/image/jpg/AbrirGasa.jpg";
import AbrirJeringa from "../assets/video/webm/AbrirJeringa.webm";
import AbrirJeringaImage from "../assets/image/jpg/AbrirJeringa.jpg";

import AbrirBolsa from "../assets/video/webm/AbrirBolsa.webm";
import AbrirBolsaImage from "../assets/image/jpg/AbrirBolsa.jpg";

import LavarManosMojarCepillo from "../assets/video/webm/LavarManosMojarCepillo.webm";
import LavarManosMojarCepilloImage from "../assets/image/jpg/LavarManosMojarCepillo.jpg";
import LavarManosMojarManoAplicarJabon from "../assets/video/webm/LavarManosMojarManoAplicarJabon.webm";
import LavarManosMojarManoAplicarJabonImage from "../assets/image/jpg/LavarManosMojarManoAplicarJabon.jpg";
import LavarManosCepillamosUnas from "../assets/video/webm/LavarManosCepillamosUnas.webm";
import LavarManosCepillamosUnasImage from "../assets/image/jpg/LavarManosCepillamosUnas.jpg";
import LavarManosCepillamosEntreDedos from "../assets/video/webm/LavarManosCepillamosEntreDedos.webm";
import LavarManosCepillamosEntreDedosImage from "../assets/image/jpg/LavarManosCepillamosEntreDedos.jpg";
import LavarManosCepillamosPalma from "../assets/video/webm/LavarManosCepillamosPalma.webm";
import LavarManosCepillamosPalmaImage from "../assets/image/jpg/LavarManosCepillamosPalma.jpg";
import LavarManosCepillamosDorso from "../assets/video/webm/LavarManosCepillamosDorso.webm";
import LavarManosCepillamosDorsoImage from "../assets/image/jpg/LavarManosCepillamosDorso.jpg";
import LavarManosCepillamosBrazo from "../assets/video/webm/LavarManosCepillamosBrazo.webm";
import LavarManosCepillamosBrazoImage from "../assets/image/jpg/LavarManosCepillamosBrazo.jpg";

export const WaterRecycling = () => {
  const description =
    "Proceso completo para realizar la diálisis peritoneal de forma segura. Siga cada paso cuidadosamente para evitar infecciones.";

  const steps = [
    {
      title: "Preparación inicial - Cubrebocas",
      description: "Coloque cubrebocas al paciente y familiares presentes",
      content: (
        <div>
          <p>
            <strong>Protección:</strong> Todos deben usar cubrebocas durante el
            procedimiento
          </p>
        </div>
      ),
    },
    {
      title: "Pesar al paciente",
      description: "Pese al paciente antes de la primera diálisis del día",
      content: (
        <div>
          <p>
            <strong>⚠️ Importante:</strong> Solo antes de la primera diálisis
            diaria
          </p>
          <p>Registre el peso para control médico</p>
        </div>
      ),
    },
    {
      title: "Preparar jeringa con cloro",
      description: "Prepare jeringa de 20ml con 10ml de cloro",
      content: (
        <div>
          <p>
            <strong>Medida exacta:</strong> 10ml de cloro en jeringa de 20ml
          </p>
          <Video
            src={AbrirJeringa}
            poster={AbrirJeringaImage}
            title="Preparar jeringa"
          />
        </div>
      ),
    },
    {
      title: "Colocar toalla para secado",
      description: "Coloque toalla doblada a la mitad por lo largo",
      content: (
        <div>
          <p>
            <strong>Preparación:</strong> Toalla lista para lavado de manos
          </p>
          <Video
            src={ColocarToalla}
            poster={ColocarToallaImage}
            title="Colocar toalla"
          />
        </div>
      ),
    },
    {
      title: "Acomodar báscula",
      description: "Coloque la báscula en posición correcta",
      content: (
        <div>
          <p>
            <strong>Posición:</strong> Lista para pesar bolsas de diálisis
          </p>
        </div>
      ),
    },
    {
      title: "Primer lavado - Aplicar jabón",
      description: "Inicie el primer lavado clínico de manos",
      content: (
        <div>
          <p>
            <strong>Inicio:</strong> Manos mojadas con jabón abundante
          </p>
          <Video
            src={LavarManosJabon}
            poster={LavarManosJabonImage}
            title="Aplicar jabón"
          />
        </div>
      ),
    },
    {
      title: "Primer lavado - Frotar palmas",
      description: "Frote palmas 10 veces",
      content: (
        <div>
          <p>
            <strong>Cuenta:</strong> 10 movimientos circulares
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
      description: "Frote dorsos 10 veces",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Dorso de ambas manos
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
      description: "Enganche manos y frote nudillos 10 veces",
      content: (
        <div>
          <p>
            <strong>Posición:</strong> Dedos entrelazados
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
      description: "Frote pulgares 10 veces",
      content: (
        <div>
          <p>
            <strong>Movimiento:</strong> Pulgar con palma contraria
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
      description: "Frote uñas 10 veces",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Uñas contra palma contraria
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
      description: "Tome toalla y abrace palmas",
      content: (
        <div>
          <p>
            <strong>Inicio:</strong> Palmas juntas con toalla
          </p>
          <Video
            src={SecadoManoTomarToalla}
            poster={SecadoManoTomarToallaImage}
            title="Tomar toalla"
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
            <strong>Precisión:</strong> Dedo por dedo
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
      description: "Seque dorso con toques ligeros",
      content: (
        <div>
          <p>
            <strong>Suavidad:</strong> Sin frotar, solo toques
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
      title: "Primer secado - Girar toalla",
      description: "Gire toalla para usar parte limpia",
      content: (
        <div>
          <p>
            <strong>Limpieza:</strong> Parte no contaminada
          </p>
          <Video
            src={SecadoManoGiroToalla}
            poster={SecadoManoGiroToallaImage}
            title="Girar toalla"
          />
        </div>
      ),
    },
    {
      title: "Primer secado - Segunda mano",
      description: "Repita secado con segunda mano",
      content: (
        <div>
          <p>
            <strong>Repetir:</strong> Mismo proceso
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
      title: "Primer secado - Dorso segunda mano",
      description: "Seque dorso de segunda mano",
      content: (
        <div>
          <p>
            <strong>Finalización:</strong> Completar secado
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
      title: "Preparar catéter",
      description: "Saque catéter y cúbralo con compresa exclusiva",
      content: (
        <div>
          <p>
            <strong>⚠️ Importante:</strong> Compresa marcada solo para catéter
          </p>
          <p>Mantenga cubierto en lugar seguro</p>
        </div>
      ),
    },
    {
      title: "Calentar bolsa de diálisis",
      description: "Caliente bolsa a 36-37°C con líneas hacia abajo",
      content: (
        <div>
          <p>
            <strong>Tiempo:</strong> 2.5 min aproximadamente
          </p>
          <p>
            <strong>Posición:</strong> Líneas de transferencia hacia abajo
          </p>
          <Video
            src={CalentarBolsaHorno}
            poster={CalentarBolsaHornoImage}
            title="Calentar bolsa en horno"
          />
        </div>
      ),
    },
    {
      title: "Limpiar mesa - 5 puntos",
      description: "Desinfecte mesa con agua clorada en 5 puntos",
      content: (
        <div>
          <p>
            <strong>Patrón:</strong> Esquinas y centro, limpiar adelante-atrás
          </p>
          <Video
            src={LimpiarMesaCincoPuntos}
            poster={LimpiarMesaCincoPuntosImage}
            title="Limpiar mesa 5 puntos"
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
      description: "Limpie Exsept sin tapa con agua clorada al 10%",
      content: (
        <div>
          <p>
            <strong>Sin tapa:</strong> Limpiar completamente
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
      title: "Limpiar materiales - Pinzas",
      description: "Limpie pinzas abiertas con agua clorada",
      content: (
        <div>
          <p>
            <strong>Abiertas:</strong> Para limpieza completa
          </p>
          <Video
            src={LimpiarArticuloPinzas}
            poster={LimpiarArticuloPinzasImage}
            title="Limpiar pinzas"
          />
        </div>
      ),
    },
    {
      title: "Preparar gasa",
      description: "Saque gasa sin tocarla directamente",
      content: (
        <div>
          <p>
            <strong>Esterilidad:</strong> No tocar con manos
          </p>
          <Video
            src={AbrirGasa}
            poster={AbrirGasaImage}
            title="Preparar gasa estéril"
          />
        </div>
      ),
    },
    {
      title: "Limpiar medicamento",
      description: "Limpie heparina o medicamento indicado",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Agua clorada en tapón, limpiar hacia abajo
          </p>
          <p>
            <strong>Posición:</strong> Punta hacia nosotros
          </p>
          <Video
            src={LimpiarArticuloHeparina}
            poster={LimpiarArticuloHeparinaImage}
            title="Limpiar heparina"
          />
        </div>
      ),
    },
    {
      title: "Preparar jeringa estéril",
      description: "Saque jeringa sin tocarla y colóquela en mesa",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Abrir jalando puntas del empaque
          </p>
          <Video
            src={AbrirJeringa}
            poster={AbrirJeringaImage}
            title="Preparar jeringa estéril"
          />
        </div>
      ),
    },
    {
      title: "Sacar bolsa del horno",
      description: "Retire la bolsa caliente del horno y colóquela en mesa",
      content: (
        <div>
          <p>
            <strong>Temperatura:</strong> 36-37°C lista para usar
          </p>
          <p>Coloque en área limpia de la mesa</p>
        </div>
      ),
    },
    {
      title: "Abrir bolsa de diálisis",
      description:
        "Abra la bolsa colocando brazo sobre una mitad y rasgue hacia usted",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Brazo sobre una mitad, tomar cejita y
            rasgar
          </p>
          <Video
            src={AbrirBolsa}
            poster={AbrirBolsaImage}
            title="Abrir bolsa de diálisis"
          />
        </div>
      ),
    },
    {
      title: "Destapar catéter",
      description: "Retire la compresa que cubre el catéter",
      content: (
        <div>
          <p>
            <strong>Recordatorio:</strong> El catéter estaba cubierto con
            compresa exclusiva
          </p>
        </div>
      ),
    },
    {
      title: "Lavado quirúrgico - Mojar cepillo",
      description: "Inicie el lavado quirúrgico mojando el cepillo",
      content: (
        <div>
          <p>
            <strong>⚠️ Importante:</strong> Cepillo máximo 5 días de uso
          </p>
          <Video
            src={LavarManosMojarCepillo}
            poster={LavarManosMojarCepilloImage}
            title="Mojar cepillo quirúrgico"
          />
        </div>
      ),
    },
    {
      title: "Lavado quirúrgico - Aplicar jabón",
      description: "Moje mano hasta el codo y aplique jabón en cepillo",
      content: (
        <div>
          <p>
            <strong>Cobertura:</strong> Desde dedos hasta codo
          </p>
          <Video
            src={LavarManosMojarManoAplicarJabon}
            poster={LavarManosMojarManoAplicarJabonImage}
            title="Aplicar jabón en cepillo"
          />
        </div>
      ),
    },
    {
      title: "Lavado quirúrgico - Cepillar uñas",
      description: "Cepille uñas en forma circular 10 veces",
      content: (
        <div>
          <p>
            <strong>Movimiento:</strong> Circular, 10 veces cada uña
          </p>
          <Video
            src={LavarManosCepillamosUnas}
            poster={LavarManosCepillamosUnasImage}
            title="Cepillar uñas"
          />
        </div>
      ),
    },
    {
      title: "Lavado quirúrgico - Entre dedos",
      description:
        "Cepille entre dedos, empezando por pulgar, atrás-adelante 3 veces",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Pulgar primero, atrás hacia adelante
          </p>
          <Video
            src={LavarManosCepillamosEntreDedos}
            poster={LavarManosCepillamosEntreDedosImage}
            title="Cepillar entre dedos"
          />
        </div>
      ),
    },
    {
      title: "Lavado quirúrgico - Palma",
      description:
        "Divida palma en dos, cepille adelante-atrás 10 veces arriba y 10 abajo",
      content: (
        <div>
          <p>
            <strong>División:</strong> Palma en dos secciones, 10+10 movimientos
          </p>
          <Video
            src={LavarManosCepillamosPalma}
            poster={LavarManosCepillamosPalmaImage}
            title="Cepillar palma"
          />
        </div>
      ),
    },
    {
      title: "Lavado quirúrgico - Dorso",
      description:
        "Divida dorso en dos, cepille adelante-atrás 10 veces arriba y 10 abajo",
      content: (
        <div>
          <p>
            <strong>División:</strong> Dorso en dos secciones, 10+10 movimientos
          </p>
          <Video
            src={LavarManosCepillamosDorso}
            poster={LavarManosCepillamosDorsoImage}
            title="Cepillar dorso"
          />
        </div>
      ),
    },
    {
      title: "Lavado quirúrgico - Brazo",
      description:
        "Cepille brazo desde muñeca hasta codo, arriba-abajo en líneas",
      content: (
        <div>
          <p>
            <strong>Técnica:</strong> Líneas verticales cubriendo todo el brazo
          </p>
          <Video
            src={LavarManosCepillamosBrazo}
            poster={LavarManosCepillamosBrazoImage}
            title="Cepillar brazo"
          />
        </div>
      ),
    },
    {
      title: "Completar proceso con mano contraria",
      description: "Repita todo el proceso quirúrgico con la mano contraria",
      content: (
        <div>
          <p>
            <strong>Repetir:</strong> Mismo proceso completo con segunda mano
          </p>
          <p>
            <strong>Enjuague:</strong> Siempre de forma ascendente (dedos al
            codo)
          </p>
        </div>
      ),
    },
  ];

  return (
    <Layout title="Realizar Diálisis" description={description}>
      <ProgressStep
        steps={steps}
        pageId="realizar-dialisis"
        title="💧 Lista de verificación - Realizar Diálisis"
      />
    </Layout>
  );
};
