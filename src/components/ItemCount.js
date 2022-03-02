import { useState } from "react";

function ItemCount ({ stock, initial, onAdd })  {
    const [items, setItems] = useState(initial);

    const incrementar = (e) => {
        if (stock > items) {
            setItems(items+1);
        }
        e.stopPropagation();
    }

    const decrementar = (e) => {
        if (items > 0) {
            setItems(items-1);
        }
        e.stopPropagation();
    }

    return (
        <div className="item-count-container">
            <div className="btn-group">
                <button onClick={decrementar}>-</button>
                <div>{items}</div>
                <button onClick={incrementar}>+</button>
                <button onClick={() => onAdd(items)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;