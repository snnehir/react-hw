
import { useContext, useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"
import { SensorContext } from "../Context"

const Chart = () => {
    const { selectedSensors, filteredData } = useContext(SensorContext)

    const [scales, setScales] = useState([
        {
            sensor_type: filteredData[0].sensor_type,
            yAxis: "y",
            isActive: true
        }
    ])
    
    const [options, setOptions] = useState(
        {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: filteredData[0].sensor_type
                    }
                },
            },
            plugins: {
                colors: {
                    forceOverride: true
                },
                legend: {
                    position: "right",
                    align: "start",
                    maxWidth: 250
                }
            }
        })

    const [chartData, setChartData] = useState({
        labels: filteredData[0].data.map(md => md.date),
        datasets: [{
            label: filteredData[0].sensor_name,
            data: filteredData[0].data.map(md => md.value),
            yAxisID: 'y',
        },]
    })

    useEffect(() => {
        const newChartData = {
            labels: filteredData[0].data.map(md => md.date),
            datasets: [],
        };

        filteredData.forEach(sensor => {
            let yAxisId = ""

            for (let idx = 0; idx < scales.length; idx++) {
                const element = scales[idx];
                if (element.sensor_type === sensor.sensor_type && element.isActive) {
                    yAxisId = element.yAxis
                    break
                }
            }

            if (yAxisId === "") {
                let newScales = options.scales
                if (!scales[0].isActive) {
                    yAxisId = "y"
                    newScales[[yAxisId]] = {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: sensor.sensor_type
                        }
                    }
                    scales[0].isActive = true
                    scales[0].sensor_type = sensor.sensor_type
                }
                else {
                    yAxisId = "y" + scales.length
                    newScales[[yAxisId]] = {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: sensor.sensor_type
                        }
                    }

                    setScales((yAxes) => [...yAxes, {
                        sensor_type: sensor.sensor_type,
                        yAxis: yAxisId, isActive: true
                    }])
                }
                setOptions((options) => ({ ...options, scales: newScales }))
            }

            newChartData.datasets.push({
                label: sensor.sensor_name,
                data: sensor.data.map(md => md.value),
                yAxisID: yAxisId
            })

        });

        let newOptionsScales = options.scales

        scales.forEach(element => {
            let flag = true
            for (let idx = 0; idx < filteredData.length; idx++) {
                const sensor = filteredData[idx];
                if (sensor.sensor_type === element.sensor_type) {
                    flag = false
                    break
                }
            }
            if (flag) {
                delete newOptionsScales[element.yAxis]
                element.isActive = false
            }
        });

        setOptions((options) => ({ ...options, scales: newOptionsScales }))
        
        setChartData(newChartData);

    }, [selectedSensors, filteredData, scales, options.scales]);


    return (
        <div className="chart-container">
            <Line data={chartData} options={options}></Line>
        </div>
    )
}

export default Chart