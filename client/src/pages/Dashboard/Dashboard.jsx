import React from 'react'
import { useEffect,useState } from 'react';
import InfoBox from '../../components/InfoBox/InfoBox';
import {AiOutlineWifi} from "react-icons/ai";
import {IoEarthOutline} from "react-icons/io5";
import {HiOutlineExclamationTriangle} from "react-icons/hi2";
import {BsCloudCheck} from "react-icons/bs";
import { ResponsiveContainer,CartesianGrid,Tooltip,Legend } from 'recharts';

import { LineChart, Line, XAxis, YAxis } from 'recharts';


const Dashboard = ({setShowSidebar}) => {

  const [apiData,setApiData] = useState()

  const data = [
    {name: 'Jan', malicious: 4000, decoy: 2400},
    {name: 'Feb', malicious: 3000, decoy: 1398},
    {name: 'Mar', malicious: 2000, decoy: 9800},
    {name: 'Apr', malicious: 2780, decoy: 3908},
    {name: 'May', malicious: 1890, decoy: 4800},
    {name: 'Jun', malicious: 2390, decoy: 3800},
    {name: 'Jul', malicious: 3490, decoy: 4300},
  ];
  


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
        <InfoBox count="5426" description="Total scanned" icon={<IoEarthOutline/>}/>
        <InfoBox count="43" description="Scanned today" icon={<AiOutlineWifi/>}/>
        <InfoBox count="65" description="Malicious threats" icon={<HiOutlineExclamationTriangle/>}/>
        <InfoBox count="7" description="Total decoys" icon={<BsCloudCheck/>}/>
      </div>
      <div className="chart-wrapper">
        <h2>Real-time monitoring</h2>
      <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
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
