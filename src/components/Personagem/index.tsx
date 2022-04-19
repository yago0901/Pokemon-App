import * as C from './styles';

type Props = {
  x: number;
  y:number;
}

const Personagem = ({x, y} : Props) => {
  const size = 50;

    return(
      <C.Container
        size={size}
        left={x * size}
        top={y * size}
      >
          
      </C.Container>  
    );
}

export default Personagem;