import { useContext } from "react";
import { SectorContext } from "../Context";

const GreenhousePicker = () =>{
    const {greenhouses, setSelectedGreenhouse} = useContext(SectorContext)
    return (
        <div className='greenhouse-picker'>
          <label className='picker-label'>
            <img alt='' src={require("../images/sectors.png")} height="18px" ></img>
            <span>Sera</span>
          </label>
          <select 
            className='picker' 
            onChange={e => {
                setSelectedGreenhouse(greenhouses[e.target.value])
            }}>{
            greenhouses.map( (greenhouse, idx) => 
              <option key={idx} value={idx}>{greenhouse.greenhouse_name}</option> )
          }</select>
        </div>
    )
}

export default GreenhousePicker;