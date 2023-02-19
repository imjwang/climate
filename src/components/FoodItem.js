import { AspectRatio, Card, CardOverflow, Divider, Typography, IconButton, Link } from "@mui/joy"
import { Favorite } from "@mui/icons-material"
import Image from "next/image"
import { useState, useContext } from "react"
import { FirestoreContext } from "@/context/firestoreStore"

const FoodItem = ({recipe, url, name, image, author}) => {
  const {state} = useContext(FirestoreContext)
  const liked = state.likedRecipes?.includes(url)

  return (
    <>
    <Card variant="outlined" sx={{ width: "100%" }}>
    <CardOverflow>
      <AspectRatio ratio="2">
        <img
          src={image}
          loading="lazy"
          alt={name}
        />
      </AspectRatio>
      {liked && ( 
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
      <Link href={`/recipe/${url}`} overlay underline="none">
        {name}
      </Link>
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
        {author}
      </Typography>
    </CardOverflow>
  </Card>
    </>
  )
}

export default FoodItem