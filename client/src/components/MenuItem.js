
import { useState } from "react"

function MenuItem ({menuItemId, item, handleEdit, showEditForm, editForm, handleDeleteItem, onAdd}) {
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
                    <button id={id} className ="button" onClick={handleEdit}> Edit </button>
                    <button id={id} className ="button" onClick={handleDelete}> Delete </button>
                    <button onClick={() => onAdd(item)}> Add To Cart </button>
                </div>
            </div> 
            
        </div>
    )

}

export default MenuItem