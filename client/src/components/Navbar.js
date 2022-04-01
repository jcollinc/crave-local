import React, { useEffect } from 'react'
import { NavLink, useHistory } from "react-router-dom"

function Navbar( { currentUser, setCurrentUser }) {

  useEffect (() => {
    fetch("/current_user")
    .then(r => r.json())
    .then(data => {
      data ? setCurrentUser(data) : console.log("No login registered")
    })
  }, [])
  
  let history = useHistory();

  function handleLogout () {
      fetch(`/logout`, {
          method: "DELETE"
      }) 
      .then( r => { 
          if (r.ok) {
              history.push("/login") 
              setCurrentUser(null)  
          }
      })
  }

  function pleaseLoginMessage () {
    if (!currentUser) {
      window.alert("Please login to access restaurants")
    }
  }

  return (
    <div className="navbar">
      <div className="nav-left">
        <NavLink to={currentUser ? "/restaurants" : "/login"} className="nav-link">
          <h2 
            className="navbar-item"
            onClick={pleaseLoginMessage}
          >
            Restaurants
          </h2>
        </NavLink>
      </div>
      <div className="nav-right">
      {currentUser ? 
        <h2 className="navbar-item"> Hi, {currentUser.name}!</h2> : 
        <NavLink to="/login" className="nav-link">  
          <h2 className="navbar-item">Login</h2>
        </NavLink>}
        {currentUser ? <h2 
          className="navbar-item"
          onClick={handleLogout}
        >
          Logout
        </h2> : null}
        {currentUser ? 
        <NavLink to="/orders" className="nav-link">  
          {currentUser && currentUser.isRestaurant ? <h2 className="navbar-item">See Orders</h2> : null}
        </NavLink> : null  
      }
      </div>
    </div>
  )
}

export default Navbar