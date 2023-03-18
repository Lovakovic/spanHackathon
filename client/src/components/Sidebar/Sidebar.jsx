import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import {BsBarChartLine,BsFillPersonFill} from "react-icons/bs";
import {AiOutlineSafety,AiOutlineLaptop} from "react-icons/ai";
import {FaNetworkWired} from "react-icons/fa";
import {IoLogOutOutline} from "react-icons/io5";

import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';

const Sidebar = () => {

    const {currentUser} = useContext(AuthContext)
    let navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() =>{
            //Sign-out successful.
            localStorage.setItem("user",null)
            console.log("signed out")
            navigate("/login")
        }).catch((error) => {
            //An error happened
            console.log(error)
        })
    }

  return (
    <div className="sidebar">
        <div className="top">
            <div className="icon">
                <BsBarChartLine/>
            </div>

            <div className="icon">
                <AiOutlineSafety/>
            </div>

            <div className="icon">
                <AiOutlineLaptop/>
            </div>
            <div className="icon">
                <FaNetworkWired/>
            </div>
            <div className="icon">
                <BsFillPersonFill/>
            </div>
        </div>
        <div className="bottom">
            <div className="icon" onClick={handleLogout}>
                <IoLogOutOutline/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar