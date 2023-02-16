import { useState, useMemo } from "react"
import { Input, Button, Typography } from "@mui/joy"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { storage } from "@/utils/firebase"

const metadata = {
  contentType: 'image/png',
}


const ImageUpload = () => {
  const [image, setImage] = useState({})

  const handleClick = () => {
    const superSecureHash = Date.now()
    const storageRef = ref(storage, `images/${superSecureHash}-${image.name}`)
    const uploadTask = uploadBytesResumable(storageRef, image, metadata)
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log(`Upload is ${progress}% done`)
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused')
          break
        case 'running':
          console.log('Upload is running')
          break
        default:
          break
      }
    }, (error) => {
      console.log(error)
    }, () => {
      //need to save this to firestore
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL)
      })
    })
  }
  
  return (
    <>
    <Typography level="h4">Image Upload</Typography>
    <Input
      type="file"
      onChange={(e) => setImage(e.target.files[0])}
    />
    <Button
      onClick={handleClick}
    >
      Upload
    </Button>

    </>
  )
}


export default ImageUpload