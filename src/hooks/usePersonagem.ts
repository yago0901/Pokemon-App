import { useState } from 'react';
import { PersonagemSides } from '../types/PersonagemSides';

export const usePersonagem = () => {
    const [pos, setPos] = useState({ x:9, y:6});
    const [side, setSide] = useState<PersonagemSides>('down');

    // constantes de movimento com a alteração na coordenada x e y
    const moveLeft = () => {
        setPos(pos => ({
            x: pos.x -1,
            y:pos.y
        }));
        setSide('left');
    }
    const moveRight = () => {
        setPos(pos => ({
            x: pos.x +1,
            y:pos.y
        }));
        setSide('right');
    }
    const moveUp = () => {
        setPos(pos => ({
            x: pos.x ,
            y:pos.y -1
        }));
        setSide('up');
    }
    const moveDown = () => {
        setPos(pos => ({
            x: pos.x ,
            y:pos.y +1
        }));
        setSide('down');
    }

    return {
        x: pos.x,
        y:pos.y,
        side,
        moveLeft,
        moveRight,
        moveDown,
        moveUp
    };

}