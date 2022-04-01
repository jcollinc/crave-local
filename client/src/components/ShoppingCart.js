
function ShoppingCart ({ cartItems, onAdd, onRemove, menuItems, currentUser, restaurantId}) {
    //struggling with delivery fee, need item we clicked on or restaurant deliv fee from menuItems

    const allItemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    const taxPrice = allItemsPrice * .08
    const totalPrice = allItemsPrice + taxPrice 


    function handleOrderSubmit () {
        window.alert('Order Submitted')
        let cartItemsString = cartItems.map((item) => item.name +" x"+ item.qty).join(", ")
        let newOrder = { 
            user_id: currentUser.id,
            restaurant_id: restaurantId,
            total: totalPrice,
            items: cartItemsString, 
         }
         
         fetch("/orders", {
             method: "POST",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(newOrder)
         })
         .then( r => r.json())
         .then(newPostedOrder => console.log(newPostedOrder))
    }

    return (
        
        <div className="shopping-cart-container">
            <h2>Shopping Cart</h2>
            <div className="shopping-cart-items-container">
                {cartItems.length === 0 || (!cartItems) ? <div>Cart is empty</div> :
                cartItems.map((item) => (
                    <div key={item.id} className="row">
                    <div >
                    <div><strong>{item.name}</strong></div>
                      <button className="minus-button" onClick={() => onRemove(item)}>
                        -
                      </button>{' '}
                      <button className="plus-button" onClick={() => onAdd(item)}>
                        +
                      </button>
                    </div>
        
                    <div className="col-2 text-right">
                      {item.qty} x ${item.price.toFixed(2)}
                    </div>
                  </div>
                ))}

                {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div >
                <div >Items Price</div>
                <div >${allItemsPrice.toFixed(2)}</div>
                </div>
                <div >
                <div >
                    <strong>Total Price including tax</strong>
                </div>
                <div >
                    <strong>${totalPrice.toFixed(2)}</strong>
                </div>
                </div>
                <hr />
                <div className="order-submit">
                    <button className="submit-button" onClick={handleOrderSubmit}>
                        Submit Order
                    </button>
                </div>
            </>
        )}
            </div>
        </div>
    )
}

export default ShoppingCart