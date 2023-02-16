import { Sheet, Typography, Card, CardCover, CardContent } from "@mui/joy"
import RecipeForm from "@/components/RecipeForm"
import ImageUpload from "@/components/ImageUpload"

const AddPage = () =>
{

  return (
    <>
      <Sheet color="warning" sx={{ px: 14, py: 20 }}>
      <Typography color="inherit" level="h1" sx={{pt:4}}>hi welcome to adding recipe </Typography>
        <Typography color="inherit">You can add a recipe by filling out form.</Typography>
        <Typography color="inherit">You can also upload an image of your recipe.</Typography>
        <ImageUpload />
        <RecipeForm />
      </Sheet>
    </>
  )
}





export default AddPage