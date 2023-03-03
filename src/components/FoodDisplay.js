import { Sheet, Grid, Button } from "@mui/joy"
import FoodItem from "@/components/FoodItem"
import SearchBar from "@/components/SearchBar"
import { CircularProgress } from '@mui/joy';
import useRecipes from "@/hooks/recipeSwr";

const FoodDisplay = () => {
  const {data, size, setSize} = useRecipes()
  
  if (!data) {
    return <CircularProgress />
  }

  return (
    <>
    <Button onClick={() => setSize(size+1)}>click</Button>
    <Sheet
      variant="solid"
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        px: 2,
      }}
    >
      <Grid container 
      spacing={2}
      sx={{width: "100%", height: "100%"}}
      >
        {
          data.map(chunk => {
            return chunk.map((recipe, index) => (
              <Grid xs={12} sm={6} md={4} lg={3} key={index}>
                  <FoodItem recipe={recipe.name} url={recipe.path} image={recipe.image} name={recipe.name} author={recipe.author} />
              </Grid>
            ))
          })
        }
      </Grid>
    </Sheet>
    </>
  )
}

export default FoodDisplay