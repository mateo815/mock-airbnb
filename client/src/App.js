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
import ListingPage from './ListingPage'
import ListingContainer from './ListingContainer';




function App() {

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [listings, setListings] = useState([])
  const [reservations, setReservations] = useState([])

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
  //     'X-RapidAPI-Key': '383737d655msh5c51b656428ee73p1c3e16jsnf76f5d938716'
  //   }
  // };

  // useEffect(() => {
  //   fetch('https://airbnb13.p.rapidapi.com/search-location?location=United%20States&checkin=2022-05-16&checkout=2022-05-17&adults=1&children=0&infants=0&page=1', options)
  //   .then(response => response.json())
  //   .then(response => setListings(response))
  //   .catch(err => console.error(err));

  // }, [])

  useEffect(() => {
    fetch("/listings")
      .then(response => response.json())
       .then(data => setListings(data))
}, [])

useEffect(() => {
  fetch("/reservations")
    .then(response => response.json())
     .then(data => setReservations(data))
}, [])

const addRes = (r) => {
  const newRes = [...reservations, r]
  setReservations(newRes)
}

 
  // useEffect(() => {
  //   fetch("/listings")
  //     .then(r=>{
  //       if(r.ok){
  //         r.json().then(data => setListings(data))
  //       }else{
  //         r.json().then(console.log)
  //       }
  //     })
  // }, [])

 
  


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
        <StartPage setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
       </Route>
     </Switch>
    )
  }

  return (
    <div>
    <div>
    <Switch>
      <Route path='/listings/:id'>
            <ListingPage addRes={addRes} listings={listings}/>
      </Route>
      <Route path="/">
            <HomePage user ={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} listings={listings} />
      </Route>
    </Switch>
    
    </div>
    </div>
    
  );
}

export default App;
