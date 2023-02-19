import { Card, Typography, Option, Button, FormControl, FormLabel, Input, Textarea, Select, Stack } from "@mui/joy"
import { useState, useContext, useRef } from "react"
import ImageUpload from "@/components/ImageUpload"
import { storage } from "@/utils/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { FirestoreContext, createRecipe } from "@/context/firestoreStore"
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';

//TODO set these
const methodTypes = ["bake", "grill", "fry", "boil", "steam"]

//TODO better placeholders
const test = `1.Lorem ipsum dolor sit amet, 
2.consectetur adipiscing elit. Nulla vitae elit libero, a pharetra au
3.gue. Nullam id dolor id ni
4.tetur ac, vestibulum a
5.icula ut id elit.a atur et. onec sed odio dui. Donec ullamcorper nulla non metus auc
6.tetur ac, vestibulum a
7. Nulla vitae elit libero, a pharetra 
8.Morbi leo risus, port bh ultricies vehtor fringilla.augue.`

const test2 = `1.Lorem ipsum dolor sit amet, 
2.consectetur adipiscing elit. ulla vitae elit libero, a pharetra au
3.gue. Nullam id dolor id ni
4.tetur ac, vestibulum a
5.icula ut id elit.a ac consect erosc sed odio dui. Donec ullamcorper nulla non metus auc
6.tetur ac, vestibulum a
7. Nulla vitae elit libero, a pharetra 
8.Morbi leo risus, port bh ultri
9.cies vehtor fringilla.augue.
10. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
11. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
12. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`

const RecipeForm = () => {
  const { state, dispatch } = useContext(FirestoreContext)
  const [image, setImage] = useState(null)
  const formRef = useRef()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!state.authenticated) {
      dispatch({type: 'DISPATCH_ALERT', payload: { type: "error", message: 'You must be logged in to submit a recipe'}})
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
      dispatch({type: 'DISPATCH_ALERT', payload: { type: "success", message: 'Recipe submitted successfully'}})
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
        mb: 12, // margin top & botom
        mt: 4,
        py: 3, // padding top & bottom
        px: 8, // padding left & right
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
      <Textarea variant="outlined" color="info" minRows={8} placeholder={test} name="ingredients" required />
    </FormControl>
    <FormControl>
      <FormLabel>Instructions</FormLabel>
      <Textarea variant="outlined" color="info" minRows={16} placeholder={test2} name="instructions" required />
    </FormControl>
    <Button type="submit" sx={{ width:"400px", alignSelf: "center" }} startDecorator={<LocalDiningOutlinedIcon />}>Publish</Button>
      </Stack>
  </Card>
    </form>
    </>
    )
}

export default RecipeForm