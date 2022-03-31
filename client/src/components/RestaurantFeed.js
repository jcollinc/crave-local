import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Filter from "./Filter"


function RestaurantFeed () {
    const [restaurants, setRestaurants] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("/restaurants")
      .then((r) => r.json())
      .then(setRestaurants)
     }, [])

     console.log(restaurants)
    
     const filteredDisplay = restaurants
     .filter((restaurant) => {
         return (
             restaurant.name.toLowerCase().includes(search.toLowerCase()) || restaurant.description.toLowerCase().includes(search.toLowerCase())
         )
     })

        return(
            <>
                <div>
                    <Filter 
                        search={search}
                        setSearch={setSearch}
                    />
                    {filteredDisplay?.map((restaurant) => (
                        <div className="display-card-holder">
                            <RestaurantCard 
                                    key={restaurant.id} 
                                    restaurant={restaurant}
                                />
                            <div className="edit-item-div">
                                <button className="button" id="view-map">
                                    View on Map
                                </button>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </>
        )

}

export default RestaurantFeed
