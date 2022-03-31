
import { Link } from "react-router-dom"

function RestaurantCard ({restaurant}) {

    const {name, address, description, delivery_fee, hours, image_url, id} = restaurant 

    return (
        <>
            <div className="resto-card-holder">
                <Link to={`/restaurants/${id}`}>
                    <h2 className="resto-name"> {name} </h2>
                    <div> {description} </div>
                    <img className="food-img" src={image_url} alt={name}></img>
                </Link> 
            </div> 
        </>
    )
}

export default RestaurantCard