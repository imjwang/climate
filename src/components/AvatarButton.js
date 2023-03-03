import { Avatar, Chip } from "@mui/joy"
import { useContext } from "react"
import { FirestoreContext } from "@/context/firestoreStore"
import Image from "next/image"
import {auth, provider} from '@/utils/firebase'
import { signInWithPopup, signOut } from "firebase/auth";
import toast from "react-hot-toast"
import Alert from "./Alert"


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



const AvatarButton = () => {
  const { state } = useContext(FirestoreContext)

  const handleClick = async () => {
    await (state.authenticated ? logOut() : signIn())
    toast(t => <Alert t msg={state.authenticated ? "Logged Out" : "Logged In"} color="info" />)
  }
  

  return (
    <Chip
    variant="soft"
    color="success"
    size="lg"
    startDecorator={state.photo ? <Avatar variant="solid" color="primary" size="lg" alt={state.username} src={state.photo} /> : <Image src='/social-google.svg' height={24} width={24} alt='google icon' />}
    sx={{
      my:3
    }}
    onClick={handleClick}
  >
    {state.username ?? 'Log In'}
  </Chip>
  )
  }

export default AvatarButton