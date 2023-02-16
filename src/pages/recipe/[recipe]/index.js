import { useRouter } from "next/router"

const RecipePage = () => {
  const {query} = useRouter()
  return (
    <div>
      <h1>{query}</h1>
    </div>
  )
}


export default RecipePage