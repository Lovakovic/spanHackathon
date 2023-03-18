import React, { useState } from 'react'

const RegisterForm = ({handleLoginState}) => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

  return (
    <div className="login-form">
        <h2 id="welcome">Welcome!</h2>
        <p id="cyberText">Cyber security? Yes</p>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button class="button">Register</button>
        <p class="p">Already a user? <a onClick={handleLoginState} id="userLink">Login</a></p>
    </div>
  )
}

export default RegisterForm