import ItemDetail from '../ItemDetail/ItemDetail';
import react, { useEffect, useState } from 'react';
import info from '../Data/async-mock.js';






export const ItemDetailContainer = () => {
     
    const [data, setData] = useState({});
        
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(info);
            }, 3000);
        })

        getData.then(res => setData(res));

    },[])
    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;