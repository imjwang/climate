import {createContext, useReducer, useMemo, useEffect} from 'react'
import {auth, provider, firestore} from '@/utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {doc, getDoc, setDoc, updateDoc, arrayRemove, arrayUnion} from 'firebase/firestore'

const initialState = {
  authenticated: false,
  username: '',
  photo: '',
  uid: '',
  likedRecipes: [],
  traits: [],
  loading: false,
  celebrate: false,
}

const getUser = async (uid) => {
  const ref = doc(firestore, `users/${uid}`)
  const docSnap = await getDoc(ref)
  return docSnap.data()
}

export const addLike = async (recipe, uid) => {
  const ref = doc(firestore, `users/${uid}`)
  await updateDoc(ref, {
    likedRecipes: arrayUnion(recipe)
  })
}

export const removeLike = async (recipe, uid) => {
  const ref = doc(firestore, `users/${uid}`)
  await updateDoc(ref, {
    likedRecipes: arrayRemove(recipe)
  })
}

export const createRecipe = async (recipe) => {
  const ref = doc(firestore, `recipes/${recipe.name}-${recipe.uid}`)
  await setDoc(ref, recipe)
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
    case 'SET_LOADING':
      return {...state, loading: action.payload}
    case 'ADD_LIKE':
      state.likedRecipes.push(action.payload)
      return {...state}
    case 'REMOVE_LIKE':
      state.likedRecipes = state.likedRecipes.filter((recipe) => recipe !== action.payload)
      return {...state}
    case 'SHOW_BUTTON':
      return {...state, celebrate: action.payload}
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
    dispatch({type: 'SET_DATA', payload: data ?? {}})
  }

  useEffect(() => {
    dispatch({type: 'SIGN_IN_OUT', payload: user ?? {}})
    if (user !== null) {
      getUserData(user.uid, user.displayName)
    } else {
      dispatch({type: 'SET_DATA', payload: {}})
    }
  }, [user])

  // useEffect(() => {
  //   if (state.authenticated) {
  //     addLike(state.uid, state.likedRecipes)
  //   }
  // }, [state.likedRecipes])

  const value = useMemo(() => ({state, dispatch}), [state])

  return <FirestoreContext.Provider value={value}>{children}</FirestoreContext.Provider>
}