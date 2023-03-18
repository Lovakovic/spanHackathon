import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase';

const LoginForm = ({handleLoginState}) => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState(false)

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {
      if(email && password){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
  
          console.log("signed in as: " + user)
          setError(false);
          dispatch({type:"LOGIN",payload:user})
          navigate("/");
        })
        .catch((error) => {
          setError(true);
          //console.log(error)
        });
      }
    }

  return (
    <div className="login-form">  
        {error && <span className='alert'>Invalid login!</span>}
        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
        <a onClick={handleLoginState}>Not a user? Register.</a>
    </div>
  )
}

export default LoginForm