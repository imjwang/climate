import { Sheet, Grid } from "@mui/joy"
import FoodItem from "@/components/FoodItem"
import SearchBar from "@/components/SearchBar"



const FoodDisplay = () => {
  //TODO remove test data
  const testArray = ["asdf", "jkl;", "awea", "lol", "asdf", "jkl;", "lol", "hi there"]
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
      <Grid container 
      spacing={2}
      sx={{width: "100%", height: "100%"}}
      >
      {testArray.map((recipe, index) => (
        <Grid xs={12} sm={6} md={4} lg={3} key={index}>
            <FoodItem recipe={recipe} />
        </Grid>
      ))
      }
      </Grid>
    </Sheet>
    </>
  )
}

export default FoodDisplay