import React from 'react'
import { useEffect,useState } from 'react'
import DatePicker from "react-datepicker";
import {RxMagnifyingGlass} from "react-icons/rx";
import Select from 'react-select'
import CircularLoading from '../../components/CircularLoading/CircularLoading';
import ScanItem from '../../components/ScanItem/ScanItem';
import {GrRefresh} from "react-icons/gr";
import useLoaders from '../../utils/useLoaders';


const Records = ({setShowSidebar}) => {

  const [startDate, setStartDate] = useState(new Date());
  const [data,setData] = useState();
  const [dataReady,setDataReady] = useState(false);
  const [allScans,setAllScans] = useState();
  const [unspecified,setUnspecified] = useState();
  const [malware,setMalware] = useState();
  const [se,setSe] = useState();
  const [unwantedSoftware,setUnwantedSoftware] = useState();
  const [flagged,setFlagged] = useState();

  const options = [
    { value: 'UNSPECIFIED', label: 'Unspecified' },
    { value: 'MALWARE', label: 'Malware' },
    { value: 'SOCIAL_ENGINEERING', label: 'Social Engineering' },
    { value: 'UNWANTED_SOFTWARE', label: 'Unwanted Software' },
    { value: 'POTENTIALLY_HARMFUL', label: 'Potentialy Harmful' },
  ]

  const handleDelete = (id) => {
    const deleteFromDB = async () => {
      const response = await fetch(`http://localhost:8081/event/delete/${id}`);
    }
    const filteredData = data.filter((threat) => threat.id !== id);
    
    setData(filteredData);
  }

  

    useEffect(() =>{
        setShowSidebar(true);
        const fetchData = async () => {
          const response = await fetch("http://localhost:8081/event/all");
          const json = await response.json();
          console.log(json)
          setData(json)
          setDataReady(true)

          const {allScans,unspecified,malware,se,unwantedSoftware,flagged} = useLoaders(json)
          setAllScans(allScans)
          setUnspecified(unspecified)
          setMalware(malware)
          setSe(se)
          setUnwantedSoftware(unwantedSoftware)
          setFlagged(flagged)

        };

        fetchData();

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
        <CircularLoading percentage="100" number={allScans ? allScans : "0"} color="grey" title="All scans"/>
        <CircularLoading percentage={unspecified ? (unspecified/allScans)*100 : "0"} number={unspecified ? unspecified : "0"} color="#058ed9" title="Unspecified"/>
        <CircularLoading percentage={malware ? (malware/allScans)*100 : "0"} number={malware ? malware : "0"} color="#ca3c25" title="Malware"/>
        <CircularLoading percentage={se ? (se/allScans)*100 : "0"} number={se ? se : "0"} color="#6b2737" title="SE"/>
        <CircularLoading percentage={unwantedSoftware ? (unwantedSoftware/allScans)*100 : "0"} number={unwantedSoftware ? unwantedSoftware : "0"} color="#7FB069" title="Unwanted software"/>
        <CircularLoading percentage={flagged ? (flagged/allScans)*100 : "0"} number={flagged ? flagged : "0"} color="#e08e45" title="Flagged"/>
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
        {dataReady ? data?.map((threat,id) => (
          <ScanItem
            key={id}
            id={threat.id}
            date={threat.visitedAt}
            url={threat.urlVisited}
            ip={threat.originIp}
            threatType={threat.threatType}
            platformName={threat.platformName}
            handleDelete={handleDelete}
          />
        )) : null}
      </div>
    </div>
  )
}

export default Records