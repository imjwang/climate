import {Container, Box, Typography, Button, Link} from '@mui/material';
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
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 2, sm: 4 } }}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <NextLink href="/dashboard">
      <Button
        color="primary"
        variant="contained"
        size="large"
        sx={{ minWidth: 200 }}
      >
        Join Now
      </Button>
      </NextLink>
    </HeroLayout>
  );
}

export default Hero;