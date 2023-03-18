import React, { useState } from 'react'

const RegisterForm = ({handleLoginState}) => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

  return (
    <div className="register-form">
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button>Register</button>
        <a onClick={handleLoginState}>Already a user? Login</a>
    </div>
  )
}

export default RegisterForm