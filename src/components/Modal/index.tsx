import * as C from './styles';
import Pokemon from '../Pokemon';
import { Title, PropsPok, Hp, Altura, Peso } from './styles';

type Props = {
  onClose: any;
};

const Modal = ({ onClose = () => {} }) => {
  return(
      <C.Container>
        <C.BackgroundModal>
          <button onClick={() => onClose()}>X</button>
        </C.BackgroundModal>
        <C.DescriptionModal>
          <C.Title>Bulbasaur</C.Title>
          <C.PropsPok>
            <C.Hp>...</C.Hp>
            <C.Altura>...</C.Altura>
            <C.Peso>...</C.Peso>
          </C.PropsPok>
        </C.DescriptionModal>
        <Pokemon/>
      </C.Container>  
    );
}

export default Modal;