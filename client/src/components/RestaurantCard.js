
import { Link } from "react-router-dom"

function RestaurantCard ({restaurant}) {

    const {name, address, description, delivery_fee, hours, image_url, id} = restaurant 

    return (
        <>
            <div className="resto-card">
                <Link to={`/restaurants/${id}`} className="resto-nav-link">
                    <h3> {name} </h3>
                    <p> {description} </p>
                    <img className="resto-img" src={image_url} alt={name}></img>
                </Link> 
            </div> 
        </>
    )
}

export default RestaurantCard