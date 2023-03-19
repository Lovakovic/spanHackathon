import React from 'react'
import { useEffect,useState } from 'react'
import DatePicker from "react-datepicker";
import {RxMagnifyingGlass} from "react-icons/rx";
import Select from 'react-select'
import CircularLoading from '../../components/CircularLoading/CircularLoading';
import ScanItem from '../../components/ScanItem/ScanItem';
import {GrRefresh} from "react-icons/gr";


const Records = ({setShowSidebar}) => {

  const [startDate, setStartDate] = useState(new Date());

  const options = [
    { value: 'UNSPECIFIED', label: 'Unspecified' },
    { value: 'MALWARE', label: 'Malware' },
    { value: 'SOCIAL_ENGINEERING', label: 'Social Engineering' },
    { value: 'UNWANTED_SOFTWARE', label: 'Unwanted Software' },
    { value: 'POTENTIALLY_HARMFUL', label: 'Potentialy Harmful' },
  ]

    useEffect(() =>{
        setShowSidebar(true);
    },[])

  return (
    <div className="records">
      <div className="filters">
        <span>Filters</span>
        <div className="input-wrapper">
          <label htmlFor="input">
            <RxMagnifyingGlass/>
          </label>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="datepicker"/>
        </div>
        <Select options={options} className="select"/>
      </div>
      <div className="loaders">
        <CircularLoading percentage="100" number="50" color="grey" title="All scans"/>
        <CircularLoading percentage="73" number="50" color="#058ed9" title="Unspecified"/>
        <CircularLoading percentage="12" number="50" color="#ca3c25" title="Malware"/>
        <CircularLoading percentage="90" number="50" color="#6b2737" title="SE"/>
        <CircularLoading percentage="44" number="50" color="#e08e45" title="Flagged"/>
      </div>
      <div className="list">
        <div className="titles">
          <span>Date</span>
          <span>URL</span>
          <span>IP</span>
          <span>Threat type</span>
          <span>Platform</span>
          <label className='icon'><GrRefresh/></label>
        </div>
        <ScanItem 
          date="12.12.2022." 
          url="www.minecraft.com" 
          ip="192.168.18.204" 
          threatType="unspecified"
          platformName="vindov"/>
      </div>
    </div>
  )
}

export default Records