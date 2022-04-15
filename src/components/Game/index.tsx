import Board from '../Board';
import './index.css';

import * as C from '../../App.styles';

const index = () => {
  return (
    <C.Container>
      <div className="App">
        <div style={{
          position:'relative',
          }}>
          <Board />
        </div> 
      </div>
    </C.Container>
  );
}

export default index;
