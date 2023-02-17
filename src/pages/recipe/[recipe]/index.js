import { useRouter } from "next/router"

const RecipePage = () => {
  const {query: {recipe}} = useRouter()
  return (
    <div>
      <h1>{recipe}</h1>
    </div>
  )
}


export default RecipePage