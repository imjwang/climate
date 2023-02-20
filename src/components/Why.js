import { Typography, Sheet, Card, Stack, Divider, AspectRatio } from "@mui/joy"
import Osadhi from "@/components/Osadhi"

const Why = () => {
  return (
    <Sheet sx={{pl: {md:6}, py: {md:6}, height: {xs: "350vh", md:"300vh"}, bgcolor: "black"}}>
    <Typography level="display2" color="info">
      why
    </Typography>
    <Sheet sx={{my: {md: 6}, ml: {md: 8}, px: {md:3}, py: {md:4}, height: "160vh", width: "fit", bgcolor: "paleturquoise" }}>
      <Stack direction={{xs: "column", md: "row"}} spacing={2}>
      <Card sx={{px: {md:4}, py: {md:4}, width: {md: "47%", xs: "96%"}}}>
        <Osadhi />
        <Typography level="body1" color="success">
        <Typography color="success" variant="soft">Oṣadhi (ओषधि):</Typography> In the Ṛgveda plants (oṣadhi) are personified as divine and a whole and 
        long hymn is devoted to their praise mainly with reference to their healing powers. 
        The same Veda often refers to Soma as the king of the plant-world. In 
        the Vāyu-purāṇa also the plant-world is closely associated with Soma who is called 
        the “consecrated lord” of the vegetable kingdom.
        </Typography>
        <Typography level="body3">
        Source: Google Books: Cultural History from the Vāyu Purāna
        </Typography>
      </Card>
      <Card color="primary" sx={{my:2, width: {md: "47%", xs: "96%"}}}>
        <Typography level="h1" color="info">
          The Inspiration
        </Typography>
        <Stack direction={{xs: "column", md: "row"}} sx={{mt:2}}>
        <Typography level="display1" color="success">40%</Typography>
        <Divider orientation="vertical" sx={{mx : 2}} />
        <Typography level="h4">
          Around 40 percent of India&apos;s population is vegetarian, and the culture has a long tradition of delicious vegetarian cuisine.<br/>
        </Typography>
        </Stack>
        </Card>
      </Stack>
        <Card color="primary" sx={{my:2, width: "96%"}}>
        <Typography level="h1" color="info">
          To save the world...
        </Typography>
        <Typography level="h4">
          Oṣadhi means &quot;plant&quot; in Sanskrit, especially plants of remedial value.<br />
        </Typography>

          <Typography level="h2" variant="solid" color="danger" fontWeight="lg">
          Our world in crisis:<br />
          </Typography>
          <Typography color="warning" variant="solid">
          &#8226; Climate change could be irreversible by 2030.<br />
          &#8226; Greenhouse gas levels are at an all-time high.<br />
          &#8226; More than 1 million species face extinction.<br />
          &#8226; Up to 200 million people could be displaced by climate change by 2050.<br />
          &#8226; Half of the world’s coral reefs have died in the last 30 years.<br />
          </Typography>
          <Typography level="body3">
          Source: https://www.ecotricity.co.uk/<br />
          </Typography>
        </Card>
        <Card color="primary" sx={{my:2, width: "96%"}}>
        <Typography level="h1" color="info">
          The Cost...
        </Typography>
        <Stack direction={{xs: "column", md: "row"}} sx={{mt:2}}>
        <Typography level="display1" color="danger">14.5%</Typography>
        <Divider orientation="vertical" sx={{mx : 2}} />
        <Typography level="h4">
        Livestock are responsible for at least 14.5 percent of global greenhouse gases, some estimates are in the 30 percentage points.<br/>
        A 2017 landmark study found that the top three meat firms – JBS, Cargill and Tyson – emitted more greenhouse gases in 2016 than all of France.
        </Typography>
        </Stack>
        </Card>
    </Sheet>
  </Sheet>
  )
}
export default Why