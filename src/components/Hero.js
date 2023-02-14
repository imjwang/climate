import {Container, Box, Typography, Button, Link} from '@mui/joy';
import HeroLayout from './HeroLayout';
import NextLink from  'next/link';

const Hero = () => {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url("/background.jpeg")`,
        backgroundColor: 'cyan',
        backgroundPosition: 'center',
      }}
    >
      <Typography color="inherit" align="center" level="h1" marked="center">
        IPSUM
      </Typography>
      <Typography
        color="inherit"
        align="center"
        level="h4"
        sx={{ mb: 4, mt: { xs: 2, sm: 4 } }}
      >
        Something something food app platform thing
      </Typography>
      <NextLink href="/dashboard">
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