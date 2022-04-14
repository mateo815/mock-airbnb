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
  const [location, setLocation] = useState('')
  const [listings, setListings] = useState([])







const onSubmit = (e) => {
  e.preventDefault()
  
  fetch("/search", {
    method:'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({location: location})
  })
  .then((r) => r.json())
  .then(data => setListings(data))
}


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
    },[])

  

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
              <ListingPage  listings={listings} />
        </Route>
        <Route path="/">
              <HomePage user ={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} listings={listings} onSubmit={onSubmit} setLocation={setLocation} />
        </Route>
      </Switch>
      
      </div>
    </div>
    
  );
}

export default App;
