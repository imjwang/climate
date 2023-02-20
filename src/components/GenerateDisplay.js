import { Sheet, Typography, Card, CardCover, CardContent, CircularProgress } from "@mui/joy"
import GenerateForm from "@/components/GenerateForm"
import { useContext } from "react"
import { FirestoreContext } from "@/context/firestoreStore"

const GenerateDisplay = () =>
{
  const { state } = useContext(FirestoreContext)
  
  if (state.loading) return (
    <Sheet color="warning" sx={{ px: 10 }}>
      <CircularProgress size="lg" variant="plain" sx={{ '--CircularProgress-size': '100px' }} />
    </Sheet>

  )

  return (
    <>
      <Sheet color="warning" sx={{ px: 10 }}>
      <Typography color="inherit" level="h1" sx={{pt:2}}>welcome to generate recipe</Typography>
        <Typography color="inherit" sx={{pt:2}}>List your Ingredients.</Typography>
        <Typography color="inherit" sx={{pb:2}}>Select a method, and wait patiently as we get to work.</Typography>
        <GenerateForm />
      </Sheet>
    </>
  )
}


export default GenerateDisplay