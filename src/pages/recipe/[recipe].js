import { useRouter } from "next/router"
import { Sheet, Typography, IconButton, Chip, Stack, Divider, Card } from "@mui/joy"
import HeroLayout from "@/components/HeroLayout"
import { Favorite } from "@mui/icons-material"
import { useState, useEffect, useContext } from "react"
import { FirestoreContext, addLike, removeLike } from "@/context/firestoreStore"
import useRecipes from "@/hooks/recipeSwr"
import Alert from "@/components/Alert"
import { toast } from "react-hot-toast"

//need to update this to go fetch the recipe data from firestore
const RecipePage = () => {
  const {query: {recipe}} = useRouter()
  const {state, dispatch} = useContext(FirestoreContext)
  
  const {data, isLoading} = useRecipes()
  console.log(data)
  console.log(data?.flatten())
  const current = data?.find(r => r.flatten().path === recipe)

  const like = state.likedRecipes?.includes(recipe)


  const handleLike = async () => {
    if (!state.authenticated) {
      toast(t => <Alert t msg="You must be logged in to like a recipe" color="danger" />)
      return
    }
    // extra safety to go along with disabled button
    if (!state.loading) {
      dispatch({type: 'SET_LOADING', payload: true})

      if (like) {
        dispatch({type: 'REMOVE_LIKE', payload: recipe})
        await removeLike(recipe, state.uid)
      } else {
        dispatch({type: 'ADD_LIKE', payload: recipe})
        await addLike(recipe, state.uid)
      }

      dispatch({type: 'SET_LOADING', payload: false})
    }
  }

  return (
    <>
    <HeroLayout
      height="40vh"
      sxBackground={{
        backgroundImage: `url(${current?.image})`,
        backgroundPosition: 'center',
      }}
    >
        <IconButton
          aria-label="like recipe"
          variant={like ? "plain" : "solid"}
          color="danger"
          onClick={handleLike}
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
            width: "80px",
            height: "80px"
          }}
          disabled={state.loading}
        >
          <Favorite sx={{fontSize:50}} />
        </IconButton>
    </HeroLayout>
    <Sheet variant="outlined" color="primary" sx={{ px: 2, py: 1, bgcolor: "white"}}>
      <Card variant="outlined" color="primary" sx={{width:"450px", height:"180px", transform: 'translateY(-50%)',
  }}>
    <Stack spacing={2} direction="row">
      <Typography level="h2" fontWeight="lg" sx={{cursor:"default", userSelect:"none"}}>{current?.name}</Typography>
      <Divider orientation="vertical" sx={{cursor:"default", userSelect:"none"}}>{current?.ai ? 'for' : 'by'}</Divider>
      <Typography level="h4" sx={{pt:8, cursor:"default", userSelect:"none"}}>{current?.author}</Typography>
    </Stack>
    <Stack direction="row" spacing={1}>
      <Chip variant="solid" color="success" size="sm" sx={{width: "min-content"}}>{current?.method}</Chip>
      {current?.ai && <Chip variant="soft" color="info" size="sm" sx={{width: "min-content"}}>ai</Chip>}
    </Stack>
      </Card>
      <Stack spacing={2} sx={{mt:-8}}>
      <Sheet variant="soft" color="info" sx={{px:2, py:2}}>
      <Typography level="h3">Ingredients</Typography>
      <Typography sx={{whiteSpace: "pre-wrap"}}>{current?.ingredients}</Typography>
      </Sheet>
      <Sheet variant="soft" color="success" sx={{px:2, py:2}}>
      <Typography level="h3">Instructions</Typography>
      <Typography sx={{whiteSpace: "pre-wrap"}}>{current?.instructions}</Typography>
      </Sheet>
      </Stack>
    </Sheet>
    </>
  )
}


export default RecipePage