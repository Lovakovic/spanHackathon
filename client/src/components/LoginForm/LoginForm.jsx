import React, { useState } from 'react'

const LoginForm = ({handleLoginState}) => {

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

  return (
    <div className="login-form">
        <h2 id="welcome">Welcome back!</h2>
        <p id="cyberText">Cyber security? Yes</p>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button class="button">Login</button>
        <p class="p">Not a user? <a onClick={handleLoginState} id="userLink">Register</a></p>
    </div>
  )
}

export default LoginForm