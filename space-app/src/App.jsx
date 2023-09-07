import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";

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
    </BackgroundGradient>
  );
}

export default App;
