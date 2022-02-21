import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";
import { data } from "../utils/data";
import { useParams } from "react-router-dom";


function ItemDetailContainer () {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        customFetch(data.filter(item => item.id === parseInt(id)), 2000)
            .then(result => {
                setProduct(result);
                console.log(result);
                console.log(product);
            }
                )
            .catch(error => console.log(error));
    }, [id]); 

    return (
        <div>
            {product.length == 1 ? product.map( e => {
            return <ItemDetail key={e.id} item={e} /> }) : ''}
        </div>
    )
}

export default ItemDetailContainer;