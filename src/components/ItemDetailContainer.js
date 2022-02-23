import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";
import { data } from "../utils/data";
import { useParams } from "react-router-dom";


function ItemDetailContainer () {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        customFetch(data.find(item => item.id === parseInt(id)), 2000)
            .then(result => setProduct(result))
            .catch(error => console.log(error));
    }, [id]); 

    return (
            <ItemDetail key={product.id} item={product} />
    )
}

export default ItemDetailContainer;