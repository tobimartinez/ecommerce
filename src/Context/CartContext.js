import React, { useState }  from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item,quantity) =>{
        //console.log('item', item, 'quantity', quantity)
        const newProduct = {
            titulo:item.nombre,
            key:item.id,
            quantity
        }
        console.log("newProduct", newProduct)

        const newArreglo = [...productCartList];
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);
    }

    return(
        <CartContext.Provider value={{productCartList , addItem}}>
            {children}
        </CartContext.Provider>
    )
}




export default CartProvider;

