import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

function Item ({ item }) {
    return (
            <div className="card col-md-4">
                <img className="card-img-top" src={item.pictureUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.price}</p>
                    <ItemCount stock='5' initial='1' /> 
                    <p></p>
                    <Link to={'/item/' + item.id} className="btn btn-primary">Ver Detalle</Link>
                </div>
            </div>
    );
}

export default Item;