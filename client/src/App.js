import React, {useState, useEffect} from 'react'
import './App.css';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import SearchBar from './SearchBar';
import HomePage from './HomePage';
import Header from './Header';
import StartPage from './StartPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [listings, setListings] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'airbnb-listings-data.p.rapidapi.com',
      'X-RapidAPI-Key': '383737d655msh5c51b656428ee73p1c3e16jsnf76f5d938716'
    }
  };
  
  fetch('https://airbnb-listings-data.p.rapidapi.com/getListingsData?nwLat=29.792697441798765&nwLng=-98.73911255534364&seLat=29.360943802211537&seLng=-98.20696228678895', options)
    .then(response => response.json())
    .then(response => setListings(response))
    .catch(err => console.error(err));

  console.log(listings.message)
  


  useEffect(() => {
    fetch("/me").then(r => {
      if (r.ok){
        r.json()
        .then((user) => { 
          setIsLoggedIn(true)
          setUser(user)
        })
      }
    })
  }
  , [])

  if ((!(user))) {
    return(
     <Switch>
       <Route path="/">
        <StartPage setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
       </Route>
     </Switch>
    )
  }

  return (
    <div>
    <Switch>
      <Route path="/">
            <HomePage user ={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
      </Route>

    </Switch>
    
    </div>
    
  );
}

export default App;
