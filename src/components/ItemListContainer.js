const ItemListContainer = ({msg}) => {
    return (
        <div>
            {msg}
            <ItemCount stock='5' initial='1' /> 
        </div>
        
    )
}

export default ItemListContainer;