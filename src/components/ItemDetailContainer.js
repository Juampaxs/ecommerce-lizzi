import { data } from "../utils/data";
import ItemDetail from "./ItemDetail";

const getItem = () => {

}

function ItemDetailContainer () {
    const [product, setProduct] = useState({});

    useEffect(() => {
        customFetch(data[0], 2000)
            .then(result => setProduct(result))
            .catch(error => console.log(error));
    }, []); 

    return <div>
        <ItemDetail item={product} />
    </div>
}

export default ItemDetailContainer;