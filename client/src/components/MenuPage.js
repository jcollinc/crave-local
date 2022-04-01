import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MenuItem from "./MenuItem"
import ShoppingCart from "./ShoppingCart"
import NewForm from "./NewForm"
import EditForm from "./EditForm"


function MenuPage ({restaurants, currentUser}) {
    const {restaurantId} = useParams()
    const [menuItems, setMenuItems] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [restaurant, setRestaurant] = useState({})
    const [cartItems, setCartItems] = useState([])
    const [menuItemId, setMenuItemId] = useState()

    useEffect(() => {
        const currentRestaurant = restaurants.find((restaurant) => restaurant.id === parseInt(restaurantId))
        if (currentRestaurant) {
            setRestaurant(currentRestaurant)
            setMenuItems(currentRestaurant.menu_items)
            debugger
        } 
    }, [restaurants, restaurantId, setRestaurant])

    function showNewItemForm() {
        setShowForm(!showForm)
        setShowEditForm(false)
    }

    function handleEdit (id) {
        setShowEditForm(!showEditForm)
        if (showEditForm && id !== menuItemId) {setShowEditForm(true)}
        setShowForm(false)
        setMenuItemId(null)
        setMenuItemId(id)
    }

    function handleDeleteItem(id) {
        const updatedItems = menuItems.filter(item => item.id !== id)
        setMenuItems(updatedItems)
    }

    let singleMenuItem = menuItems?.map(item => (

            <div key={item.id} className="display-card"> 
                {showEditForm && item.id == menuItemId ? 
                <EditForm 
                    menuItems={menuItems}
                    menuItemId={menuItemId}
                    restaurantId={restaurantId}
                    showEditForm={showEditForm}
                    setMenuItems={setMenuItems}
                    setShowEditForm={setShowEditForm}
                /> : null}
                <MenuItem 
                    item={item} 
                    setMenuItems={setMenuItems}
                    menuItems={menuItems}
                    handleDeleteItem={handleDeleteItem}
                    handleEdit={handleEdit}
                    showEditForm={showEditForm}
                    setMenuItemId={setMenuItemId}
                    onAdd={onAdd}
                    menuItemId={menuItemId}
                    currentUser={currentUser}
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
                {currentUser && currentUser.isRestaurant && currentUser.name == restaurant.name ? 
                <button className="button" id="add-new" onClick={showNewItemForm}>
                    {showForm ? "Cancel" : "Add New Menu Item"}
                </button> : null}
                {showForm ? <NewForm 
                    restaurantId={restaurantId}
                    showForm={showForm}
                    setMenuItems={setMenuItems}
                    menuItems={menuItems}
                    setShowForm={setShowForm}
                /> : null}
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