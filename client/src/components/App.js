import React from "react";
import { Switch, Route } from "react-router-dom"
import Login from './Login'
import logo from '../logo.svg';
import '../styles/App.css';
import RestaurantFeed from './RestaurantFeed';
import MenuPage from "./MenuPage";
import { useEffect, useState } from "react";

function App() {
  const [restaurantsData, setRestaurantsData] = useState([])

  useEffect(() => {
    fetch("/restaurants")
  .then((r) => r.json())
  .then(setRestaurantsData)
 }, [])


  return (
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
          <Login />
        </Route>
        <Route exact path="/restaurants">
            <RestaurantFeed />
        </Route>
        <Switch> 
          <Route exact path="/restaurants/:restaurantId">
              <MenuPage restaurants={restaurantsData}/>
          </Route>
        </Switch>
      </Switch>
  );
}

export default App;