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
        {state?.celebrate ? 
        <>
        <Typography color="inherit" level="h1" sx={{pt:2}}>success!</Typography>
        <Typography color="inherit" sx={{pt:2}}>The wait is over!</Typography>
        </>
        : 
        <>
      <Typography color="inherit" level="h1" sx={{pt:2}}>welcome to generate recipe</Typography>
        <Typography color="inherit" sx={{pt:2}}>List your Ingredients. Select a method.</Typography>
        <Typography color="inherit" sx={{pb:2}}>Hang tight, this may take a few minutes.</Typography>
        </>
        }
        <GenerateForm />
      </Sheet>
    </>
  )
}


export default GenerateDisplay