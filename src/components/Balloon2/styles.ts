import styled from 'styled-components';

export const Container = styled.div<{left: number, top: number, size: number, sizeT:number}>`
    height: ${props => props.sizeT}px;
    width: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/Search.png');

`;