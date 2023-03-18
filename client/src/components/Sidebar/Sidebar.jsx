import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';

import {BsBarChartLine,BsFillPersonFill} from "react-icons/bs";
import {AiOutlineSafety,AiOutlineSecurityScan,AiOutlineBell} from "react-icons/ai";
import {RxMagnifyingGlass} from "react-icons/rx";
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
            <div className="">
                <NavLink className={({ isActive }) => (isActive ? "selected" : "icon")}
                        to="/">
                    <BsBarChartLine/>
                </NavLink>
            </div>

            <div className="">
                <NavLink className={({ isActive }) => (isActive ? "selected" : "icon")}
                        to="/records">
                    <AiOutlineSafety/>
                </NavLink>
            </div>

            <div className="">
                <NavLink className={({ isActive }) => (isActive ? "selected" : "icon")}
                        to="/scan">
                    <RxMagnifyingGlass/>
                </NavLink>
            </div>
            <div className="">
                <NavLink className={({ isActive }) => (isActive ? "selected" : "icon")}
                        to="/network">
                 <FaNetworkWired/>
                </NavLink>
            </div>
            <div className="">
                <NavLink className={({ isActive }) => (isActive ? "selected" : "icon")}
                        to="/profile">
                    <BsFillPersonFill/>
                </NavLink>
            </div>
            <div className="">
                <NavLink className={({ isActive }) => (isActive ? "selected" : "icon")}
                        to="/alerts">
                    <AiOutlineBell/>
                </NavLink>
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