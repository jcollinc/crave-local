function OrderCard ({order}) {

    const { id, total, user, items } = order
    const { name, address } = user

    return (
        <div className="order-card-container">
            <p>Order Number: {id}</p>
            <p>Total: ${total}</p>
            <p>Name and Address: {name}, {address}</p>
            <p>Items: {items}</p>
        </div>
    )
}

export default OrderCard