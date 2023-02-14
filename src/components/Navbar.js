import {Box, Sheet,Button} from '@mui/joy'
import { useRouter } from 'next/router';
import SearchBar from '@/components/SearchBar'


const Navbar = () => {
  
  const router = useRouter()
  
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/account')
  }
  
  return (
    <>
    <Sheet 
      variant="solid"
      sx={{
        width: '100%',
        height: '12vh',
        bgcolor: '#04b545',
        display: 'flex',
        justifyContent: 'space-between',
        px: 2,
      }}>
        <SearchBar />
        <Box sx={{backgroundColor: 'green'}}>flex box2</Box>
        <Box sx={{backgroundColor: 'blue'}}>
          <Button onClick={handleClick}>Account</Button>
        </Box>
      </Sheet>
    </>
  )

}

export default Navbar