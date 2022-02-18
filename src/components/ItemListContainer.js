import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { data } from "../utils/data";
import { customFetch } from "../utils/customFetch";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [products, setProducts] = useState({});
    const {categoryId} = useParams();

    useEffect(() => {
        if (categoryId === undefined) {
            customFetch(data, 2000)
                .then(result => setProducts(result))
                .catch(error => console.log(error));
        } else {
            customFetch(data.filter(item => item.categoryId === categoryId), 2000)
                .then(result => setProducts(result))
                .catch(error => console.log(error));
        }
    }, [categoryId]); 

    return (
        <div className="item-list-container">
            <ItemList items={products}/>
        </div>
        
    )
}

export default ItemListContainer;