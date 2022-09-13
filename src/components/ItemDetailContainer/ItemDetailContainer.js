import ItemDetail from '../ItemDetail/ItemDetail';
import react, { useEffect, useState } from 'react';
import info from '../Data/async-mock.js';






export const ItemDetailContainer = () => {
     
    const [data, setData] = useState([]);
        
    const getData = new Promise((resolve, reject) => {

        setTimeout( () => {
            resolve(info);
        },2000) 
    });
    useEffect( () => {

        getData.then((res) => {
            setData(res);
        }) 

    }, [])

    return(
        <>
        {data.map((item)=> <ItemDetail key={item.id} item={item}></ItemDetail>)}
        </>
    );
}

export default ItemDetailContainer;