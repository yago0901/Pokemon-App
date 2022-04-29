import * as C from './styles';
import Pokemon from '../Pokemon';
import { ValorPok } from './styles';
import Pokebola from '../Pokebola';

type Props = {
  closeModal: Function;
};

const Modal = ({ closeModal }: Props) => {
  return(
      <C.Container>
        <C.BackgroundModal>
          <button onClick={() => closeModal(false)}>X</button>
        </C.BackgroundModal>
        <C.DescriptionModal>
          <C.Title>Bulbasaur</C.Title>
          
        <Pokebola/>
          <C.PropsPok>
            <C.Hp>HP
              <ValorPok>45/45</ValorPok>
            </C.Hp>
            <C.Altura>ALTURA
              <ValorPok>0.7 m</ValorPok>
            </C.Altura>
            <C.Peso>PESO
              <C.ValorPok>6.9KG</C.ValorPok>
            </C.Peso>
          </C.PropsPok>
          <C.FooterPok>
            <C.StylePok>Planta</C.StylePok>
            <C.AtribPok>Veneno</C.AtribPok>
          </C.FooterPok>
        </C.DescriptionModal>
        <Pokemon/>
      </C.Container>  
    );
}

export default Modal;