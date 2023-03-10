import {Tabs, TabList, Tab, TabPanel} from '@mui/joy'
import FoodDisplay from '@/components/FoodDisplay'
import AddDisplay from './AddDisplay'
import GenerateDisplay from '@/components/GenerateDisplay'
import AnalysisPage from '@/components/AnalysisDisplay'


const NavTabs = () => {
  return (
    <Tabs aria-label="Navigation tabs" defaultValue={0} sx={{ borderRadius: 'lg' }}>
  <TabList>
    <Tab>Explore</Tab>
    <Tab>Generate</Tab>
    <Tab>Create</Tab>
    <Tab>Analyze</Tab>
  </TabList>
  <TabPanel value={0} sx={{ p: 2 }}>
    <FoodDisplay />
  </TabPanel>
  <TabPanel value={1} sx={{ p: 2 }}>
    <GenerateDisplay />
  </TabPanel>
  <TabPanel value={2} sx={{ p: 2 }}>
    <AddDisplay />
  </TabPanel>
  <TabPanel value={3} sx={{ p: 2 }}>
    <AnalysisPage />
  </TabPanel>
</Tabs>
  )
}


export default NavTabs