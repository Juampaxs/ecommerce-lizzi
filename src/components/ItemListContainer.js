import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { data } from "../utils/data";
import { customFetch } from "../utils/customFetch";


const ItemListContainer = ({msg}) => {

    const [products, setProducts] = useState({});

    useEffect(() => {
        customFetch(data, 2000)
            .then(result => setProducts(result))
            .catch(error => console.log(error));
    }, []); 

    return (
        <div className="item-list-container">
            {msg}
            <ItemCount stock='5' initial='1' /> 
            <ItemList items={products}/>
        </div>
        
    )
}

export default ItemListContainer;