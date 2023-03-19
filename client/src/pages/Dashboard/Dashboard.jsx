import React from 'react'
import { useEffect,useState } from 'react';
import InfoBox from '../../components/InfoBox/InfoBox';
import {AiOutlineWifi} from "react-icons/ai";
import {IoEarthOutline} from "react-icons/io5";
import {HiOutlineExclamationTriangle} from "react-icons/hi2";
import {BsCloudCheck} from "react-icons/bs";
import { ResponsiveContainer,CartesianGrid,Tooltip,Legend } from 'recharts';

import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { chartData } from '../../utils/chartData';
import { totalScanned,todayScanned, maliciousThreats,decoyThreats } from '../../utils/infoBoxData';


const Dashboard = ({setShowSidebar}) => {

  const [apiData,setApiData] = useState()

  const data2 = chartData(apiData);
  console.log(data2)

  


    useEffect(() => {
      setShowSidebar(true);
      const fetchData = async () => {
        const response = await fetch(`http://localhost:8081/event/all`);
        console.log(`http://localhost:8081/event/all`)
        const json = await response.json();
        console.log(json)
        setApiData(json)
      }
      fetchData()

  },[setShowSidebar])

  return (
    <div className="dashboard">
      <div className="info-boxes">
        <InfoBox count={totalScanned(apiData)} description="Total scanned" icon={<IoEarthOutline/>}/>
        <InfoBox count={todayScanned(apiData)} description="Scanned today" icon={<AiOutlineWifi/>}/>
        <InfoBox count={maliciousThreats(apiData)} description="Malicious threats" icon={<HiOutlineExclamationTriangle/>}/>
        <InfoBox count={decoyThreats(apiData)} description="Total decoys" icon={<BsCloudCheck/>}/>
      </div>
      <div className="chart-wrapper">
        <h2>Malicious reports monitoring</h2>
      <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data2}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="decoy" stroke="rgb(7, 224, 58)" strokeWidth={3} /> 
        <Line type="monotone" dataKey="malicious" stroke="rgb(224, 7, 29)" strokeWidth={3}/>
      </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard
