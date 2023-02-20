import { useContext } from "react"
import AlertContext from "@/context/alertContext"
import MuiAlert from "@mui/joy/Alert"

const Alert = () => {
  const {state} = useContext(AlertContext)
  
  return (
    state !== null && (
      <MuiAlert variant="solid" size="lg" color={state.type}>
        {state.message}
      </MuiAlert>
  )
  )
}

export default Alert