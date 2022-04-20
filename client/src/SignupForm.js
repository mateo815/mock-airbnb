import React, { useState } from 'react';



function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const handleSubmit = (e) => {
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
      .then(alert(`Welcome ${newUser.name}!`))
  }


    return (
        <div className="signup-form">
            <h3>Signup</h3>
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
                    <input onChange={(e) => setName(e.target.value)} type="text"  className="form-control" placeholder="Name" />
                    
                </div>
                <div className="form-outline mb-4">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="login-pasword-input" className="form-control" placeholder="Email" />
                    
                </div>
                <div className="form-outline mb-4">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="login-pasword-input" className="form-control" placeholder="Password" />
                    
                </div>
                <div className="form-outline mb-4">
                    <input onChange={(e) => setPasswordConfirm(e.target.value)} type="password" id="login-pasword-input" className="form-control" placeholder="Confirm Password" />
                    
                </div>
                <button className="form-button" type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default SignupForm;
