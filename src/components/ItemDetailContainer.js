import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetchOne";


function ItemDetailContainer () {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        firestoreFetchOne(id)
            .then(result => setProduct(result))
            .catch(error => console.log(error));
    }, [id]); 

    return (
            <ItemDetail key={product.id} item={product} />
    )
}

export default ItemDetailContainer;