import { Sheet, Card, Stack, Divider } from "@mui/joy"

const TripleIcon = () => {

  return (
    <Sheet variant="soft" color="warning" sx={{px: 14, py: 20, height: "80vh"}}>
      <Stack direction="row" 
        divider={<Divider orientation="vertical" />}
        spacing={2}
        justifyContent={"space-around"}
        sx={{width: "100%", height: "100%"}}
        >
      <Card sx={{bgcolor: "white", width: "20vw", height: "20vw"}}>
      <p>aweaw oeif<br /> joiaw jefo iajwef <br /> iojawoi <br />fejaoi <br />wefj <br />oiaw<br /><br />jefoia <br />wjefiofs</p>
      </Card>
      <Card sx={{bgcolor: "cyan", width: "20vw", height: "20vw"}}>
      <p>aweaw oeif joiaw jefo iajwef iojawoi fejaoi wefj oiawjefoia wjefiofs</p>
      </Card>
      <Card sx={{bgcolor: "gold", width: "20vw", height: "20vw"}}>
      <p>aweaw oeif joiaw jefo iajwef iojawoi fejaoi wefj oiawjefoia wjefiofs</p>
      </Card>
      </Stack>
    </Sheet>
  )
}


export default TripleIcon