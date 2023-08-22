import "../styles/SensorCard.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChartLine} from "@fortawesome/free-solid-svg-icons"
import { useState, useContext, useEffect } from "react"
import { SensorContext } from "../Context"

const getSensorIcon = (sensor_type) => {

    switch (sensor_type) {
        case "Hava Sıcaklığı":
            return require("../images/air_temperature.png")
        case "Hava Nemi":
            return require("../images/air_humidity.png")
        case "pH":
            return require("../images/pH.png")
        case "EC":
            return require("../images/ec.png")
        case "PAR":
            return require("../images/par-radiation.png")

        default:
            return require("../images/sensor.png")
    }
}
const SensorCard = (props) => {
    const {selectedSensors, filteredData, setSelectedSensor, setFilteredData} = useContext(SensorContext)
    const [isButtonActive, setIsButtonActive] = useState(false)
    

    useEffect(()=>{
        if(selectedSensors.length === 0){
            setIsButtonActive(false)
        }
    }, [selectedSensors])
    const handleShowChart = (e) =>{
        setIsButtonActive(!isButtonActive)
        if(!isButtonActive){
            setSelectedSensor(selectedSensors => [...selectedSensors, props.sensor])
            setFilteredData(filteredData => [...filteredData, {
                sensor_name: props.sensor.sensor_name,
                sensor_type: props.sensor.sensor_type,
                data: props.sensor.minutely.map(entry => ({
                    value: entry.value,
                    date: entry.date
                })) }
            ])
        }
        else{
            setSelectedSensor(selectedSensors => selectedSensors.filter(s => s.sensor_name !== props.sensor.sensor_name))
        }
        
    }
    return (
        <div className={isButtonActive ? "sensor-card sensor-active": "sensor-card"} >
            <div className="sensor-card-title" >
                <span>{props.sectorName}</span>

                <button title="Sensör seç" className={isButtonActive ? "show-chart-btn sensor-active": "show-chart-btn"} onClick={handleShowChart}>
                    <FontAwesomeIcon icon={faChartLine} />
                </button>
                
            </div>
            <div className="sensor-card-content">
                <img alt={props.sensor.sensor_type} title={props.sensor.sensor_type}  src={getSensorIcon(props.sensor.sensor_type)}></img>
                <span>{props.sensor.sensor_name}</span>
            </div>

        </div>
    )
}

export default SensorCard