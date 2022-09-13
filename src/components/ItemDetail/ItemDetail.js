import react from 'react';
import info from '../Data/async-mock';
import Item from '../Item/Item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

export const ItemDetail = ({ item }) => {
    return(
        <div>
            <h1>Detalle</h1>
            <div>
                <img height="300px"src={item.img}/>
                <h2>{item.nombre}</h2>
                <p>{item.precio}</p>
            </div>
        </div>
    )   
}


export default ItemDetail;