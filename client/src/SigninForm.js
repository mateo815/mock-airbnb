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
        <div className="signin-form">
            <form className='form' onSubmit={onSubmit}>
                <div className="field">
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="form-button" type="submit" >Log In</button>
            </form>
        </div>
        );
    }


export default SigninForm;