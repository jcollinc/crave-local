import { useEffect, useState } from "react"
import OrderCard from "./OrderCard"

function Orders () {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("/orders")
        .then(r => r.json())
        .then(setOrders)
    }, [])

    console.log(orders)

    const SingleOrder = orders.map((order) => <OrderCard order={order}/>) 

    return (
        <div className="orders-container">
            {SingleOrder}
        </div>
    )
}

export default Orders