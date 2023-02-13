import {createContext, useReducer, useMemo} from 'react'

const initialState = {
  authenticated: false,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {...state, authenticated: action.payload}
    default:
      return state
  }
}

export const FirestoreContext = createContext()

export const FirestoreProvider = ({children}) => {

  const [state, dispatch] = useReducer(firestoreReducer, initialState)

  const value = useMemo(() => ({state, dispatch}), [state])

  return <FirestoreContext.Provider value={value}>{children}</FirestoreContext.Provider>
}