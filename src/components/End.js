import {Sheet, Typography, IconButton} from '@mui/joy'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const End = () => {
return (
  <>
  <Sheet variant="plain" sx={{px: 14, py: 20, height: "100vh", bgcolor:"black"}}>
    <Typography level="display2" sx={{color: "white"}}>
      Oṣadhi is a platform<br/>for the future of <br/> what <Typography level="display2" sx={{color: "green"}}>fuels</Typography> humanity.
    </Typography>
  </Sheet>
  <Sheet>
  <IconButton
          aria-label="Go to top"
          size="lg"
          variant="solid"
          color="info"
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUpwardIcon />
        </IconButton>
  </Sheet>
  </>
)
}

export default End