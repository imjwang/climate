import {Tabs, TabList, Tab, TabPanel} from '@mui/joy'
import FoodDisplay from '@/components/FoodDisplay'
import AddDisplay from './AddDisplay'
import Alert from '@/components/Alert'
import GenerateForm from '@/components/GenerateForm'

const NavTabs = () => {
  return (
    <Tabs aria-label="Navigation tabs" defaultValue={0} sx={{ borderRadius: 'lg' }}>
  <TabList>
    <Tab>Explore</Tab>
    <Tab>Generate</Tab>
    <Tab>Create</Tab>
    <Tab>Analyze</Tab>
  </TabList>
    <Alert />
  <TabPanel value={0} sx={{ p: 2 }}>
    <FoodDisplay />
  </TabPanel>
  <TabPanel value={1} sx={{ p: 2 }}>
    <GenerateForm />
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