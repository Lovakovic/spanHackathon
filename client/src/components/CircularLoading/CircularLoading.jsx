import React from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";

const CircularLoading = ({percentage,number,color,title}) => {
  return (
    <div className="circular-loading">
         <CircularProgressbar value={percentage} text={number} strokeWidth={8}  styles={buildStyles({
          pathColor: color,
          textColor: "#403C3D",
        })}/>
        <div className="bottom">
            <span>{title}</span>
        </div>
    </div>
  )
}

export default CircularLoading