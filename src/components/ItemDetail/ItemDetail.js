import react from 'react';
import info from '../Data/async-mock';
import Item from '../Item/Item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

export const ItemDetail = ({}) => {
    return(

        <div>
            <p>item detail</p>
            {info.map((item)=> {
                
                <div>
                    <img>{item.img}</img>
                    <h4>{item.nombre}</h4>
                    <p>{item.precio}</p>
                </div>
            })}
        </div>

        /*
        <div>
            <p>item detail</p>
            <div>
                <img src={item.img}></img>
            </div>
            <div>
                <h4>{item.nombre}</h4>
                <p>{item.precio}</p>
            </div>
        </div>   */

















        /*{<div>
            <h1>Detalle</h1>
            <div>
                <img height="300px"src={item.img}/>
                <h2>{item.nombre}</h2>
                <p>{item.precio}</p>
            </div>
        </div>}*/
    )   
}


export default ItemDetail;