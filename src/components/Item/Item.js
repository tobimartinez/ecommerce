import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({id,nombre,description,precio,img,stock}) => {
    return(
        <div>
            <img height='300px' src={img}></img>
            <h3>{nombre}</h3>
            <p>{precio}</p>
            <p>{description}</p>
            <Link to={`/item/${id}`}>
                <button className="verDetalle">Ver detalle..</button>
            </Link>
            <p>------------------------------------------------------------------</p>
        </div>
    )
};


export default Item;