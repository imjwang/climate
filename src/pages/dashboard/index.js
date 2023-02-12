import { signInWithPopup, signOut } from "firebase/auth";
import { Button } from "@mui/material";
import { auth, provider } from "@/utils/firebase";
import { useState } from 'react'


const Dashboard = () => {
  const [logged, setLogged] = useState(false);
  const signIn = async () => {
    await signInWithPopup(auth, provider);
    setLogged(true)
  }
  const logOut = async () => {
    await signOut(auth);
    setLogged(false)
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>logged in: {logged ? 'true' : 'false'}</h1>
      <Button onClick={signIn}>Sign in</Button>
      <Button onClick={logOut}>Sign out</Button>
    </div>
  );
};

export default Dashboard;