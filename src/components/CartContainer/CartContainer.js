import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";



export const CartContainer = () => {
    const {productCartList, removeItem} = useContext(CartContext);
    return(
        <div>
            CartContainer
            
            <div>
                
                {productCartList.map(item=>(
                    <>
                        <p>{item.nombre} -  {item.quantity}</p>
                        <button onClick={()=>removeItem(item.id)}> eliminar producto</button>
                    </>
                ))}
                
            </div>
            
        </div>
    )

}


export default CartContainer;