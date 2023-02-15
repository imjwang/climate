import { AspectRatio, Card, CardOverflow, Divider, Typography, IconButton, Link } from "@mui/joy"
import { Favorite } from "@mui/icons-material"
import Image from "next/image"
import NextLink from "next/link"
import { useState } from "react"

const FoodItem = ({recipe, name, pic, desc, like}) => {
  return (
    <>
    <Card variant="outlined" sx={{ width: 320 }}>
    <CardOverflow>
      <AspectRatio ratio="2">
        <img
          src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
          srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      {like && ( 
        <Favorite
          aria-label="Like minimal photography"
          color={'danger'}
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
            fontSize: 30
          }}
         />
      )}
    </CardOverflow>
    <Typography level="h2" sx={{ fontSize: 'md', my: 2 }}>
      <NextLink href={`/recipe/${recipe}`} style={{ textDecoration: 'none'}}>
      <Link overlay underline="none">
        Yosemite National Park
      </Link>
      </NextLink>
    </Typography>

    <Divider inset="context" />
    <CardOverflow
      variant="soft"
      sx={{
        display: 'flex',
        gap: 1.5,
        py: 1.5,
        px: 'var(--Card-padding)',
        bgcolor: 'background.level1',
      }}
    >
      <Typography level="h3" sx={{ fontSize: 'sm' }}>
        something
      </Typography>
    </CardOverflow>
  </Card>
    </>
  )
}

export default FoodItem