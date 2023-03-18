import React from 'react'
import { useEffect,useState } from 'react'
import DatePicker from "react-datepicker";
import {RxMagnifyingGlass} from "react-icons/rx";
import Select from 'react-select'


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
    </div>
  )
}

export default Records