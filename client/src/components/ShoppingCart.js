
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
        
        <>
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.length === 0 || (!cartItems) ? <div>Cart is empty</div> :
                cartItems.map((item) => (
                    <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                      <button onClick={() => onRemove(item)} className="remove">
                        -
                      </button>{' '}
                      <button onClick={() => onAdd(item)} className="add">
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
                <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${allItemsPrice.toFixed(2)}</div>
                </div>
                {/* <div className="row">
                <div className="col-2">Delivery Fee</div>
                <div className="col-1 text-right">
                    ${delivery_fee}
                </div>
                </div> */}

                <div className="row">
                <div className="col-2">
                    <strong>Total Price including tax</strong>
                </div>
                <div className="col-1 text-right">
                    <strong>${totalPrice.toFixed(2)}</strong>
                </div>
                </div>
                <hr />
                <div className="row">
                <button onClick={handleOrderSubmit}>
                    Submit Order
                </button>
                </div>
            </>
        )}
            </div>
        </>
    )
}

export default ShoppingCart