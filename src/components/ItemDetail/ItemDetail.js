import react from 'react';
import info from '../Data/async-mock';
import Item from '../Item/Item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

export const ItemDetail = ({ item }) => {
    return(
        /*<div>
            <p> item detail</p>
            <div><img src={item.img}></img></div>
            <div>
                <h4>{item.nombre}</h4>
                <h5> {item.precio}</h5>
            </div>
        </div>*/
        /*<div>             //casi funciona
            <p>Item Detail</p>
            {
                info.map(producto=>(
                    <Item  key={item.id}
                    item={item}
                    imagen={item.img}
                    />
                ))
            }
        </div>*/
        /*<div>
            <p>item detail</p>
            {item.map((producto)=> {
                
                <Item
                key={producto.id}
                imagen={producto.img}
                nombre={producto.nombre}
                precio={producto.precio}
                ></Item>
            })}
        </div>*/

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