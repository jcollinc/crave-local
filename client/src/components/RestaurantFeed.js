import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SimpleMap from './Map' 
import Filter from "./Filter"


function RestaurantFeed () {
    const [restaurants, setRestaurants] = useState([])
    const [showMap, setShowMap] = useState(false)
    const [search, setSearch] = useState("")
    const [coords, setCoords] = useState({lat: 30.36, lng: -97.78 })

    useEffect(() => {
        fetch("/restaurants")
      .then((r) => r.json())
      .then(setRestaurants)
     }, [])
    
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
            setShowMap(true)
        })
     }

     function toggleMap () {
         setShowMap(!showMap)
     }

        return(
            <>
                <div>
                    <div className="map-div">
                        {showMap ? <SimpleMap coords={coords}/> : null}
                    </div>
                    <div id="filter-map-toggle">
                    <Filter 
                        search={search}
                        setSearch={setSearch}
                    />
                    <button 
                        className="button"
                        onClick={toggleMap}
                    >{showMap ? "Hide Map" : "Show Map"}</button>
                    </div>
                    <div className="resto-container">
                        {filteredDisplay?.map((restaurant) => (
                            <div className="resto-card-div" key={restaurant.id} >
                                <div className="resto-card-holder">
                                    <RestaurantCard 
                                        restaurant={restaurant}
                                    />
                                </div>
                                <div className="view-map-div">
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

