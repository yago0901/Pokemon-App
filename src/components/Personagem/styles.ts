import styled from 'styled-components';

export const Container =  styled.div<{left: number, top:number, size:number, sidePos:number}>`
    width: 43px;
    height: 50px;
    position: relative;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/AshD.png');
    background-position: 0px ${props => props.sidePos}px;
    
`;