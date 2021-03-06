import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function ItemDetail ({item}) {

    const [itemQuantity, setItemQuantity] = useState(0);
    const add = useContext(CartContext);

    const onAdd = (quantity) => {
        setItemQuantity(quantity);
        add.addToCart(item, quantity);
    }

    return (
        <div className="card">
            <img className="card-img-top" src={item.pictureUrl} alt="Cargando..." />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">${item.price}</p>
                {
                    itemQuantity === 0 ?
                        <ItemCount stock={item.stock} initial={itemQuantity} onAdd={onAdd}/> : 
                        <Link to="/cart"><button className="btn btn-primary">Ir al carrito</button></Link>
                }
            </div>
        </div>
    );
}

export default ItemDetail;