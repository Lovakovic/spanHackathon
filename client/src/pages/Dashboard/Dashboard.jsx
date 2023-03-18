import React from 'react'
import { useEffect } from 'react';

const Dashboard = ({setShowSidebar}) => {

    useEffect(() => {
      setShowSidebar(true);
  },[setShowSidebar])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard