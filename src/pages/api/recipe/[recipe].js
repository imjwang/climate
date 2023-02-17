//TODO get recipe from firebase
//TODO get image from storage





const recipeHandler = (req, res) => { 
  const { query: {recipe} } = req
  res.status(200).json({ name: `recipe name ${recipe}` })
}

export default recipeHandler