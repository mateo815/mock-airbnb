import React, { useState } from 'react';
// import history from '../../history';
// redux hooks:


function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const handleSubmit = (e) => {
      // e.preventDefault()
      if(password !== passwordConfirm){
          return alert("passwords do not match")
      }
      const newUser = {
          name: name,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm
      }

      fetch("/signup",{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body:JSON.stringify(newUser)
      })
      .then(r=>r.json())
      .then(alert(`Welcome ${newUser.name}`))
  }


    return (
        <div className="signup-form">
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
                    <input onChange={(e) => setName(e.target.value)} type="text"  className="form-control" placeholder="Name" />
                    <label className="form-label" htmlFor="login-pasword-input">Name</label>
                </div>
                <div className="form-outline mb-4">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="login-pasword-input" className="form-control" placeholder="Email" />
                    <label className="form-label" htmlFor="login-pasword-input">Email</label>
                </div>
                <div className="form-outline mb-4">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="login-pasword-input" className="form-control" placeholder="Password" />
                    <label className="form-label" htmlFor="login-pasword-input">Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input onChange={(e) => setPasswordConfirm(e.target.value)} type="password" id="login-pasword-input" className="form-control" placeholder="Confirm Password" />
                    <label className="form-label" htmlFor="login-pasword-input">Confrim Password</label>
                </div>
                <button className="form-button" type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default SignupForm;
