import { Sheet, Stack } from "@mui/joy"
import FoodItem from "@/components/FoodItem"


const FoodDisplay = () => {
  return (
    <>
    <Sheet
      variant="solid"
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        px: 2,
        py:2,
        color: 'black'
      }}
    >
      <Stack spacing={6}>
      <Stack direction="row" 
        spacing={2}
        justifyContent={"space-around"}
        sx={{width: "100%", height: "100%"}}
        >
      <FoodItem recipe="asdf" like />
      <FoodItem recipe="jkl;" />
      <FoodItem recipe="lol" like />
      </Stack>
      <Stack direction="row" 
        spacing={2}
        justifyContent={"space-around"}
        sx={{width: "100%", height: "100%"}}
        >
      <FoodItem recipe="asdf" />
      <FoodItem recipe="jkl;" like />
      <FoodItem recipe="lol" />
      </Stack>
      </Stack>
    </Sheet>
    </>
  )
}

export default FoodDisplay