import { Card } from "@material-ui/core";

function Item ({ item }) {
    return (
        <div className="item-container">
            <Card>
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <Card.Footer>{item.price}</Card.Footer>
                <button>Ver Detalle</button>
            </Card>
        </div>
    );
}

export default Item;