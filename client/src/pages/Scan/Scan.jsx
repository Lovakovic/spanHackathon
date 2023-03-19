import React, {useState} from 'react'
import {AiOutlineCheckCircle} from "react-icons/ai"
import apiUrl from "../../env.js";

const Scan = () => {

  const [url,setUrl] = useState();
  const [data,setData] = useState();
  const [safeUrl,setSafeUrl] = useState(false);
  const [showMore,setShowMore] = useState(false);

  const handleScan = async () =>{
    const response = await fetch(`${apiUrl}/assessReport/url/${url}`);
    const json = await response.json();
    setData(json)
    setSafeUrl(true);
    console.log(json)
  }


  return (
    <div className="scan">
      <div className="top">
        <span>Insert URL to scan: </span>
        <input type="text" onChange={(e) => setUrl(e.target.value)}/> 
        <button onClick={handleScan}>Scan</button>
      </div>
      <div className="bottom">
        {safeUrl && <>
        <div className="icon">
          <AiOutlineCheckCircle/>
        </div>
        <div className="more">
            No threats found. The URL is safe.
        </div></>}
      </div>
    </div>
  )
}

export default Scan
