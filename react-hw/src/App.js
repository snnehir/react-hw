import './styles/App.css';
import Header from './components/Header';
import GreenhousePicker from './components/GreenhousePicker';
import { useEffect, useState } from 'react';
import {SectorContext} from "./Context"
import SectorTabs from './components/SectorTabs';
import axios from "axios";

function App() {
  const [greenhouses, setGreenhouses] = useState([])
  const [selectedGreenhouse, setSelectedGreenhouse] = useState(null)

  useEffect(()=>{
    const getData = async ()=>{
      const response = await axios.get("https://www.jsonkeeper.com/b/92Y7")
      const responseData = response.data
      if ("greenhouses" in responseData){
        setGreenhouses(responseData.greenhouses)
      } 
    }
    getData()
  }, [])
  useEffect(() => {
    setSelectedGreenhouse(greenhouses[0])
  }, [greenhouses])

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <SectorContext.Provider value={{greenhouses, selectedGreenhouse, setSelectedGreenhouse}}>
          <GreenhousePicker />
          <SectorTabs />
        </SectorContext.Provider>
      </div>
    </div>
  );
}

export default App;
