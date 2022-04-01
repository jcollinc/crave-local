

function MenuItem ({restaurant, currentUser, setMenuItemId, menuItemId, item, handleEdit, showEditForm, handleDeleteItem, onAdd}) {
    const {name, description, price, image_url, id} = item
    
    function handleDelete (e) {
        fetch(`/menu_items/${id}`, {
            method: "DELETE"
        }) 
        .then( r => { 
            if (!r.ok) {
                window.alert("Unauthorized")    
            }
            else {handleDeleteItem(id)}
        })
    }

    function callHandleEdit(e) {
        setMenuItemId(e.target.id)
        handleEdit(e.target.id)
    }

    return (
        <div>
            <div className="display-card">
                {showEditForm && id == menuItemId ? 
                null :
                <div>
                <h3>{name}</h3>
                <p>{description}</p> 
                <p>${price}</p>
                </div>}
                <img className="food-img" src={image_url} alt={name}></img> 
                <div className="edit-item-div">
                    {currentUser && currentUser.isRestaurant && currentUser.name == restaurant.name ? 
                    <button 
                        id={id} 
                        className ="button" 
                        onClick={(e) => callHandleEdit(e)}
                    > Edit </button> : null}
                    {currentUser && currentUser.isRestaurant && currentUser.name == restaurant.name ? 
                    <button 
                        id={id} 
                        className ="button" 
                        onClick={handleDelete}
                    > Delete </button> : null}
                </div>
                <div className="add-cart-div">
                    {currentUser && !currentUser.isRestaurant ? 
                        <button 
                            className="button" 
                            onClick={() => onAdd(item)}
                        > Add To Cart </button> : null}
                </div>
            </div> 
            
        </div>
    )

}

export default MenuItem