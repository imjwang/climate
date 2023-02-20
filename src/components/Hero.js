import {Typography, Button, Link} from '@mui/joy';
import HeroLayout from './HeroLayout';
import NextLink from  'next/link';

const Hero = () => {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url("/background.jpeg")`,
        backgroundColor: 'cyan',
        backgroundPosition: 'center 30%',
      }}
    >
      <Typography color="inherit" align="center" level="display1" sx={{pt:4}}>
        Oṣadhi
      </Typography>
      <Typography
        color="inherit"
        align="center"
        level="h3"
        fontWeight="lg"
        sx={{ mb: 4, mt: 2 }}
      >
        the food platform of the future
      </Typography>
      <NextLink href="/search" style={{ textDecoration: 'none'}}>
      <Button
        color="primary"
        variant="solid"
        size="lg"
        sx={{ minWidth: 130 }}
      >
        Enter
      </Button>
      </NextLink>
    </HeroLayout>
  );
}

export default Hero;