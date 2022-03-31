import { useEffect, useState } from "react"
import OrderCard from "./OrderCard"

function Orders ({currentUser}) {
    const [orders, setOrders] = useState([])

    //fetch order if restaurant name matches user name
    useEffect(() => {
        fetch("/orders")
        .then(r => r.json())
        .then(setOrders)
    }, [])

    console.log(orders)

    const SingleOrder = orders.map((order) => {
        if (order.restaurant.name === currentUser.name)
            return (<OrderCard order={order}/>)
        else 
         return (null)
    }) 

    return (
        <div className="orders-container">
            {SingleOrder}
        </div>
    )
}

export default Orders