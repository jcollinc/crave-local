import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {BrowserRouter as Router} from "react-router-dom"

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`;
document.appendChild(script);


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


