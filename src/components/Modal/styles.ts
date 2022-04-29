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
    background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);

    button{
        position: relative;
        margin: 12px 310px;
        width: 38px;
        height: 38px;
        font-size: 19px;
        font-family: 'Open Sans', sans-serif;
        background: #F7F9FC;
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
    background: #F7F9FC;
    border-radius: 24px 24px 0px 0px;
`;
export const Title =  styled.h2`
    font-family: 'Open Sans', sans-serif;
    width: 109;
    height: 24;
    color: #2E3A59;
    margin-top: 150px;
    margin-left:  125px;    
`;
export const PropsPok =  styled.div`
    margin-top: 36px;
    display: flex;
    height: 92px;
    width: 360px;
    padding: 0px 36px;
`;

export const Hp =  styled.div`
    width: 96px;
    text-align: center;
    color: #2E3A59;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #2E3A59;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;

`;

export const Altura =  styled.div`
    width: 96px;
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #2E3A59;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
`;

export const Peso =  styled.div`
    width: 96px;
    text-align: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #2E3A59;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
 
`;

export const ValorPok =  styled.div`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #2E3A59;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0px;

`;

export const FooterPok =  styled.button`
    width: 100%;
    text-align: center;
    border: 0px;
    background-color: transparent;
    padding: 32px 24px;
        button{
            margin: 0px 11px;
        }
`;

export const StylePok =  styled.button`
    height: 32px;
    width: 99px;
    border-radius: 42px;
    background: #67AF32;
    border: 0px;
    
`;

export const AtribPok =  styled.button`
    height: 32px;
    width: 99px;
    border-radius: 42px;
    background: #924990;
    border: 0px;
    
`;


