import React, { useState } from 'react';
// import history from '../../history';
// redux hooks:


function SigninForm({setUser, setIsLoggedIn}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        const userLogin = {
            email: email,
            password: password
        }

        fetch('/login',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userLogin)
        })
        // Problem with error handling
        .then(r=>{
            if(r.ok){
                r.json().then(setUser)
                setIsLoggedIn(true)
            }else{
                r.json().then( (d) => {
                    console.log(userLogin)
                    alert("Invalid Username or Password")})
            }
        })
    }
        // .then(d => console.log(d))


    return (
        <div className="sign-in-form">
            <form onSubmit={onSubmit}>
                <div className="form-outline mb-4">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="login-username-input" className="form-control" placeholder="Name" />
                    <label className="form-label" htmlFor="login-username-input">Name</label>
                </div>
                
                <div className="form-outline mb-4">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="signup-password-input" className="form-control" placeholder="Password" />
                    <label className="form-label" htmlFor="signup-password-input">Password</label>
                </div>

                <button className="form-button" type="submit" >Log In</button>
            </form>
        </div>
        );
    }


export default SigninForm;