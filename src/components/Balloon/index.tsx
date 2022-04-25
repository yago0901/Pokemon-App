import * as C from './styles';

type Props={
    x:number;
    y: number;
}

export const Balloon = ({x, y}: Props) => {
    const size = 50;
    const sizeT = 47;

    return(
        <C.Container
            left= {x * size}
            top={y * size}
            size={size}
            sizeT={sizeT}
        >
            
        </C.Container>
    );
}