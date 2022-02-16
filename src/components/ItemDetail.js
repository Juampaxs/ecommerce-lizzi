function ItemDetail ({item}) {
    return (
        <div>
            <section>
                <img variant="top" src={item.pictureUrl} />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </section>
        </div>
    )
}

export default ItemDetail;