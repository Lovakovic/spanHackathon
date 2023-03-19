import React from 'react'
import {BsTrashFill} from "react-icons/bs";

const ScanItem = ({id,date,url,ip,threatType,platformName,handleDelete}) => {



  return (
    <div className="scan-item">
        <span>{date}</span>
        <span>{url}</span>
        <span>{ip}</span>
        <span>{threatType}</span>
        <span>{platformName}</span>
        <label className='icon' onClick={() => handleDelete(id)}><BsTrashFill/></label>
    </div>
  )
}

export default ScanItem