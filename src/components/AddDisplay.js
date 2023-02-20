import { Sheet, Typography, Card, CardCover, CardContent, CircularProgress } from "@mui/joy"
import RecipeForm from "@/components/RecipeForm"
import { useContext } from "react"
import { FirestoreContext } from "@/context/firestoreStore"

const AddDisplay = () =>
{
  const { state } = useContext(FirestoreContext)
  
  if (state.loading) return (
    <Sheet color="warning" sx={{ px: {md:10} }}>
      <CircularProgress size="lg" variant="plain" sx={{ '--CircularProgress-size': '100px' }} />
    </Sheet>

  )

  return (
    <>
      <Sheet color="warning" sx={{ px: {md:10} }}>
      <Typography color="inherit" level="h1" sx={{pt:2}}>hi welcome to adding recipe </Typography>
        <Typography color="inherit" sx={{pt:2}}>You can add a recipe by filling out the form.</Typography>
        <Typography color="inherit" sx={{pb:2}}>Optionally, you may upload an image.</Typography>
        <RecipeForm />
      </Sheet>
    </>
  )
}


export default AddDisplay