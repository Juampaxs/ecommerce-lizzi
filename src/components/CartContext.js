import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) => {
        let found = isInCart(item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                id: item.id,
                description: item.description,
                pictureUrl: item.pictureUrl,
                price: item.price,
                quantity: quantity
            }]);
        } else {
            found.quantity += quantity;
            setCartList([
                ...cartList
            ]);
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
        return cartList.find(element => element.id === id);
    }

    const calcularCantItems = () => {
        let qty = 0;
        cartList.forEach(element => qty = qty + element.quantity);
        return qty;
    }

    const calcularCostoTotal = () => {
        let totalCost = 0;
        cartList.forEach(element => totalCost = totalCost + (element.quantity * element.price));
        return totalCost;
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, isInCart, calcularCantItems, calcularCostoTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;