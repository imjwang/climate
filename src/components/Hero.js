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
      <Typography color="inherit" align="center" level="h1" marked="center" sx={{pt:4}}>
        Oṣadhi
      </Typography>
      <Typography
        color="inherit"
        align="center"
        level="h4"
        sx={{ mb: 4, mt: 2 }}
      >
        Something something food app platform thing
      </Typography>
      <NextLink href="/search" style={{ textDecoration: 'none'}}>
      <Button
        color="primary"
        variant="solid"
        size="lg"
        sx={{ minWidth: 150 }}
      >
        Join Now
      </Button>
      </NextLink>
    </HeroLayout>
  );
}

export default Hero;