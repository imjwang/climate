import { Sheet } from "@mui/joy"
import FoodItem from "@/components/FoodItem"


const FoodDisplay = () => {
  return (
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
      <FoodItem />
      <FoodItem />
      <FoodItem />
    </Sheet>
  )
}

export default FoodDisplay