
const Item = ({id,nombre,description,precio,img,stock}) => {
    return(
        <div>
            <img height='300px' src={img}></img>
            <h3>{nombre}</h3>
            <p>{precio}</p>
            <p>{description}</p>
            <p>------------------------------------------------------------------</p>
        </div>
    )
};


export default Item;