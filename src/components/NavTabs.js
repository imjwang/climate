import {Tabs, TabList, Tab, TabPanel} from '@mui/joy'
import FoodDisplay from '@/components/FoodDisplay'
import AddDisplay from './AddDisplay'

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
    <b>Second</b> tab panel
  </TabPanel>
  <TabPanel value={2} sx={{ p: 2 }}>
    <AddDisplay />
  </TabPanel>
  <TabPanel value={3} sx={{ p: 2 }}>
    <b>Fourth</b> tab panel
  </TabPanel>
</Tabs>
  )
}


export default NavTabs