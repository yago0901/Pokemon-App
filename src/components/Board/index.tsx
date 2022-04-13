import React from 'react';
import Ash from '../Ash';
import './index.css';

const Board = () => {
    return(
        <div className='Container'>
            <Ash />
            <img src="./assets/Background.png" alt="background" />
        </div>
    );
}

export default Board;