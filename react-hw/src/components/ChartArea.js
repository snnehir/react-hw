import Chart from "./Chart"
import ChartFilter from "./ChartFilter"
import "../styles/ChartArea.css"

const ChartArea = () =>{
    
    return (
        <div style={{display: "flex"}}>
            <Chart/>
            <div>
                <ChartFilter/>
            </div>

        </div>
    )
}

export default ChartArea