import { useState } from "react";

function ItemCount ({ stock, initial, onAdd })  {
    const [items, setItems] = useState(initial);

    const incrementar = () => {
        if (stock > items) {
            setItems(items+1);
        }
    }

    const decrementar = () => {
        if (items > 0) {
            setItems(items-1);
        }
    }

    const addToCart = () => {
        onAdd(items);
    }

    return (
        <div className="item-count-container">
            <div className="btn-group">
                <button onClick={decrementar}>-</button>
                <div>{items}</div>
                <button onClick={incrementar}>+</button>
                <button onClick={addToCart}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;