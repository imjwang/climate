import {firestore} from '@/utils/firebase'
import { collection, query, orderBy, startAt, limit, getDocs, documentId } from "firebase/firestore";  

const searchHandler = async (req, res) => { 
  const { query: {cursor} } = req

  const next = query(collection(firestore, "recipes"),
    orderBy(documentId()),
      startAt(cursor),
      limit(4));

  const recipeSnapshot = await getDocs(next)

  const returnData = []

  recipeSnapshot.forEach((doc) => {
    returnData.push({'path': doc.id, ...doc.data()})
  })

  return res.status(200).json(cursor !== '0' ? returnData.slice(1) : returnData)
}


export default searchHandler