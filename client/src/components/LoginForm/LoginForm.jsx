import React, { useState } from 'react'

const LoginForm = ({handleLoginState}) => {

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

  return (
    <div className="login-form">
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button>Login</button>
        <a onClick={handleLoginState}>Not a user? Register.</a>
    </div>
  )
}

export default LoginForm