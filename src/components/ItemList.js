import Item from "./Item";

function ItemList ({ items }) {

    return (
        <div>
            {items.length > 0 ? items.map( e => {
                return <div><Item key={e.id} item={e} /></div> }) : ''}
        </div>
    );
}

export default ItemList;