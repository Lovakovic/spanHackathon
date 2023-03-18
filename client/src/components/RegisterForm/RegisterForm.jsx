import React, { useState,useContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import {AiOutlineMail} from "react-icons/ai";
import {BiLock} from "react-icons/bi";

import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';

const RegisterForm = ({handleLoginState}) => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState(false);

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)


    const handleRegister = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("user registered")
          const user = userCredential.user;
          setError(false)
          dispatch({type:"LOGIN",payload:user})
          navigate("/");
        })
        .catch((error) => {
          console.log(error)
          setError(true)
        });
    }

  return (
    <div className="login-form">
        {error && <span className='alert'>Invalid register data!</span>}
        <h2 id="welcome">Welcome!</h2>
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
        <button class="button" onClick={handleRegister}>Register</button>
        <p class="p">Already a user? <a onClick={handleLoginState} id="userLink">Login</a></p>
    </div>
  )
}

export default RegisterForm