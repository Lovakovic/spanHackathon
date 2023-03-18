import React, { useState,useContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';

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
        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleRegister}>Register</button>
        <a onClick={handleLoginState}>Already a user? Login</a>
    </div>
  )
}

export default RegisterForm