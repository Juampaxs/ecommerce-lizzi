import Item from "./Item";

function ItemList ({ items }) {

    return (
        <div className="item-list">
            {items.length > 0 ? items.map( e => {
                return <Item key={e.id} item={e} /> }) : <p>Cargando...</p>}
        </div>
    );
}

export default ItemList;