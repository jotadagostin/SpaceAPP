import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import BarraLateral from "./componentes/BarraLateral";
import Cabecalho from "./componentes/Cabecalho";
import Banner from "./componentes/Banner";
import bannerBackground from "./assets/banner.png";
import Galeria from "./componentes/Galeria";

import fotos from "./fotos.json";
import { useState } from "react";

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

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  return (
    <BackgroundGradient>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaco!"
              backgroundImage={bannerBackground}
            />
            <Galeria fotos={fotosDaGaleria}/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </BackgroundGradient>
  );
};

export default App;
