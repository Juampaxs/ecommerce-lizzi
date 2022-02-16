import { useState } from "react";

function ItemCount ({ stock, initial })  {
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

    const onAdd = () => {
        alert("agregaste un item");
    }

    return (
        <div className="item-count-container">
            <button onClick={decrementar}>-</button>
            <p>{items}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;