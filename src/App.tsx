import { useEffect } from 'react';
import * as C from './App.styles';
import Personagem from './components/Personagem';
import MenuLateral from './components/MenuLateral';
import { usePersonagem } from './hooks/usePersonagem';

const App = () => {
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
        <MenuLateral/>
        <Personagem x={char.x} y={char.y} side={char.side} />
      </C.Map>
    </C.Container>
  );
}

export default App;