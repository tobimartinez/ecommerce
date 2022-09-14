import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({producto}) => {
    return(
        <div>
            <img height='300px' src={producto.img}></img>
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <p>{producto.description}</p>
            <Link to={`/item/${producto.id}`}>
                <button className="verDetalle">Ver detalle..</button>
            </Link>
            <p>------------------------------------------------------------------</p>
        </div>
    )
};


export default Item;