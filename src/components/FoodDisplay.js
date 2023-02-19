import { Sheet, Stack } from "@mui/joy"
import FoodItem from "@/components/FoodItem"
import SearchBar from "@/components/SearchBar"


const FoodDisplay = () => {
  return (
    <>
    <Sheet
      variant="solid"
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        px: 2,
      }}
    >
      <SearchBar />
      <Stack spacing={6}>
      <Stack direction="row" 
        spacing={2}
        justifyContent={"space-around"}
        sx={{width: "100%", height: "100%"}}
        >
      <FoodItem recipe="asdf" liked />
      <FoodItem recipe="jkl;" />
      <FoodItem recipe="awea" liked />
      <FoodItem recipe="lol" liked />
      </Stack>
      <Stack direction="row" 
        spacing={2}
        justifyContent={"space-around"}
        sx={{width: "100%", height: "100%"}}
        >
      <FoodItem recipe="asdf" />
      <FoodItem recipe="jkl;" liked />
      <FoodItem recipe="lol" />
      <FoodItem recipe="hi there" liked />
      </Stack>
      </Stack>
    </Sheet>
    </>
  )
}

export default FoodDisplay