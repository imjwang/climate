import { Input, FormControl, FormLabel, FormHelperText } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";


const SearchBar = () => {
  const [input, setInput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{my: 2}}>
        <FormLabel>Food Search</FormLabel>
      <Input value={input} onChange={e => setInput(e.target.value)} 
      size="lg" variant="outlined" placeholder="idlis..." 
      startDecorator={<SearchIcon />}
      autoComplete="off"
    sx={{
      width: '50vw',
      fontSize: 22,
    }}
    />
    <FormHelperText>yum.</FormHelperText>
    </FormControl>
    </form>
  )
}


export default SearchBar