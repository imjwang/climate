import { signInWithPopup, signOut } from "firebase/auth";
import { Button } from "@mui/material";
import { auth, provider } from "@/utils/firebase";
import { useContext } from 'react'
import {FirestoreContext} from '@/context/firestoreStore'


const Dashboard = () => {
  const {state, dispatch} = useContext(FirestoreContext)

  const signIn = async () => {
    await signInWithPopup(auth, provider);
    dispatch({type: 'SET_AUTH', payload: true})
  }
  const logOut = async () => {
    await signOut(auth);
    dispatch({type: 'SET_AUTH', payload: false})
  }


  return (
    <div>
      <h1>Dashboard</h1>
      <h1>logged in: {state.authenticated ? 'true' : 'false'}</h1>
      <Button onClick={signIn}>Sign in</Button>
      <Button onClick={logOut}>Sign out</Button>
    </div>
  );
};

export default Dashboard;