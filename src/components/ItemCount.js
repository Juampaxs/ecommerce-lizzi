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
        <div className="item-count-container card-actions">
            <div className="btn-group py-2">
                <button className="btn btn-outline-primary btn-sm" onClick={decrementar}>-</button>
                <button className="btn btn-outline-primary btn-sm disabled">{items}</button>
                <button className="btn btn-outline-primary btn-sm" onClick={incrementar}>+</button>
            </div>
            <button className="btn btn-primary" onClick={() => onAdd(items)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;