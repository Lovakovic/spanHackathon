import React, { useEffect, useState } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Login = ({setShowSidebar}) => {

    const [showForm,setShowForm] = useState(false);
    const [loginState,setLoginState] = useState(true);

    useEffect(() => {
        setShowSidebar(false);
    },[setShowSidebar])

    const handleLoginState = () =>{
        setLoginState(!loginState);
    }   

  return (
       <div className="login container">
    {showForm ? (
        loginState ? <LoginForm handleLoginState={handleLoginState}/> : <RegisterForm handleLoginState={handleLoginState}/>) :
    <>
        <div className="left">
        <h1><span>File seems off?</span></h1>
        <div id="gradLine"></div>
        <p>We at TVeZ observe, detect and monitor malicious links, files and data in general.</p>
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