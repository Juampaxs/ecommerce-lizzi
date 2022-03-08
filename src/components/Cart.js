import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
    const context = useContext(CartContext);

    return (
        <div>
            <Link to="/"><button className="btn btn-primary">Seguir comprando</button></Link>
            {
                context.cartList.length > 0 ?
                <button className="btn btn-outline-danger" onClick={context.clear}>Eliminar todos los productos</button> :
                <p>Tu carrito está vacío..</p>
            }
            {
                context.cartList.length > 0 ?
                context.cartList.map(item => {
                    return (
                        <div key={item.id} className="card mb-3">
                            <p>{item.description}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio unitario: ${item.price}</p>
                            <p>Precio total: ${item.price * item.quantity}</p>
                            <img className="card-img-top" src={item.pictureUrl} alt="Cargando..." width="100" height="300" />
                            <button className="btn btn-outline-danger" onClick={() => context.removeItem(item.id)}>Eliminar</button>
                        </div>
                    )
                }) : ''
            }
            {
                context.cartList.length > 0 ? 
                <p className="precio-total">Precio total de la compra: ${context.calcularCostoTotal()}</p> : ''
            }
        </div>
    )
}

export default Cart;