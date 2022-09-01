import react from 'react'
import ItemCount from '../components/ItemCount.js';
import data from './Data/async-mock';
import ItemList from './ItemList/ItemList.js';
import { useState, useEffect } from 'react';

const ItemListContainer = ({nombresProductos,contenido}) => {

    const [items,setItems]= useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        },2000) 
    });


    useEffect( () => {
        getData.then((result) => {
            setItems(result);
            console.log(result)
        }) 
    }, [])
        






    const onAdd = (quantity ) =>{
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <div>
            <h3>{nombresProductos}</h3>
            <p>{contenido}</p>
            <ItemCount stock='10' initial='1' onAdd={onAdd}/>
            <ItemList itemsList={items} />

        </div>
    );
};


export default ItemListContainer;