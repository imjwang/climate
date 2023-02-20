import { Card, FormControl, Stack, Textarea, FormLabel, Select, Button, Option} from "@mui/joy"
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import { FirestoreContext } from "@/context/firestoreStore";
import { useContext } from "react";

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

const methodTypes = ["bake", "grill", "fry", "boil", "steam"]

const GenerateForm = () => {
  
  const {state, dispatch} = useContext(FirestoreContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {ingredients, method} = e.target
    console.log(method[1].value, ingredients.value)

    dispatch({type: 'SET_LOADING', payload: true})
    const initial = await fetch(`/api/openai?prompt=${ingredients.value}&type=INITIAL&method=${method[1].value}`)
    const data = await initial.json()
    console.log(data)
    const initialResult = data.data.choices[0].text
    dispatch({type: 'SET_LOADING', payload: false})
    
    dispatch({type: 'SET_LOADING', payload: true})
    const climate = await fetch(`/api/openai?prompt=${initialResult}&type=CLIMATE`)
    const dataClimate = await climate.json()
    console.log(dataClimate)
    const climateResult = dataClimate.data.choices[0].text
    dispatch({type: 'SET_LOADING', payload: false})

    dispatch({type: 'SET_LOADING', payload: true})
    const cleanLikes = state?.likedRecipes.map((recipe) => recipe.split('-')[0]).join(', \n')
    const personality = await fetch(`/api/openai?prompt=${cleanLikes}}&type=PERSONALITY`)
    const dataPersonality = await personality.json()
    const personalityResult = dataPersonality.data.choices[0].text

    const personal = await fetch(`/api/openai?prompt=${initialResult}&type=PERSONAL&method=${personalityResult}`)
    const dataPersonal = await personal.json()
    console.log(dataPersonal)
    const personalResult = dataPersonal.data.choices[0].text
    console.log(personalResult)
    dispatch({type: 'SET_LOADING', payload: false})

  }

  return (
    <form onSubmit={handleSubmit}>
  <Card>
    <Stack spacing={2}>
    <FormControl>
      <FormLabel>Ingredients</FormLabel>
      <Textarea variant="outlined" color="info" minRows={16} placeholder={test2} name="ingredients" required />
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
  <Button type="submit" variant="solid" color="info" startDecorator={<LocalDiningOutlinedIcon />}>
    Submit
  </Button>
    </Stack>
  </Card>
    </form>
  )
}



export default GenerateForm