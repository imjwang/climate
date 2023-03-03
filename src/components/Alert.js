import MuiAlert from "@mui/joy/Alert"
import { IconButton, Typography } from "@mui/joy"
import CloseIcon from '@mui/icons-material/Close';
import { toast } from "react-hot-toast";

const Alert = ({t, msg = "", color = "primary", level = "h4"}) => {

  return (
      <MuiAlert variant="solid" color={color} size="lg" 
      sx={{zIndex: 4, width: '100vw', position: "fixed", top: 0}} 
      endDecorator={<IconButton color={color} onClick={() => toast.dismiss(t.id)}><CloseIcon /></IconButton>}>
        <Typography color="inherit" noWrap level={level}>{msg}</Typography>
      </MuiAlert>
  )
}

export default Alert
