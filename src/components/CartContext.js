import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([2]);

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
        }
    }

    const removeItem = (id) => {
        //remover item
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) => {
        const elem = cartList.find(element => element.id = id);
        if (elem != undefined) {
            return true;
        }
        return false;
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;