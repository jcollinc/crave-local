import React, { useState } from 'react'

function EditForm({menuItems, menuItemId, restaurantId, showEditForm, setMenuItems, setShowEditForm}) {

  const [editFormInput, setEditFormInput] = useState({})
  let itemToUpdate = menuItems.find(item => item.id == menuItemId)


  function handleEditFormInputs (e) {
    const input = e.target.value
    setEditFormInput({...editFormInput, [e.target.name]: input, menu_id:restaurantId, restaurant_id:restaurantId})
    console.log(editFormInput)
}

  function handleEditFormSubmit (e) {
    e.preventDefault()

    if (showEditForm && itemToUpdate.id == menuItemId) {
        console.log(itemToUpdate.id)
        console.log(menuItemId)
        fetch(`/menu_items/${menuItemId}`, { 
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editFormInput)
        })
        .then(r => r.json())
        .then(newItem => {
            const updatedItems = menuItems.map((item) => {
                if (item.id === newItem.id) {
                  console.log(newItem)
                  return newItem;
                } else {
                  return item;
                }
              })
            setMenuItems(updatedItems)
            setEditFormInput({})
            setShowEditForm(false)
        })
    }
  }
  
  
  return (
    <form
        className="form"  
        onSubmit = {handleEditFormSubmit}
    >
        <label>
            Name:
            <input 
                onChange={handleEditFormInputs} 
                type="text" 
                name="name"
                value={editFormInput.name}
                defaultValue={
                    itemToUpdate ? itemToUpdate.name : ""
                }
            />
        </label>
        <label>
            Description:
            <input 
                onChange={handleEditFormInputs} 
                type="text" 
                name="description" 
                value={editFormInput.description}
                defaultValue={
                    itemToUpdate ? itemToUpdate.description : ""
                }
            />
        </label>
        <label>
            Price:
            <input 
                onChange={handleEditFormInputs} 
                type="text" 
                name="price" 
                value={editFormInput.price}
                defaultValue={
                    itemToUpdate ? itemToUpdate.price : ""
                }
            />
        </label>
        <label>
            Image URL:
            <input 
                onChange={handleEditFormInputs} 
                type="text" 
                name="image_url" 
                value={editFormInput.image_url}
                defaultValue={
                    itemToUpdate ? itemToUpdate.image_url : ""
                }
            />
        </label>
        <input 
            className="button" 
            type="submit" 
            value="Save" 
        />
    </form>
  )
}

export default EditForm