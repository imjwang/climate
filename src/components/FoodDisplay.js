import { Sheet } from "@mui/joy"


const FoodDisplay = () => {
  return (
    <Sheet
      variant="solid"
      sx={{
        width: '100%',
        height: '80vh',
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        px: 2,
        color: 'black'
      }}
    >
      <div>flex box1</div>
      <div>flex box2</div>
      <div>flex box3</div>
    </Sheet>
  )
}

export default FoodDisplay