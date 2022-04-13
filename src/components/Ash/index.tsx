import './index.css';
import { TILE_SIZE } from '../../settings/constants';


const Ash = () => {
    return(
        <div 
        style={{
            width: TILE_SIZE,
            height: 65,
            backgroundImage:"url(./assets/Ash.png)",
            backgroundRepeat: 'no-repeat',
            animation: 'ash-andando 1s steps(4) infinite',
            position: 'absolute' ,
            bottom: 64 * 0,
            left: 64 * 0,
        }}
        />
    );
}

export default Ash;