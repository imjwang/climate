import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

const useRecipes = () => {
  const {data, error, isLoading} = useSwr('/api/search', fetcher)
  return {data, error, isLoading}
}

export default useRecipes