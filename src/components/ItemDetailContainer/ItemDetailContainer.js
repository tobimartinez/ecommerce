import ItemDetail from '../ItemDetail/ItemDetail';
import react, { useEffect, useState } from 'react';
import info from '../Data/async-mock.js';
import { useParams } from 'react-router-dom';
import {db} from "../../utils/firebase"
import {doc, getDoc} from "firebase/firestore";



export const ItemDetailContainer = () => {

    const {productId} = useParams();
    const [item,setItem] = useState({});

    // const getData = (id) =>{
    //     return new Promise((resolve,reject) => {
    //         const producto = info.find(item=>item.id === parseInt(productId));
    //         resolve(producto)
    //     })
    // }


    // useEffect(()=>{
    //     const getProducto = async() =>{
    //         const producto = await getData();
    //         setItem(producto)
    //     }
    //     getProducto();
    // },[productId])

    useEffect(()=>{
        const getProducto = async() =>{
            const queryRef = doc(db,"items",productId)
            const  response = await getDoc(queryRef);
            const newItem = {
                id:response.id,
                ...response.data()
            }
            setItem(newItem)
        }
        getProducto();
    },[productId])

    return(
        <div>
            <ItemDetail item={item}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;