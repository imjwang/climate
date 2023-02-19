import {Stack,Typography} from "@mui/joy"


const Icon = ({title, description, children}) => {
  return (
  <>
  <Stack spacing={2} sx={{alignContent: "center", width: "33vw"}}>
    {children}
<Typography level="h3" sx={{alignSelf: "center"}}>
  {title}
</Typography>
<Typography sx={{alignSelf: "center", justifyContent: "center"}}>
  {description}
</Typography>
  </Stack>
  </>
  )

}


export default Icon