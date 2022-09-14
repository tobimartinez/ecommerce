import react, { useState } from 'react';
import info from '../Data/async-mock';
import Item from '../Item/Item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemCount from '../ItemCount';
export const ItemDetail = ({ item }) => {

    const[compra,Setcompra]= useState(0);



    const onAdd = (cantidad) =>{

        Setcompra(cantidad)
    }


    return(

        
        <div>
            
            <h1>Detalle</h1>
            <div>

                <img height="300px"src={item.img}/>
                <h2>{item.nombre}</h2>
                <p>{item.precio}</p>
                <p>{item.description}</p>
                <div>
                    <p>Compraste {compra}  unidades</p>
                </div>
                <ItemCount stock='10' initial='1' onAdd={onAdd}/>
            </div>
        </div>
    )   
}


export default ItemDetail;