import { Sheet, Card, Stack, Divider, Typography } from "@mui/joy"
import PetsIcon from '@mui/icons-material/Pets';
import ForestIcon from '@mui/icons-material/Forest';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Icon from "@/components/Icon";

const climateText = `Reducing our carbon footprint through encouraging plant focused diet.`
const animalWelfareText = `Enabling animals to live more fulfilling lives.`
const wellnessText = `Promoting mindful and healthy lives through food.`

const TripleIcon = () => {
  return (
    <Sheet variant="soft" color="warning" sx={{px: 14, py: 20, height: "80vh"}}>
      <Stack direction="row" 
        divider={<Divider orientation="vertical" />}
        spacing={2}
        justifyContent={"space-around"}
        sx={{width: "100%", height: "100%"}}
        >
      <Icon title="Climate" description={climateText}>
        <ForestIcon sx={{fontSize: {xs:70,  md:140}, alignSelf: "center"}} />
      </Icon>
      <Icon title="Animal Welfare" description={animalWelfareText}>
        <PetsIcon sx={{fontSize: {xs:70,  md:140}, alignSelf: "center"}} />
      </Icon>
      <Icon title="Wellness" description={wellnessText}>
      <SelfImprovementIcon sx={{fontSize: {xs:70,  md:140}, alignSelf: "center"}} />
      </Icon>
      </Stack>
    </Sheet>
  )
}


export default TripleIcon