import { Sheet, Card, Stack, Divider, Typography } from "@mui/joy"
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Icon from "@/components/Icon";

const aiText = `Leverage advanced AI, and own the data platform.`
const analyticsTest = `Understand and influence consumer behavior.`
const policyTest = `Incorporate incentives directly to the end user.`

const TripleIconDup = () => {
  return (
    <Sheet variant="soft" color="grey" sx={{px: 14, py: 20, height: "80vh"}}>
      <Stack direction="row" 
        divider={<Divider orientation="vertical" />}
        spacing={2}
        justifyContent={"space-around"}
        sx={{width: "100%", height: "100%"}}
        >
      <Icon title="Advanced AI" description={aiText}>
        <PsychologyIcon sx={{fontSize: 140, alignSelf: "center"}} />
      </Icon>
      <Icon title="Analytics" description={analyticsTest}>
        <AnalyticsIcon sx={{fontSize: 140, alignSelf: "center"}} />
      </Icon>
      <Icon title="Incentives" description={policyTest}>
      <MonetizationOnIcon sx={{fontSize: 140, alignSelf: "center"}} />
      </Icon>
      </Stack>
    </Sheet>
  )
}


export default TripleIconDup