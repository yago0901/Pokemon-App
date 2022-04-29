import * as C from './styles';
import { useLayoutEffect } from 'react';

type Props={
    x:number;
    y: number;
    openBallon: Function;
}

export const Balloon2 = ({x, y, openBallon}: Props) => {
    const size = 50;
    const sizeT = 47;

    useLayoutEffect(() => {
            
        const ballon = document.querySelector("#ballon")
        if (ballon){
            ballon.addEventListener( "click", (e)=>
            {
            e.preventDefault()   
            openBallon(true)

            } , false);
        };
       
    }, []);
    

    return(
        <C.Container id="ballon"
            left= {x * size}
            top={y * size}
            size={size}
            sizeT={sizeT}
        >
            
        </C.Container>
    );
}