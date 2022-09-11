import react from 'react';
import info from '../Data/async-mock';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

export const ItemDetail = ({ data }) => {
    return(
        <div>
            <h1>detalle</h1>
            <div>
                <img src={data.img}/>
                <h2>{data.nombre}</h2>
            </div>
        </div>
    )   
}


export default ItemDetail;