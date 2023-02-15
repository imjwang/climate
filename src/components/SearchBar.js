import { Input} from "@mui/joy";
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
      <Input value={input} onChange={e => setInput(e.target.value)} 
      size="lg" variant="outlined" placeholder="idli..." 
      startDecorator={<SearchIcon />}
      autoComplete="off"
    sx={{
      width: '50vw',
      fontSize: 22,
      my: 2,
    }}
    />
    </form>
  )
}


export default SearchBar