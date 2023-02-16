import useSwr from 'swr'
import { useRouter } from 'next/router'

const fetcher = (url) => fetch(url).then((res) => res.json())

const TestPage = () => {

  // const {query} = useRouter()

  const {data, error, isLoading} = useSwr('/api/openai', fetcher)

  if (error) return <div>Failed to load user</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return <div>{data.data.choices[0].text}</div>

}



export default TestPage