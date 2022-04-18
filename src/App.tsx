import * as C from './App.styles';
import Ash from '../src/components/Ash';
import Personagem from './components/Personagem';

const App = () => {
  return (
    <C.Container>
      <C.Map>
        <Personagem/>
        <Ash/>
      </C.Map>
    </C.Container>
  );
}

export default App;