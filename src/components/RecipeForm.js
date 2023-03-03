import { Card, Typography, Option, Button, FormControl, FormLabel, Input, Textarea, Select, Stack } from "@mui/joy"
import { useState, useContext, useRef } from "react"
import ImageUpload from "@/components/ImageUpload"
import { storage } from "@/utils/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { FirestoreContext, createRecipe } from "@/context/firestoreStore"
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import Alert from "@/components/Alert"
import { toast } from "react-hot-toast"

const methodTypes = ["bake", "grill", "stir fry", "boil", "steam", "deep fry"]

const ingredientsPlaceholder = `urad dal
idli rice
thick poha
salt
water`

const instructionsPlaceholder = `Grease the idli mould with oil. Gently and lightly swirl the batter.
Take your idli steamer or pressure cooker or electric cooker or Instant pot. Add some 2 to 2.5 cups water and heat the water until it comes to a light boil. 
Keep the idli mould in the steamer or pressure cooker. Steam for 12 to 15 minutes.
Check for doneness by carefully inserting a bamboo skewer or knife. If it does not come out clean, then keep again for a few more minutes.
When done remove the idli mould from the cooker. Don’t overcook as then they become dry. Dip a spoon or butter knife in water and slid them through the idlis.
Remove and place the idlis in a warm container.`


const RecipeForm = () => {
  const { state, dispatch } = useContext(FirestoreContext)
  const [image, setImage] = useState(null)
  const formRef = useRef()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!state.authenticated) {
      toast(t => <Alert t={t} color="danger" msg="You must be logged in to submit a recipe!" />)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const superSecureHash = Date.now()
  
      const {name, method, ingredients, instructions} = e.target
      const recipe = {uid: superSecureHash, name: name.value, 
        method: method[1].value, ingredients: ingredients.value, 
        instructions: instructions.value, author: state.username, ai: false}
        
      const metadata = {
        contentType: 'image/png',
      }
      
      const storageRef = ref(storage, `images/${superSecureHash}-${image?.name}`)
  
      formRef.current.reset()
      setImage(null)
  
      dispatch({type: 'SET_LOADING', payload: true})
  
      await uploadBytes(storageRef, image, metadata)
      const url = await getDownloadURL(storageRef)
      await createRecipe({...recipe, image: url})
      
      dispatch({type: 'SET_LOADING', payload: false})
      window.scrollTo({ top: 0, behavior: 'smooth' })
      toast(t => <Alert t={t} color="success" msg="Recipe submitted successfully!" />)
    }

  }

  return (
    <>
    <form onSubmit={handleSubmit} ref={formRef} >
      <ImageUpload image={image} setImage={setImage} />
      <Card
      color="primary"
      variant="soft"
      sx={{
        width: "80%",
        height: "100%",
        mx: "auto", // margin left & right
        mb: {md:12}, // margin top & botom
        mt: {md:4},
        py: {md:3}, // padding top & bottom
        px: {md:8}, // padding left & right
        boxShadow: "md"
      }}
    >
      <Stack spacing={4}>
      <>
      <Typography fontWeight="lg" level="h4" align="center">
        Recipe Form
      </Typography>
      </>
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input
        name="name"
        type="text"
        variant="outlined"
        color="info"
        placeholder="name"
        required
      />
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
    <FormControl>
      <FormLabel>Ingredients</FormLabel>
      <Textarea variant="outlined" color="info" minRows={8} placeholder={ingredientsPlaceholder} name="ingredients" required />
    </FormControl>
    <FormControl>
      <FormLabel>Instructions</FormLabel>
      <Textarea variant="outlined" color="info" minRows={16} placeholder={instructionsPlaceholder} name="instructions" required />
    </FormControl>
    <Button type="submit" sx={{ width:"400px", alignSelf: "center" }} startDecorator={<LocalDiningOutlinedIcon />}>Publish</Button>
      </Stack>
  </Card>
    </form>
    </>
    )
}

export default RecipeForm