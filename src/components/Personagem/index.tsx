import * as C from './styles';
import { PersonagemSides } from '../../types/PersonagemSides'

type Props = {
  x: number;
  y:number;
  side: PersonagemSides;
}

const Personagem = ({x, y, side} : Props) => {
  const size = 50;
  const sides = {
    down:0,
    left:-50,
    right:-100,
    up:-150,
  }

    return(
      <C.Container
        size={size}
        left={x * size}
        top={y * size}
        sidePos={sides[side] ?? 0}
      >
          
      </C.Container>  
    );
}

export default Personagem;