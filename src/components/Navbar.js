import {Box, Sheet, Typography} from '@mui/joy'
import { useRouter } from 'next/router';
import SearchBar from '@/components/SearchBar'
import { FirestoreContext } from '@/context/firestoreStore';
import { useContext } from 'react';
import AvatarButton from '@/components/AvatarButton';

const Navbar = () => {
  const { state } = useContext(FirestoreContext)
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
        height: '10vh',
        bgcolor: '#0d7028',
        display: 'flex',
        justifyContent: 'space-between',
        px: 2,
        py: 1,
        minHeight: '100px',
      }}>
      <Typography color="inherit" align="center" level="h4" fontWeight="xl" sx={{py:3, cursor:"default", userSelect:"none" }}>
      Oṣadhi
      </Typography>
        {/* <SearchBar /> */}
        <AvatarButton />
      </Sheet>
    </>
  )

}

export default Navbar