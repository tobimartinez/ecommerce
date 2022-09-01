import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ itemsList }) => {
    return(
        <div className="containerProductos">
        {itemsList.map((producto) => {
            return (
                <Item className="tarjetaProducto" 
                key={producto.id}
                nombre={producto.nombre}
                description={producto.description} 
                precio={producto.precio}
                img={producto.img}
                stock={producto.stock}
                />
            )
        })}
        </div>
    )
} 

export default ItemList;