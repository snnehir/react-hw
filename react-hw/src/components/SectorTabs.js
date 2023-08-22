import { useContext, useEffect, useState } from "react"
import { SectorContext } from "../Context"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sensors from "./Sensors";

const SectorTabs = () => {
    const { selectedGreenhouse } = useContext(SectorContext)
    const [sectors, setSectors] = useState([])
    useEffect(() => {
        if (selectedGreenhouse != null && "sektors" in selectedGreenhouse) {
            setSectors(selectedGreenhouse.sektors)
        }
    }, [selectedGreenhouse])

    return (
        <Tabs>
            <TabList style={{ marginLeft: "20px" }}>
                <Tab key="0">Tümü</Tab>
                {
                    sectors.map((sector, idx) => <Tab key={idx + 1}>{sector.sektor_name}</Tab>)
                }

            </TabList>
            <TabPanel>
                <Sensors sectors={sectors}></Sensors>
            </TabPanel>
            {
                sectors.map((sector, idx) =>
                    <TabPanel key={idx}>
                        <Sensors sectors={[sector]} />
                    </TabPanel>
                )
            }

        </Tabs>
    )
}

export default SectorTabs