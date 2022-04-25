import styled from 'styled-components';

export const Container =  styled.div`
    position: absolute;
    width: 360px;
    height: 559px;
    left: calc(50% - 360px/2);
    top: calc(50% - 559px/2 - 0.5px);
    
`;

export const BackgroundModal =  styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 303px;

    /* Primary / Gradient */

    background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);

    button{
        position: relative;
        margin: 12px 310px;
        width: 38px;
        height: 38px;
        font-size: 19px;
        font-family: 'Open Sans', sans-serif;

        /* Neutral / 200 */

        background: #F7F9FC;
        /* Neutral / 600 */

        border: 2px solid #8F9BB3;
        border-radius: 1000px;

    }
    
`;
export const DescriptionModal =  styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 153px;
    bottom: 0px;

    /* Neutral / 200 */

    background: #F7F9FC;
    border-radius: 24px 24px 0px 0px;
`;
export const Title =  styled.h2`
    font-family: 'Open Sans', sans-serif;
    width: 109;
    height: 24;
    color: #2E3A59;
    margin-top: 162px;
    margin-left:  125px;    
`;
export const PropsPok =  styled.div`
    margin-top: 36px;
    background-color: blue;
    display: flex;
    height: 48px;
    width: 360px;
    padding: 0px 36px;
`;

export const Hp =  styled.div`
    background-color: red;
    width: 96px;
`;

export const Altura =  styled.div`
    background-color: green;
    width: 96px;
`;

export const Peso =  styled.div`
    background-color: yellow;
    width: 96px;
`;

