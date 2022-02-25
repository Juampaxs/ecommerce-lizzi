import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const context = useContext(CartContext);
    return (
        <div>
            {
                context.cartList.map(item => {
                    return (
                    <div>
                        <p>{item.description}</p>
                        <img src={item.pictureUrl} width="200" height="100" />
                        <button onClick={() => context.removeItem(item.id)}>Eliminar</button>
                    </div>);
                })
            }
        </div>
    )
}

export default Cart;