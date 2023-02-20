
const imageGetHandler = async (req, res) => { 
  const { query: {url} } = req

  const img = await fetch(url)
  const imgBlob = await img.blob()
  console.log(imgBlob)
  const imageObjectURL = URL.createObjectURL(imgBlob);
  console.log(imageObjectURL)

  res.status(200).json({ img: imgBlob})
}

export default imageGetHandler