import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SimpleMap from './Map' 
import Filter from "./Filter"


function RestaurantFeed () {
    const [restaurants, setRestaurants] = useState([])
    const [search, setSearch] = useState("")
    const [coords, setCoords] = useState({lat: 30.36, lng: -97.78 })

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

     function handleShowOnMap (id) {
         fetch(`restaurants/${id}/coords`)
         .then(r => r.json())
         .then(coordinates => {
            setCoords(coordinates)
        })
     }

        return(
            <>
                <div>
                    <SimpleMap coords={coords}/>
                    <Filter 
                        search={search}
                        setSearch={setSearch}
                    />
                    <div className="display-card-container">
                        {filteredDisplay?.map((restaurant) => (
                            <div className="display-card-holder">
                                <RestaurantCard 
                                        key={restaurant.id} 
                                        restaurant={restaurant}
                                    />
                                <div className="edit-item-div">
                                    <button 
                                        className="button" 
                                        id="view-map"
                                        onClick={() => handleShowOnMap(restaurant.id)}
                                        >
                                            View on Map
                                    </button>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </>
        )
}

export default RestaurantFeed

