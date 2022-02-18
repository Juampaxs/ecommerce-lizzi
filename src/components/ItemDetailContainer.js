import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";
import { data } from "../utils/data";
import { useParams } from "react-router-dom";

const getItem = () => {

}

function ItemDetailContainer () {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        customFetch(data.filter(item => item.id === parseInt(id)), 2000)
            .then(result => setProduct(result))
            .catch(error => console.log(error));
    }, [id]); 

    return <div>
        <ItemDetail item={product} />
    </div>
}

export default ItemDetailContainer;