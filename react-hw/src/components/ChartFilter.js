import { useContext, useEffect, useState } from "react"
import { SensorContext } from "../Context"


const ChartFilter = () => {
    const { selectedSensors, setFilteredData } = useContext(SensorContext)
    const [selectedDataType, setSelectedDataType] = useState("1")
    const [selectedDataMetric, setSelectedDataMetric] = useState("1")
    /*const [selectedStartDate, setSelectedStartDate] = useState(null)
    const [selectedEndDate, setSelectedEndDate] = useState(null) */

    const handleFiltering = () => {
        switch (selectedDataType) {
            case "1":
                setFilteredData(selectedSensors.map(item => {
                    return {
                        sensor_name: item.sensor_name,
                        sensor_type: item.sensor_type,
                        data: item.minutely.map(entry => ({
                            value: entry.value,
                            date: entry.date
                        }))
                    };
                }))
                break;
            case "2":
                switch (selectedDataMetric) {
                    case "1":
                        setFilteredData(selectedSensors.map(item => {
                            return {
                                sensor_name: item.sensor_name,
                                sensor_type: item.sensor_type,
                                data: item.daily.map(entry => ({
                                    value: entry.min,
                                    date: entry.date
                                }))
                            };
                        }))
                        break;
                    case "2":
                        setFilteredData(selectedSensors.map(item => {
                            return {
                                sensor_name: item.sensor_name,
                                sensor_type: item.sensor_type,
                                data: item.daily.map(entry => ({
                                    value: entry.avg,
                                    date: entry.date
                                }))
                            };
                        }))
                        break;
                    case "3":
                        setFilteredData(selectedSensors.map(item => {
                            return {
                                sensor_name: item.sensor_name,
                                sensor_type: item.sensor_type,
                                data: item.daily.map(entry => ({
                                    value: entry.max,
                                    date: entry.date
                                }))
                            };
                        }))
                        break;
                    default:
                        break;
                }

                break;
            case "3":
                switch (selectedDataMetric) {
                    case "1":
                        setFilteredData(selectedSensors.map(item => {
                            return {
                                sensor_name: item.sensor_name,
                                sensor_type: item.sensor_type,
                                data: item.weekly.map(entry => ({
                                    value: entry.min,
                                    date: entry.date
                                }))
                            };
                        }))
                        break;
                    case "2":
                        setFilteredData(selectedSensors.map(item => {
                            return {
                                sensor_name: item.sensor_name,
                                sensor_type: item.sensor_type,
                                data: item.weekly.map(entry => ({
                                    value: entry.avg,
                                    date: entry.date
                                }))
                            };
                        }))
                        break;
                    case "3":
                        setFilteredData(selectedSensors.map(item => {
                            return {
                                sensor_name: item.sensor_name,
                                sensor_type: item.sensor_type,
                                data: item.weekly.map(entry => ({
                                    value: entry.max,
                                    date: entry.date
                                }))
                            };
                        }))
                        break;
                    default:
                        break;
                }

                break;

            default:
                break;

            
        }
        
    }
 
    useEffect(()=>{
        handleFiltering()
    }, [selectedSensors])
    
    
    return (
        <div className="chart-filter-container">
            <div>
                <div className="chart-filter-input-group">
                    <label className='picker-label' style={{ color: "#212121", fontSize: "16px" }}>Veri Tipi</label>
                    <select
                        className='picker chart-filter'
                        onChange={(e) => setSelectedDataType(e.target.value)}
                    >
                        <option value="1">Dakikalık</option>
                        <option value="2">Günlük</option>
                        <option value="3">Haftalık</option>

                    </select>
                </div>
                <div className="chart-filter-input-group">
                    <label className='picker-label' style={{ color: "#212121", fontSize: "16px" }}>Veri Türü</label>
                    <select
                        className='picker chart-filter'
                        onChange={(e) => setSelectedDataMetric(e.target.value)}
                    >
                        <option value="1">Minimum</option>
                        <option value="2">Ortalama</option>
                        <option value="3">Maksimum</option>
                    </select>
                </div>
                <div className="chart-filter-input-group">
                    <label className='picker-label' style={{ color: "#212121", fontSize: "16px" }}>Başlangıç</label>
                    <input
                        type="datetime-local"
                        className='picker chart-filter'
                    >
                    </input>
                </div>

                <div className="chart-filter-input-group">
                    <label className='picker-label' style={{ color: "#212121", fontSize: "16px" }}>Bitiş</label>
                    <input
                        type="datetime-local"
                        className='picker chart-filter'
                    >
                    </input>
                </div>

                <button className="filter-btn" onClick={handleFiltering}>Uygula</button>
            </div>

        </div>
    )
}

export default ChartFilter