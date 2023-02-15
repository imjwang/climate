import { useRouter } from "next/router"

const RecipePage = () => {
  const router = useRouter()
  const { recipe } = router.query
  return (
    <div>
      <h1>{recipe}</h1>
    </div>
  )
}


export default RecipePage