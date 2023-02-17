import {Container, Box, styled} from '@mui/joy';

const HeroLayoutRoot = styled('section')(({ height }) => ({
  color: 'white',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: height || '80vh',
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

const HeroLayout = ({sxBackground, children, height}) => {
  return (
    <HeroLayoutRoot height={height}>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          objectFit: 'cover',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.2,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
      </Container>
    </HeroLayoutRoot>
  );
}

export default HeroLayout;