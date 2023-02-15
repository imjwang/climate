import {Sheet, Grid, Button} from '@mui/joy'
import {useContext} from 'react'
import {FirestoreContext} from '@/context/firestoreStore'
import Image from 'next/image'
import { signInWithPopup, signOut } from "firebase/auth";
import {auth, provider} from '@/utils/firebase'

const UserInfo = () => {
  const {state, dispatch} = useContext(FirestoreContext)

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error)
    }
  }
  const logOut = async () => {
    await signOut(auth);
  }
  return (
    <Sheet sx={{mx:2, my:4}}>
    <Grid container spacing={2} sx={{flexGrow: 1}}>
      <Grid xs={12}>
  <h1>logged in: {state.authenticated ? 'true' : 'false'}</h1>
  {state.authenticated && 
  <>
  <h2>username: {state.username}</h2>
  <p>uid: {state.uid}</p>
  <Image
    alt="profile pic"
    src={state.photo}
    width={100}
    height={100}
  />
  </>
  }
      </Grid>
      <Grid xs={4}>
  <Button onClick={signIn}>Sign in</Button>
      </Grid>
      <Grid xs={4}>
  <Button onClick={logOut}>Sign out</Button>
        </Grid>
    </Grid>
  </Sheet>
  )
}


export default UserInfo