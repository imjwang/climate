import {firestore} from '@/utils/firebase'
import {collection, getDocs} from "firebase/firestore"

const searchHandler = async (req, res) => { 
  const recipeSnapshot = await getDocs(collection(firestore, 'recipes'))
  
  const returnData = []

  recipeSnapshot.forEach((doc) => {
    returnData.push({'path': doc.id, ...doc.data()})
  })

  return res.status(200).json(returnData)
}


export default searchHandler