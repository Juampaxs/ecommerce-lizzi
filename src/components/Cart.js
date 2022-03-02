import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
    const context = useContext(CartContext);
    return (
        <div>
            <Link to="/"><button>Seguir comprando</button></Link>
            {
                context.cartList.length > 0 ?
                <button onClick={context.clear}>Eliminar todos los productos</button> :
                <p>Tu carrito está vacío..</p>
            }
            {
                context.cartList.length > 0 ?
                context.cartList.map(item => {
                    return (
                        <div className="card mb-3">
                            <p>{item.description}</p>
                            <img className="card-img-top" src={item.pictureUrl} alt="Cargando..." width="100" height="300" />
                            <button onClick={() => context.removeItem(item.id)}>Eliminar</button>
                        </div>
                    )
                }) : ''
            }
        </div>
    )
}

export default Cart;