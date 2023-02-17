import { useState, useMemo, useRef } from "react"
import { Input, Button, Typography, Card } from "@mui/joy"
import { imageToFirebase } from "@/utils/firebase"



const ImageUpload = () => {
  const [image, setImage] = useState(null)
  const imgRef = useRef()

  const handleClear = () => {
    setImage(null)
    imgRef.current.value = null
  }

  const handleSubmit = e => {
    e.preventDefault()
    imageToFirebase(image)
  }
  
  return (
    <>
    <Typography level="h4">Image Upload</Typography>

    <form onSubmit={handleSubmit}>
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
      boxShadow: "md"
    }}
    >
      <img src={URL.createObjectURL(image)} />
    </Card>
    <Button
      type="submit"
    >
      Upload
    </Button>
    </>
  }
    </form>
    </>
  )
}


export default ImageUpload