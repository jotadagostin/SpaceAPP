import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/EstilosGlobais/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";

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
    </BackgroundGradient>
  );
}

export default App;
