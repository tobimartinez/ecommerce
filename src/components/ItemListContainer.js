import react from 'react'
import ItemCount from './ItemCount';


const itemListContainer = ({nombresProductos,contenido}) => {
    return(
        <div>
            <h3>{nombresProductos}</h3>
            <p>{contenido}</p>
            <ItemCount stock='10' initial='1'/>
        </div>
        
    );
};


export default itemListContainer;