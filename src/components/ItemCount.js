
import { useState } from 'react';

const ItemCount = () => {
    function Producto ({stock,initial,onAdd}){
        const {contador,setContador}=useState(initial);
        const suma = () =>{
            setContador(contador + 1);
        }
        const resta = () =>{
            setContador(contador -1);
        }
        return(
            <div>
                <h3>Stock de remera azul</h3>
                <p>La cantidad de stock que tenemos es {stock}</p>
                <p>{contador}</p>
                <button onClick={suma}>+</button>
                <button onClick={resta}>-</button>
            </div>
        );
    }
}

export default ItemCount;

