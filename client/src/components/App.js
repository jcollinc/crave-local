import React from "react";
import { Switch, Route } from "react-router-dom"
import Login from './Login'
import logo from '../logo.svg';
import '../styles/App.css';
import RestaurantFeed from './RestaurantFeed';
import MenuPage from "./MenuPage";
import Navbar from "./Navbar"
import Orders from "./Orders"
import { useEffect, useState } from "react";


function App() {
  const [restaurantsData, setRestaurantsData] = useState([])
  const [restaurant, setRestaurant] = useState(null)
  const [menuItems, setMenuItems] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const [error, setError] = useState(null)

  useEffect (() => {
    fetch("/current_user")
    .then(r => r.json())
    .then(data => {
      data ? setCurrentUser(data) : console.log("No login registered") 
    })
  }, [])


  useEffect(() => {
    fetch("/restaurants")
  .then((r) => r.json())
  .then(setRestaurantsData)
 }, [])

  useEffect(() => {
    fetch("/menu_items")
    .then((r) => r.json())
    .then(setMenuItems)
  }, [])


  return (
    <div className="App-container">
      <Navbar 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser} 
      />
      <Switch>
          <Route exact path="/">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
          <Route exact path="/login">
            <Login 
              setCurrentUser={setCurrentUser}
              setError={setError}
              error={error}
            />
          </Route>
          <Route exact path="/restaurants">
              <RestaurantFeed />
          </Route>
          <Route exact path="/restaurants/:restaurantId">
              <MenuPage 
                currentUser={currentUser}
                restaurants={restaurantsData}
                setRestaurant={setRestaurant}
                restaurant={restaurant}
                error={error}
                setError={setError}
              />
          </Route>
          <Route exact path="/orders">
                  <Orders currentUser={currentUser}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
