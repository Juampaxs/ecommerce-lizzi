import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCartList([
                ...cartList,
                {
                id: item.id,
                description: item.description,
                pictureUrl: item.pictureUrl,
                quantity: quantity
            }]);
        } else {
            item.quantity += quantity;
        }
    }

    const removeItem = (id) => {
        let data = cartList.filter(item => item.id !== id);
        setCartList(data);
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) => {
        const elem = cartList.find(element => element.id === id);
        if (elem !== undefined) {
            return true;
        }
        return false;
    }

    const calcularCantItems = () => {
        
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;