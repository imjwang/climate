import {Box, Sheet,Input} from '@mui/joy'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  
  
  return (
    <>
    <Sheet 
      variant="solid"
      sx={{
        width: '100%',
        height: '10vh',
        bgcolor: '#04b545',
        display: 'flex',
        justifyContent: 'space-between',
        px: 2,
      }}>
        <Input size="lg" variant="outlined" placeholder="idlis..." 
          startDecorator={<SearchIcon />}
        sx={{
          width: '50vw',
          fontSize: 22,
          pl: 2,
          my: 2,
          mx: 2,
        }}
        />
        <Box sx={{backgroundColor: 'green'}}>flex box2</Box>
        <Box sx={{backgroundColor: 'blue'}}>flex box3</Box>
      </Sheet>
    </>
  )

}

export default Navbar