import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch";


const ItemListContainer = () => {

    const [products, setProducts] = useState({});
    const {categoryId} = useParams();

    useEffect(() => {
        firestoreFetch(categoryId)
            .then(result => setProducts(result))
            .catch(error => console.log(error));
    }, [categoryId]); 

    return (
        <div className="item-list-container">
            <ItemList items={products}/>
        </div>
        
    )
}

export default ItemListContainer;