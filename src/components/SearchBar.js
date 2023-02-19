import { Autocomplete, Button} from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";


const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const {search} = e.target
    console.log(search.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Autocomplete
      size="lg" variant="outlined" placeholder="idli..." 
      startDecorator={<SearchIcon />}
      endDecorator={<Button type="submit">Search</Button>}
      options={["bake", "grill", "fry", "boil", "steam"]}
      name="search"
      freeSolo
      autoHighlight
      autoComplete
      includeInputInList
      disableClearable
      sx={{
      width: '50vw',
      fontSize: 22,
      mb: 2,
    }}
    />
    </form>
  )
}


export default SearchBar