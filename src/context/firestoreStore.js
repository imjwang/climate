import {createContext, useReducer, useMemo, useEffect} from 'react'
import {auth, provider, firestore} from '@/utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {doc, getDoc, setDoc} from 'firebase/firestore'

const initialState = {
  authenticated: false,
  username: '',
  photo: '',
  uid: '',
  likedRecipes: null,
  traits: null,
}

const getUser = async (uid) => {
  const ref = doc(firestore, `users/${uid}`)
  const docSnap = await getDoc(ref)
  return docSnap.data()
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN_OUT':
      const {displayName: username, photoURL: photo, uid} = action.payload
      const authenticated = Object.keys(action.payload).length !== 0
      return {...state, username, photo, uid, authenticated}
    case 'SET_DATA':
      const {likedRecipes, traits} = action.payload
      return {...state, likedRecipes, traits}
    default:
      return state
  }
}

export const FirestoreContext = createContext()


export const FirestoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(firestoreReducer, initialState)
  
  const [user] = useAuthState(auth)
  
  const getUserData = async (uid) => {
    const data = await getUser(uid)
    dispatch({type: 'SET_DATA', payload: data})
  }

  useEffect(() => {
    dispatch({type: 'SIGN_IN_OUT', payload: user ?? {}})
    if (user !== null) {
      getUserData(user.uid, user.displayName)
    } else {
      dispatch({type: 'SET_DATA', payload: {}})
    }
  }, [user])

  const value = useMemo(() => ({state, dispatch}), [state])

  return <FirestoreContext.Provider value={value}>{children}</FirestoreContext.Provider>
}