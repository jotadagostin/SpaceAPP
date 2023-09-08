import { isStyledComponent } from "styled-components";

const HeaderEstilizado = isStyledComponent.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
`;

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagem/logo.png" alt="" />
    </HeaderEstilizado>
  );
};


export default Cabecalho;