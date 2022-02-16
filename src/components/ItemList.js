import Item from "./Item";

function ItemList ({ items }) {

    return (
        <div className="item-list-container">
            {items.length > 0 ? items.map( e => {
                return <div className="item-container"><Item key={e.id} item={e} /></div> }) : ''}
        </div>
    );
}

export default ItemList;