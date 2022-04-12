import Board from '../Board';
import './App.css';
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../../settings/constants';

function App() {
  return (
    <div className="App">
      <div 
      style= {{
        position:'relative',
        width: GAME_SIZE_WIDTH,
        height: GAME_SIZE_HEIGHT,
      }}>
        <Board />
      </div> 
    </div>
  );
}

export default App;
