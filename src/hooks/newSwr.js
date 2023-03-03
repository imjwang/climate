import useSWRInfinite from 'swr/infinite'


const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && previousPageData.length < 3) return null
  if (pageIndex === 0) return 'api/search?cursor=0'
  return `/api/search?cursor=${previousPageData[previousPageData.length-1].path}`
}

const fetcher = (url) => fetch(url).then((res) => res.json())

const useIRecipes = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher)
  return {data, size, setSize}
}

export default useIRecipes