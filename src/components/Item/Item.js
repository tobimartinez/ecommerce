
const Item = ({id,nombre,description,precio,img,stock}) => {
    return(
        <div>
            <img src={img}></img>
            <h2>{nombre}</h2>
            <p>{precio}</p>
            <p>{description}</p>
        </div>
    )
};


export default Item;