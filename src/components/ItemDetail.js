function ItemDetail ({item}) {
    return (
        <div className="card col-md-6">
            <img className="card-img-top" src={item.pictureUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail;