import react from 'react'
import ItemCount from '../components/ItemCount.js';


const itemListContainer = ({nombresProductos,contenido}) => {

    const onAdd = (quantity ) =>{
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <div>
            <h3>{nombresProductos}</h3>
            <p>{contenido}</p>
            <ItemCount stock='10' initial='1' onAdd={onAdd}/>
        </div>
        
    );
};


export default itemListContainer;