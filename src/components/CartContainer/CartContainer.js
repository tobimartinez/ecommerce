import React,{useContext} from "react";
import { CartContext } from "../../Context/CartContext";



export const CartContainer = () => {
    const value = useContext(CartContext);
    return(
        <div>
            CartContainer
            
            <div>
                {value.productCartList.map(item=>(
                    <p>{item.nombre}</p>
                ))}
                
            </div>
            
        </div>
    )

}


export default CartContainer;