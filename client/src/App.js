import React, {useState, useEffect} from 'react'
import './App.css';
import HomePage from './HomePage';
import StartPage from './StartPage'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ListingPage from './ListingPage';
import ProfileInfo from './ProfileInfo';




function App() {

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [location, setLocation] = useState('')
  const [listings, setListings] = useState([])


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

console.log(user)
 

  return (
    <div className='app'>
      <div>
        
      <Switch>
        <Route path={`/users/${user.id}`}>
            <ProfileInfo user={user}  />
        </Route>
        <Route path='/listings/:id'>
              <ListingPage  listings={listings}  user={user} setUser={setUser}/>
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
