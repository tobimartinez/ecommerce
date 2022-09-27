import React, { useState }  from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item,quantity) =>{

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

    //const clearCarrito = () => setProductCartList([]);

    function IsInCart(id) {
        return productCartList.find(producto => producto.id === id) ? true : false;
    }
    return(
        <CartContext.Provider value=
        {{productCartList , addItem, removeItem , IsInCart}}>
            {children}
        </CartContext.Provider>
    )
}




export default CartProvider;

