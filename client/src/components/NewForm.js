import React, { useState } from 'react'

function NewForm({restaurantId, showForm, setMenuItems, menuItems, setShowForm}) {

  const [formInput, setFormInput] = useState({})

  function handleNewFormInputs (e) {
    const input = e.target.value
    setFormInput({...formInput, [e.target.name]: input, menu_id:restaurantId, restaurant_id:restaurantId})
    console.log(formInput)
  }

  function handleNewFormSubmit (e) {
      e.preventDefault()

      if (showForm) {

          fetch(`/menu_items`, { 
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(formInput)
          })
          .then(r => {
              if(r.ok){
                  r.json()
                  .then(newItem => {
                      setMenuItems([...menuItems, newItem]) 
                  })    
              }
              else {window.alert("Unauthorized")}
          })

          setShowForm(false)
      }
  }


  return (
        <form 
        className="form"  
        onSubmit = {handleNewFormSubmit}
        >
        <label>
            Name:
            <input 
                onChange={handleNewFormInputs} 
                type="text" 
                name="name"
                value={formInput.name}
            />
        </label>
        <label>
            Description:
            <input 
                onChange={handleNewFormInputs} 
                type="text" 
                name="description" 
                value={formInput.description}
            />
        </label>
        <label>
            Price:
            <input 
                onChange={handleNewFormInputs} 
                type="text" 
                name="price" 
                value={formInput.price}
            />
        </label>
        <label>
            Image URL:
            <input 
                onChange={handleNewFormInputs} 
                type="text" 
                name="image_url" 
                value={formInput.image_url}
            />
        </label>
        <input 
            className="button" 
            type="submit" 
            value="Submit" 
        />
    </form>
  )
}

export default NewForm