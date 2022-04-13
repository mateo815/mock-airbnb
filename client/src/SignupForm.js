import React, { useState } from 'react';
// import history from '../../history';
// redux hooks:


function SignupForm(props) {
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
                <div className="field">
                    <label>Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="field">
                    <label>Password Confirmation</label>
                    <input type="password" onChange={(e) => setPasswordConfirm(e.target.value)} />
                </div>
                <button className="form-button" type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default SignupForm;
