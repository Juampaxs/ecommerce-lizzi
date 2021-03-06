import { Link } from 'react-router-dom';

function Item ({ item }) {
    return (
            <div className="card">
                <img className="card-img-top" src={item.pictureUrl} alt="Cargando..." width="500" height="400" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price}</p> 
                    <p></p>
                    <Link to={`/item/${item.id}`} className="btn btn-primary">Ver Detalle</Link>
                </div>
            </div>
    );
}

export default Item;