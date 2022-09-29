import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import {Link} from 'react-router-dom'


export const CartContainer = () => {
    const {productCartList, removeItem, clearCarrito,totalPrecio} = useContext(CartContext);
    console.log(productCartList)
    const order = {buyer: 
        {name: "maria", 
        phone:"812381231",
        email:"maria@gmail.com"}, 
        items : productCartList, 
    }
        //total}

    return(
        <div>
            <h1>Carrito</h1>
            {
                productCartList.length > 0 ?
                <div>   
                    {productCartList.map(item=>(
                        <div style={{border:'1px solid black',margin:'2px',width:"150px"}}>
                            <p>{item.nombre}</p>
                            <p>Cantidad : {item.quantity}</p>
                            <p>Precio Unitario: ${item.precio}</p>
                            <p>Precio Productos: {item.quantityPrice}</p>
                            <img style={{height:"200px"}} src={item.imagen}></img>
                            <button onClick={()=>removeItem(item.id)}> eliminar producto</button>
                        </div>

                    ))}
                    <button onClick={clearCarrito}>Vaciar el carrito</button>
                    <h5>El precio total es de: ${totalPrecio()}</h5>
                </div>
                :
                <p>el carrito esta vacio hace click <Link to="/">aca</Link> para ir al listado de productos y agrega uno</p>

            }

        </div>
    )

}


export default CartContainer;