import React from 'react'


const InfoBox = ({count,description,icon}) => {
  return (
    <div className="info-box">
        <div className="left">
            <div className="icon-wrapper">
                {icon}
            </div>
        </div>
        <div className="right">
            <h1>{count}</h1>
            <span>{description}</span>
        </div>
    </div>
  )
}

export default InfoBox