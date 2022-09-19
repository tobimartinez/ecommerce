import React, { useState }  from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item,quantity) =>{
        //console.log('item', item, 'quantity', quantity)
        const newProduct = {
            id:item.id,
            nombre:item.nombre,
            imagen:item.img,
            quantity
        }

        const newArreglo = [...productCartList];
        newArreglo.push(newProduct);
        setProductCartList(newArreglo)
        //setProductCartList([...productCartList,newProduct])
    }


    const removeItem = (itemId)  => {
        const newArreglo = productCartList.filter(producto => producto.id !== itemId);
        setProductCartList(newArreglo)
    }
    return(
        <CartContext.Provider value=
        {{productCartList , addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}




export default CartProvider;

