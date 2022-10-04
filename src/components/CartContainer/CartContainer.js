import React,{useContext,useState} from "react";
import { CartContext } from "../../Context/CartContext";
import {Link} from 'react-router-dom'
import {db} from '../../utils/firebase';
import { collection, addDoc, doc , updateDoc } from "firebase/firestore"


export const CartContainer = () => {
    const {productCartList, removeItem, clearCarrito,totalPrecio} = useContext(CartContext);
    const  [idOrder, setIdOrder] = useState("");
    //console.log(productCartList)
    const sendOrder = (event) =>{
        event.preventDefault();


        const order = {buyer: 
            {name: event.target[0].value, 
            phone: event.target[1].value,
            email: event.target[2].value}, 
            items : productCartList, 
            total: totalPrecio()
        }
        console.log("order",order) 

        const queryRef = collection(db, "orders");

        addDoc(queryRef, order).then(response=>{
            console.log("response",response)
            setIdOrder(response.id)
        });

    }

    const updateOrder = () => {
        const queryRef = doc(db,"orders","5DXwxooDTFtERSKKvi8n");

        updateDoc(queryRef,{
            total:14800
        }).then(response=>console.log(response))
    }
    






    return(
        <div>
            <h1>Carrito</h1>
            {idOrder &&  <p> su orden fue creada, id {idOrder}</p>} 
            <button onClick={updateOrder}>actualizar orden</button>
            
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
                    <form onSubmit={sendOrder}>
                        <label>Nombre:</label>
                        <input type="text" ></input>
                        <label>Numero de telefono:</label>
                        <input type="text"></input>
                        <label>Correo electronico:</label>
                        <input type="email"></input>
                        <button type="submit">Enviar order</button>
                    </form>
                </div>
                :
                <p>el carrito esta vacio hace click <Link to="/">aca</Link> para ir al listado de productos y agrega uno</p>

            }

        </div>
    )

}


export default CartContainer;