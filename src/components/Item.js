function Item ({ item }) {
    return (
        <div className="item-container">
            <article>
                <img variant="top" src={item.pictureUrl} />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button>Ver Detalle</button>
            </article>
        </div>
    );
}

export default Item;