import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {signInWithEmailAndPassword } from "firebase/auth";
import {AiOutlineMail} from "react-icons/ai";
import {BiLock} from "react-icons/bi";
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
        <h2 id="welcome">Welcome back!</h2>
        <p id="cyberText">Cyber security? Yes</p>
        <div className="input-wrapper">
          <label htmlFor="email">
            <AiOutlineMail/>
          </label>
         <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">
            <BiLock/>
          </label>
          <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button class="button" onClick={handleLogin}>Login</button>
        <p class="p">Not a user? <a onClick={handleLoginState} id="userLink">Register</a></p>
    </div>
  )
}

export default LoginForm