
import Link from "next/link"
import { Avatar, Chip } from "@mui/joy"
import { useContext } from "react"
import { FirestoreContext } from "@/context/firestoreStore"

const AvatarButton = () => {
  const { state } = useContext(FirestoreContext)

  return (
    <Link href={"/account"}>
    <Chip
    variant="soft"
    color="success"
    size="lg"
    startDecorator={<Avatar variant="solid" color="primary" size="lg" alt={state.username} src={state.photo} />}
    sx={{
      my:3
    }}
  >
    {state.username}
  </Chip>
    </Link>
  )
  }

export default AvatarButton