import ItemDetail from '../ItemDetail/ItemDetail';
import react, { useEffect, useState } from 'react';
import info from '../Data/async-mock.js';
import { useParams } from 'react-router-dom';




export const ItemDetailContainer = () => {

    const {productId} = useParams();
    const [item,setItem] = useState({});

    const getData = (id) =>{
        return new Promise((resolve,reject) => {
            const producto = info.find(item=>item.id === parseInt(productId));
            resolve(info)
        })
    }

    useEffect(()=>{
        const getProducto = async() =>{
            const producto = await getData();
            setItem(producto)

        }
        getProducto();
    },[])

    return(
        <div>
            <ItemDetail item={item}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;