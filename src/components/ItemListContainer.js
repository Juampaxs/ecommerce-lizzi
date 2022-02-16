import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";

const products = [ 
    { 
        id: 1,
        title: 'título 1',
        description: 'descripción 1',
        price: 2,
        pictureUrl: 'https://www.freepik.es/foto-gratis/vista-superior-delicioso-pastel-miel-te-piso-ligero-pastel-dulce-galletas-azucar_16945622.htm#query=restaurante&position=15&from_view=search'
    },
    { 
        id: 2,
        title: 'título 2',
        description: 'descripción 2',
        price: 1,
        pictureUrl: 'https://www.freepik.es/foto-gratis/vista-superior-delicioso-pastel-miel-te-piso-ligero-pastel-dulce-galletas-azucar_16945622.htm#query=restaurante&position=15&from_view=search'
    },
    { 
        id: 3,
        title: 'título 3',
        description: 'descripción 3',
        price: 5,
        pictureUrl: 'https://www.freepik.es/foto-gratis/vista-superior-delicioso-pastel-miel-te-piso-ligero-pastel-dulce-galletas-azucar_16945622.htm#query=restaurante&position=15&from_view=search'
    }
]

const getProducts = (data, error) => {
    return new Promise ((resolve, reject) => {
        if (data) {
            resolve(data);
        } else {
            reject(error);
        }
    });
};


const ItemListContainer = ({msg}) => {

    const [dato, setDato] = useState({});

    useEffect(() => {
        setTimeout (() => {
            getProducts(products, 'error')
                .then(data => setDato(data))
                .catch(error => console.log(error));
        }, 2000);
    }, []); 

    return (
        <div className="item-list-container">
            {msg}
            <ItemCount stock='5' initial='1' /> 
            <ItemList items={dato}/>
        </div>
        
    )
}

export default ItemListContainer;