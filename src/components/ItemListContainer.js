import react from 'react'
import ItemCount from '../components/ItemCount.js';
import info from './Data/async-mock';
import ItemList from './ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({nombresProductos,contenido}) => {

    const {categoryId} =  useParams();
    const [items,setItems]= useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(info);
            console.log(info)
        },2000) 
    });


    useEffect( () => {
        getData.then((result) => {
            if(categoryId){
                const newProductos = result.filter( item=> item.categoria === categoryId);
                setItems(newProductos);
            }else{
                setItems(result)
            }
           
        }) 
    }, [categoryId])
        






    const onAdd = (quantity ) =>{
        console.log(`Compraste ${quantity} unidades`);
    }
    
    return(
        
        <div>
            <h3>{nombresProductos}</h3>
            <p>{contenido}</p>
            <ItemCount stock='10' initial='1' onAdd={onAdd}/>

            <h2 className='titulo'>Te dejamos una muestra de nuestros productos!</h2>
            <ItemList itemsList={items} />

        </div>
    );
};


export default ItemListContainer;