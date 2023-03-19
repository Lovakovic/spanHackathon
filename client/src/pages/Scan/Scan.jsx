import React from 'react'

const Scan = () => {
  return (
    <div className="scan">
      <div className="top">
        <span>Insert URL to scan: </span>
        <input type="text" /> 
        <button>Scan</button>
      </div>
    </div>
  )
}

export default Scan