import { Sheet, Typography, Card, CardCover, CardContent } from "@mui/joy"
import RecipeForm from "@/components/RecipeForm"
import ImageUpload from "@/components/ImageUpload"

const AddDisplay = () =>
{

  return (
    <>
      <Sheet color="warning" sx={{ px: 10 }}>
      <Typography color="inherit" level="h1" sx={{pt:2}}>hi welcome to adding recipe </Typography>
        <Typography color="inherit" sx={{pt:2}}>You can add a recipe by filling out form.</Typography>
        <Typography color="inherit" sx={{pb:2}}>Optionally, you may also upload an image.</Typography>
        <ImageUpload />
        <RecipeForm />
      </Sheet>
    </>
  )
}


export default AddDisplay