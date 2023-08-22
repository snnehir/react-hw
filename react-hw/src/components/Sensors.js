import SensorCard from "./SensorCard"
import "../styles/Sensors.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { SensorContext } from "../Context"
import ChartArea from "./ChartArea"

const Sensors = (props) => {
    const [selectedSensors, setSelectedSensor] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        setSelectedSensor([])
        setFilteredData([])
    }, [props.sensors])

    return (
        <div className="sensors-container">
            <SensorContext.Provider value={{ selectedSensors, setSelectedSensor, filteredData, setFilteredData }}>
                <div className="sensors-section">
                    <div className="sensors-section-header">
                        <div className="sensors-section-title">
                            <img src={require("../images/sensor.png")} alt=""></img>
                            <span> Sensörler </span>
                        </div>
                        <form className="searchForm">
                            <input type="search" placeholder="Sensör Ara" />
                            <button type="submit">Search</button>
                        </form>

                    </div>
                    <div className="sensors-section-content">
                        {props.sectors.map((sector, idx) =>

                            sector.sensor_list.map((sensor, idx2) =>
                                <SensorCard key={`${idx}-${idx2}`} sensor={sensor} sectorName={sector.sektor_name} />
                            )
                        )}
                    </div>
                </div>

                <div className="result-section">

                    {selectedSensors.length === 0 &&
                        <div className="warning-message">
                            <FontAwesomeIcon icon={faCircleExclamation} />
                            <span>Grafik çizimi için henüz sensör seçimi yapmadınız. </span>
                        </div>
                    }

                    {selectedSensors.length > 0 &&

                        <ChartArea />
                    }

                </div>
            </SensorContext.Provider>
        </div>

    )
}

export default Sensors