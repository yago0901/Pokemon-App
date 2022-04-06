import React from 'react';
import './index.css';

const Ash = () => {
    return(
        <div 
        style={{
            width: 68,
            height: 65,
            backgroundImage:"url(./assets/Ash.png)",
            backgroundRepeat: 'no-repeat',
            animation: 'ash-andando 1s steps(4) infinite'
        }}
        />
    );
}

export default Ash;