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
        <div className="login-form">
            <h3>Login</h3>
            <form onSubmit={onSubmit}>
                <div className="form-outline mb-4">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="login-username-input" className="form-control" placeholder="Email" />
                    
                </div>

                <div className="form-outline mb-4">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="signup-password-input" className="form-control" placeholder="Password" />
                    
                </div>

                <button type="submit" class="btn btn-secondary">Login</button>
            </form>
        </div>
        );
    }


export default SigninForm;