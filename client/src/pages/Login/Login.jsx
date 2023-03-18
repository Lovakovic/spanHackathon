import React, { useState } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Login = () => {

    const [showForm,setShowForm] = useState(false);
    const [loginState,setLoginState] = useState(true);

    const handleLoginState = () =>{
        setLoginState(!loginState);
    }

  return (
   <div className="login container">
    {showForm ? (
        loginState ? <LoginForm handleLoginState={handleLoginState}/> : <RegisterForm handleLoginState={handleLoginState}/>) :
    <>
        <div className="left">
        <h1>Lorem, ipsum.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, magnam.</p>
        <button onClick={() => setShowForm(true)}>Login</button>
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