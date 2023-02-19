import { useRouter } from "next/router"
import { Sheet, Typography, IconButton, Stack, Divider, Card } from "@mui/joy"
import HeroLayout from "@/components/HeroLayout"
import useSwr from 'swr'
import { Favorite } from "@mui/icons-material"
import { useState, useEffect, useContext } from "react"
import { FirestoreContext, addLike, removeLike } from "@/context/firestoreStore"

const fetcher = (url) => fetch(url).then((res) => res.json())

const RecipePage = () => {
  // like should be in context
  const {query: {recipe}} = useRouter()
  const {state, dispatch} = useContext(FirestoreContext)
  const {data, error, isLoading} = useSwr(`/api/recipe/${recipe}`, fetcher)
  
  const like = state.likedRecipes?.includes(recipe)


  const handleLike = async () => {
    if (!state.authenticated) {
      dispatch({type: 'DISPATCH_ALERT', payload: {type: "error", message: 'You must be logged in to like a recipe'}})
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
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/climate-823dd.appspot.com/o/images%2F1676654960813-max_depth_example.png?alt=media&token=5c3c3c93-98e8-4f91-ac7d-0177766d5ff2)`,
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
    <Sheet variant="outlined" color="primary" sx={{ px: 2, py: 1, height: "100vh", bgcolor: "white"}}>
      <Card variant="outlined" color="primary" sx={{width:"450px", height:"180px", pt:4}}>
    <Stack spacing={2} direction="row">
      <Typography level="h3" fontWeight="lg" sx={{cursor:"default", userSelect:"none"}}>{data?.name}</Typography>
      <Divider orientation="vertical" sx={{cursor:"default", userSelect:"none"}}>by</Divider>
      <Typography level="h6" sx={{pt:8, cursor:"default", userSelect:"none"}}>recipe author</Typography>
    </Stack>
      </Card>
    </Sheet>
    </>
  )
}


export default RecipePage