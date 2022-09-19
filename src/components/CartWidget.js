import react from 'react'
import { Link } from 'react-router-dom';
import carrito from './img/carrito.png'

const imagen = () => {
    return(
        <div><Link to="/cart"><img height={'75px'} src={carrito}></img></Link></div>
    );
};

export default imagen;
