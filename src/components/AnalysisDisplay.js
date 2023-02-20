import { useContext, useEffect, useState } from "react"
import { FirestoreContext } from "@/context/firestoreStore"
import { Sheet, Typography, CircularProgress } from "@mui/joy"

const AnalysisPage = () => {
  const [personality, setPersonality] = useState(null)
  const {state} = useContext(FirestoreContext)

  useEffect(() => {
    const getPersonality = async () => {
      const cleanLikes = state?.likedRecipes.map((recipe) => recipe.split('-')[0]).join(', \n')
      const personality = await fetch(`/api/openai?prompt=${cleanLikes}}&type=PERSONALITY`)
      const dataPersonality = await personality.json()
      const personalityResult = dataPersonality.data.choices[0].text
      setPersonality(personalityResult)
    }
    getPersonality()
  }, [])

  return (
    <Sheet>
      <Typography level="h1">
        {state?.username}
      </Typography>
      <Typography level="h2">
        Personality Based on Likes:
      </Typography>
      <Typography level="h4">
        {personality ?? <CircularProgress />}
      </Typography>
    </Sheet>
  )
}

export default AnalysisPage