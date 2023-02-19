import { useState, useMemo, useRef } from "react"
import { Input, Button, Typography, Card } from "@mui/joy"


const ImageUpload = ({image, setImage}) => {
  const imgRef = useRef()

  const handleClear = () => {
    setImage(null)
    imgRef.current.value = null
  }
  
  return (
    <>
    <Typography level="h4">Image Upload</Typography>
    <input
      accept="image/*"
      type="file"
      onChange={(e) => setImage(e.target.files[0])}
      single
      ref={imgRef}
    />
    {image && 
    <>
    <Button onClick={handleClear}>clear</Button>
    <Typography level="body2">preview</Typography>
    <Card
    sx={{
      height: "50%",
      width: "50%",
      boxShadow: "sm"
    }}
    >
      <img src={URL.createObjectURL(image)} />
    </Card>
    </>
  }
    </>
  )
}


export default ImageUpload