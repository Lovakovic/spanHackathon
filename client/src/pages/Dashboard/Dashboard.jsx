import React from 'react'
import { useEffect } from 'react';
import InfoBox from '../../components/InfoBox/InfoBox';
import {AiOutlineWifi} from "react-icons/ai";
import {IoEarthOutline} from "react-icons/io5";
import {HiOutlineExclamationTriangle} from "react-icons/hi2";
import {BsCloudCheck} from "react-icons/bs";

const Dashboard = ({setShowSidebar}) => {

    useEffect(() => {
      setShowSidebar(true);
  },[setShowSidebar])

  return (
    <div className="dashboard">
      <div className="info-boxes">
        <InfoBox count="5426" description="Total scanned" icon={<IoEarthOutline/>}/>
        <InfoBox count="43" description="Scanned today" icon={<AiOutlineWifi/>}/>
        <InfoBox count="65" description="Malicious threats" icon={<HiOutlineExclamationTriangle/>}/>
        <InfoBox count="7" description="Total decoys" icon={<BsCloudCheck/>}/>
      </div>
    </div>
  )
}

export default Dashboard