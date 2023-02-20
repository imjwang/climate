import { Card, FormControl, Stack, Textarea, FormLabel, Select, Button, Option} from "@mui/joy"
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import { FirestoreContext, createRecipe } from "@/context/firestoreStore";
import { useContext, useRef } from "react";
import AlertContext from "@/context/alertContext";
import party from 'party-js'
import CelebrationIcon from '@mui/icons-material/Celebration';
import Link from "next/link";
import { storage } from "@/utils/firebase";
import {ref, uploadBytes, getDownloadURL, uploadString} from "firebase/storage";

const ingredientsPlaceholder = `8 dried guajillo chiles, rinsed, stems and seeds removed
3 dried chile de arbol chiles, rinsed, stems removed
3 Roma tomatoes, chopped
2 cloves garlic
1/2 medium white onion, roughly chopped
1 teaspoon coarse kosher salt
4 tablespoons olive oil
1.5 pounds large raw shrimp, peeled, deveined and tail-on
salt and pepper, to taste
`

const methodTypes = ["bake", "grill", "stir fry", "boil", "steam", "deep fry"]

const GenerateForm = () => {
  const partyRef = useRef(null)
  const {state, dispatch} = useContext(FirestoreContext)
  const {setAlert} = useContext(AlertContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {ingredients, method} = e.target

    if (!state.authenticated) {
      setAlert("danger", "You must be logged in to submit a recipe")
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {

    dispatch({type: 'SET_LOADING', payload: true})
    const initial = await fetch(`/api/openai?prompt=${ingredients.value}&type=INITIAL&method=${method[1].value}`)
    const data = await initial.json()
    const initialResult = data.data.choices[0].text
    console.log(initialResult)
    const initialDalle = await fetch(`/api/openai?prompt=${ingredients.value}
    ${initialResult}&type=DALLE`)
    const dataDalle = await initialDalle.json()
    const dalleResult = dataDalle.data.choices[0].text
    console.log(dalleResult)
    // dispatch({type: 'SET_LOADING', payload: false})
    
    // dispatch({type: 'SET_LOADING', payload: true})
    const climate = await fetch(`/api/openai?prompt=${initialResult}&type=CLIMATE&method=${ingredients.value}`)
    const dataClimate = await climate.json()
    const climateResult = dataClimate.data.choices[0].text
    const [climateIngredients, climateInstructions] = climateResult.split('Instructions:')
    console.log(climateResult)
    const climateDalle = await fetch(`/api/openai?prompt=${climateIngredients} 
    ${climateInstructions}&type=DALLE`)
    const climateDataDalle = await climateDalle.json()
    const climateDalleResult = climateDataDalle.data.choices[0].text
    console.log(climateDalleResult)
    // dispatch({type: 'SET_LOADING', payload: false})


    // dispatch({type: 'SET_LOADING', payload: true})
    const cleanLikes = state?.likedRecipes.map((recipe) => recipe.split('-')[0]).join(', \n')
    const personality = await fetch(`/api/openai?prompt=${cleanLikes}}&type=PERSONALITY`)
    const dataPersonality = await personality.json()
    const personalityResult = dataPersonality.data.choices[0].text
    console.log(personalityResult)

    const personal = await fetch(`/api/openai?prompt=${climateResult}&type=PERSONAL&method=${personalityResult}`)
    const dataPersonal = await personal.json()
    const personalResult = dataPersonal.data.choices[0].text
    const [personalIngredients, personalInstructions] = personalResult.split('Instructions:')
    console.log(personalResult)
    const personalDalle = await fetch(`/api/openai?prompt=${personalIngredients} ${personalInstructions}&type=DALLE`)
    const personalDataDalle = await personalDalle.json()
    const personalDalleResult = personalDataDalle.data.choices[0].text
    console.log(personalDalleResult)
    // dispatch({type: 'SET_LOADING', payload: false})


    // dispatch({type: 'SET_LOADING', payload: true})
    const initialDalleRes = await fetch(`/api/openai/image?prompt=${dalleResult}`)
    const climateDalleRes = await fetch(`/api/openai/image?prompt=${climateDalleResult}`)
    const personalDalleRes = await fetch(`/api/openai/image?prompt=${personalDalleResult}`)
    const initialImgData = await initialDalleRes.json()
    const climateImgData = await climateDalleRes.json()
    const personalImgData = await personalDalleRes.json()
    // dispatch({type: 'SET_LOADING', payload: false})
    

    const initialImg = initialImgData.data.data[0].b64_json
    const climateImg = climateImgData.data.data[0].b64_json
    const personalImg = personalImgData.data.data[0].b64_json


    const metadata = {
      contentType: 'image/png',
    }

    // const ifetch = await fetch(`/api/test?url=${initialImg}`)
    // const iblob = await ifetch.json()
    // console.log(iblob)

    // const cfetch = await fetch(climateImg)
    // const cblob = await cfetch.blob()

    // const pfetch = await fetch(personalImg)
    // const pblob = await pfetch.blob()

    const thisIsSecureHash = Date.now()
    
    const istorageRef = ref(storage, `images/${thisIsSecureHash}-${dalleResult.trim()}.png`)
    await uploadString(istorageRef, initialImg, 'base64', metadata)
    // await uploadBytes(istorageRef, iblob, metadata)
    const iurl = await getDownloadURL(istorageRef)

    const cstorageRef = ref(storage, `images/${thisIsSecureHash + 1}-${climateDalleResult.trim()}.png`)
    await uploadString(cstorageRef, climateImg, 'base64', metadata)
    // await uploadBytes(cstorageRef, cblob, metadata)
    const curl = await getDownloadURL(cstorageRef)

    const pstorageRef = ref(storage, `images/${thisIsSecureHash + 2}-${personalDalleResult.trim()}.png`)
    await uploadString(pstorageRef, personalImg, 'base64', metadata)
    // await uploadBytes(pstorageRef, pblob, metadata)
    const purl = await getDownloadURL(pstorageRef)

    
    const initialRecipe = {
      ai: true,
      author: `${state.username}`,
      image: iurl,
      ingredients: ingredients.value,
      instructions: initialResult.trim(),
      method: method[1].value,
      name: dalleResult.trim(),
      uid: thisIsSecureHash
    }

  const climateRecipe = {
    ai: true,
    author: `${state.username}`,
    image: curl,
    ingredients: climateIngredients.trim(),
    instructions: climateInstructions.trim(),
    method: method[1].value,
    name: climateDalleResult.trim(),
    uid: thisIsSecureHash + 1
  }

  const personalRecipe = {
    ai: true,
    author: `${state.username}`,
    image: purl,
    ingredients: personalIngredients.trim(),
    instructions: personalInstructions.trim(),
    method: method[1].value,
    name: personalDalleResult.trim(),
    uid: thisIsSecureHash + 2
}

    // dispatch({type: 'SET_LOADING', payload: true})
    await createRecipe(initialRecipe)
    await createRecipe(climateRecipe)
    await createRecipe(personalRecipe)


    dispatch({type: 'SET_LOADING', payload: false})
    dispatch({type: 'SHOW_BUTTON', payload: true})
    

    window.scrollTo({ top: 0, behavior: 'smooth' })
    setAlert("success", "Your recipes are available in the Explore page please enjoy this button")
}

  }

  return (
    <form onSubmit={handleSubmit}>
      {state?.celebrate && 
      <>
      <Button
      onClick={() => party.confetti(partyRef.current, { count: 200 })}
      startDecorator={<CelebrationIcon />}
      endDecorator={<CelebrationIcon />}
      >
        CELEBRATE
      </Button>
      </>
      }
  <Card ref={partyRef}>
    <Stack spacing={2}>
    <FormControl>
      <FormLabel>Ingredients</FormLabel>
      <Textarea variant="outlined" color="info" minRows={16} placeholder={ingredientsPlaceholder} name="ingredients" required />
    </FormControl>
    <FormControl>
      <FormLabel>Method</FormLabel>
      <Select
      name="method"
      variant="outlined"
      color="info"
      type="text"
      placeholder="method"
      required
      >
        {methodTypes.map((m) => {
          return (
            <Option key={m} value={m}>
              {m}
            </Option>
          )
        })}
      </Select>
    </FormControl>
  <Button type="submit" disabled={state?.celebrate} variant="solid" color="info" startDecorator={<LocalDiningOutlinedIcon />}>
    Submit
  </Button>
    </Stack>
  </Card>
    </form>
  )
}



export default GenerateForm