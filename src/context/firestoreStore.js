import {createContext, useReducer, useMemo, useEffect, use} from 'react'
import {auth, provider} from '@/utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const initialState = {
  authenticated: false,
  username: '',
  photo: ''
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {...state, authenticated: action.payload}
    case 'SET_USERNAME':
      return {...state, username: action.payload}
    case 'SET_PHOTO':
      return {...state, photo: action.payload}
    default:
      return state
  }
}

export const FirestoreContext = createContext()

export const FirestoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(firestoreReducer, initialState)
  
  const [user] = useAuthState(auth)

  useEffect(() => {
    dispatch({type: 'SET_AUTH', payload: user !== null})
    dispatch({type: 'SET_USERNAME', payload: user?.displayName})
    dispatch({type: 'SET_PHOTO', payload: user?.photoURL})
  }, [user])

  const value = useMemo(() => ({state, dispatch}), [state])

  return <FirestoreContext.Provider value={value}>{children}</FirestoreContext.Provider>
}