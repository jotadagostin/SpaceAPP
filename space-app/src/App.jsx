import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import BarraLateral from "./componentes/BarraLateral";
import Cabecalho from "./componentes/Cabecalho";
import Banner from "./componentes/Banner";
import bannerBackground from "./assets/banner.png";

const BackgroundGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <BackgroundGradient>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
      <Banner
        texto="A galeria mais completa de fotos do espaco!"
        backgroundImage={bannerBackground}
      />
    </BackgroundGradient>
  );
}

export default App;
