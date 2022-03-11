import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import db from "../utils/firebaseConfig";
import { CartContext } from "./CartContext";

const Cart = () => {
    const context = useContext(CartContext);
    const createOrder = () => {
        let order = {
            buyer: {
                email: 'juan.lizzi@mail.com',
                name: 'Juan Lizzi',
                phone: '1122334455'
            },
            items: context.cartList.map(e => {
                return {
                    id: e.id,
                    price: e.price,
                    title: e.title,
                    quantity: e.quantity
                }
            }),
            date: serverTimestamp(),
            total: context.calcularCostoTotal()
        };
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
    
        createOrderInFirestore()
            .then(result => {
                alert('Tu orden ha sido creada: ' + result.id);
                context.cartList.map(async (item) => {
                    const itemRef = doc(db, "products", item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.quantity)
                    })
                })
                context.clear();
            })
            .catch(error => console.log(error));

    }

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
                <div>
                    <p className="precio-total">Precio total de la compra: ${context.calcularCostoTotal()}</p>
                    <button className="btn btn-outline-primary" onClick={createOrder}>Finalizar compra</button>
                </div> : ''
            }
        </div>
    )
}

export default Cart;