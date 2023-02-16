import { Sheet, Typography, Button, FormControl, FormLabel, Input, Textarea } from "@mui/joy"

const handleSubmit = (e) => {
  e.preventDefault()
  const {name, method, description} = e.target
  console.log(name.value, method.value, description.value)
}

const RecipeForm = () => {

  const test = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
  Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.`

  return (
    <Sheet
    sx={{
      width: "100%",
      mx: 'auto', // margin left & right
      my: 4, // margin top & botom
      py: 3, // padding top & bottom
      px: 2, // padding left & right
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      borderRadius: 'sm',
      boxShadow: 'md',
    }}
    variant="outlined"
  >
    <div>
      <Typography level="h4" component="h1" align="center">
        <b>Food Thing</b>
      </Typography>
      <Typography level="body2" align="center">create a recipe</Typography>
    </div>
    <form onSubmit={handleSubmit}>
    <FormControl sx={{ width: "30vh", alignSelf: "center"}}>
      <FormLabel>Name</FormLabel>
      <Input
        name="name"
        type="text"
        placeholder="name"
      />
    </FormControl>
    <FormControl sx={{ width: "30vh", alignSelf: "center"}}>
      <FormLabel>Method</FormLabel>
      <Input
        // html input attribute
        name="method"
        type="text"
        placeholder="method"
      />
    </FormControl>
    <FormControl>
      <FormLabel>Description</FormLabel>
      <Textarea color="success" minRows={6} placeholder={test} name="description" />
    </FormControl>
    <Button type="submit" x={{ mt: 1, maxWidth: "150px", alignSelf: "center" }}>Submit</Button>
    </form>
  </Sheet>
    )
}

export default RecipeForm