import React, { useState } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {

    const [showForm,setShowForm] = useState(false);

  return (
   <div className="login">
    {showForm ? <LoginForm/> :
    <>
        <div className="left">
        <h1>Lorem, ipsum.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, magnam.</p>
        <button>Login</button>
    </div>
    <div className="right">
        <img src="work-risk-free.svg" alt="work" />
    </div>
    </>
}
   </div>
  )
}

export default Login