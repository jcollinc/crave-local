
import { useState } from "react"

function MenuItem ({setMenuItemId, menuItemId, item, handleEdit, showEditForm, handleDeleteItem, onAdd}) {
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
            <div className="menu-item-card">
                {showEditForm && id == menuItemId ? 
                null :
                <div>
                <p>{name}</p>
                <p>{description}</p> 
                <p>${price}</p>
                </div>}
                <img className="food-img" src={image_url} alt={name}></img> 
                <div className="edit-item-div">
                    <button id={id} className ="button" onClick={(e) => callHandleEdit(e)}> Edit </button>
                    <button id={id} className ="button" onClick={handleDelete}> Delete </button>
                    <button onClick={() => onAdd(item)}> Add To Cart </button>
                </div>
            </div> 
            
        </div>
    )

}

export default MenuItem