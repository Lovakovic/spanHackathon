import React from 'react'
import { useEffect } from 'react'

const Records = ({setShowSidebar}) => {

    useEffect(() =>{
        setShowSidebar(true);
    },[])

  return (
    <div>Records</div>
  )
}

export default Records