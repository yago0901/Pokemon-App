import React from 'react';
import { GAME_SIZE_HEIGHT, GAME_SIZE_WIDTH } from '../../settings/constants';
import Ash from '../Ash';

const Board = () => {
    return(
        <div>
            <Ash />
            <img src="./assets/Background.png" alt="background" width={GAME_SIZE_WIDTH} height={GAME_SIZE_HEIGHT} />
        </div>
    );
}

export default Board;