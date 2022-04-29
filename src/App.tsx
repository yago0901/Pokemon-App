import { useEffect, useState } from 'react';
import * as C from './App.styles';
import Personagem from './components/Personagem';
import MenuLateral from './components/MenuLateral';
import { usePersonagem } from './hooks/usePersonagem';
import { Balloon } from './components/Balloon';
import { Balloon2 } from './components/Balloon2';
import Modal from './components/Modal';

const App = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  // Lógica para setar Ballon=(searching) para visivel quando true
  const [isBallon1Visible, setisBallon1Visible] = useState(false);
 
  //Adiciona as propriedades de Personagem ao char
  const char = usePersonagem();

  //Evento de leitor de keydown=aperto de tecla para ser acessada pela função handleKeyDown
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

  }, []);
  
  /*Constante que recebe a tecla do comando EventListener 
  e trata de acordo com teclas necessárias */
  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA' :
      case 'ArrowLeft':
        char.moveLeft();

      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'KeyS' :
      case 'ArrowDown':
        char.moveDown();
      break;
      
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Personagem x={char.x} y={char.y} side={char.side} />
        
        {isBallon1Visible ? (
        <Balloon x={char.x} y={char.y -1} openModal={setIsModalVisible}/>
         ) : <Balloon2 x={char.x} y={char.y -1} openBallon={setisBallon1Visible} />  }
        <MenuLateral/>
        {isModalVisible ? (
        <Modal closeModal={setIsModalVisible}/>
         ) : null}

      </C.Map>
    </C.Container>
  );
}

export default App;