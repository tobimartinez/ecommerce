import react from 'react'

const itemListContainer = ({nombresProductos,contenido}) => {
    return(
        <div>
            <h3>{nombresProductos}</h3>
            <p>{contenido}</p>
        </div>
        
    );
};


export default itemListContainer;