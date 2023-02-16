
import Link from "next/link"
import { Avatar } from "@mui/joy"
import { useContext } from "react"
import { FirestoreContext } from "@/context/firestoreStore"

const AvatarButton = () => {
  const { state } = useContext(FirestoreContext)

  return (
    <Link href={"/account"}>
    <Avatar variant="solid" color="primary" size="lg" alt={state.username} src={state.photo} sx={{ mt:2, mr:2 }} />
    </Link>
  )
  }

export default AvatarButton