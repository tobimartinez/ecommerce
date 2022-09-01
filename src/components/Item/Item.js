
const Item = ({id,nombre,description,precio,img,stock}) => {
    return(
        <div>
            <img height='300px' src={img}></img>
            <h2>{nombre}</h2>
            <p>{precio}</p>
            <p>{description}</p>
            <p>------------------------------------------------------------------</p>
        </div>
    )
};


export default Item;