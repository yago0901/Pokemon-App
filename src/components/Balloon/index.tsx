import * as C from './styles';
import { useLayoutEffect } from 'react';

type Props={
    x:number;
    y: number;
    openModal: Function;
}

export const Balloon = ({x, y, openModal}: Props) => {
    const size = 50;
    const sizeT = 47;

    useLayoutEffect(() => {
            
        const ballon = document.querySelector("#ballon")
        console.log(ballon)
        if (ballon){
            ballon.addEventListener( "click", (e)=>
            {
            e.preventDefault()   
            openModal(true)

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