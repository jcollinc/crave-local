import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MenuItem from "./MenuItem"
import ShoppingCart from "./ShoppingCart"


function MenuPage ({restaurants, currentUser}) {
    const {restaurantId} = useParams()
    const [menuItems, setMenuItems] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [formInput, setFormInput] = useState({})
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormInput, setEditFormInput] = useState({})
    const [restaurant, setRestaurant] = useState({})
    const [cartItems, setCartItems] = useState([])
    const [menuItemId, setMenuItemId] = useState()

    useEffect(() => {
        const currentRestaurant = restaurants.find((restaurant) => restaurant.id === parseInt(restaurantId))
        if (currentRestaurant) {
            setRestaurant(currentRestaurant)
            setMenuItems(currentRestaurant.menu_items)
        } 
    }, [restaurants, restaurantId, setRestaurant])

    function showNewItemForm() {
        setShowForm(!showForm)
        setShowEditForm(false)
    }

    // Form for creating a new menu item

    const newForm = 
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

    // Form for updating existing menu items

    let itemToUpdate = menuItems.find(item => item.id == menuItemId)

    const editForm = 
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

    function handleEditFormInputs (e) {
        const input = e.target.value
        setEditFormInput({...editFormInput, [e.target.name]: input, menu_id:restaurantId, restaurant_id:restaurantId})
        console.log(editFormInput)
    }

    function handleEdit (e) {
        setShowEditForm(!showEditForm)
        setShowForm(false)
        setMenuItemId(null)
        setMenuItemId(e)
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
    
    function handleDeleteItem(id) {
        const updatedItems = menuItems.filter(item => item.id !== id)
        setMenuItems(updatedItems)
    }

    let singleMenuItem = menuItems?.map(item => (

            <div key={item.id} className="display-card"> 
                {showEditForm && item.id == menuItemId ? editForm : null}
                <MenuItem 
                    item={item} 
                    setMenuItems={setMenuItems}
                    menuItems={menuItems}
                    handleDeleteItem={handleDeleteItem}
                    handleEdit={handleEdit}
                    showEditForm={showEditForm}
                    setMenuItemId={setMenuItemId}
                    editForm={editForm}
                    onAdd={onAdd}
                    menuItemId={menuItemId}
                />
            </div>
    ))

    
    function onAdd(item) {
        const exist = cartItems.find((cartItem) => cartItem.id === item.id)
        if (exist) {
            setCartItems(
                cartItems.map((cartItem) => 
                    cartItem.id === item.id ? {...exist, qty: exist.qty +1} : cartItem
                )
            )
        } else {
            setCartItems([...cartItems, { ...item, qty: 1}])
        }
    }

    function onRemove(item) {
        const exist = cartItems.find((cartItem) => cartItem.id === item.id)
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
        } else {
          setCartItems(
            cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...exist, qty: exist.qty - 1 } : cartItem
            )
          )
        }
      }

    return(
        <div>
            <div id="add-new-div">
                <button className="button" id="add-new" onClick={showNewItemForm}>
                    {showForm ? "Cancel" : "Add New Menu Item"}
                </button>
                {showForm ? newForm : null}
            </div>
            <div>
                <div className="display-card-holder">{singleMenuItem}</div> 
            {cartItems.length > 0 ? <ShoppingCart 
                currentUser={currentUser} 
                restaurantId={restaurantId}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove} 
            /> : null}
            </div>

        </div>
    )
}

export default MenuPage