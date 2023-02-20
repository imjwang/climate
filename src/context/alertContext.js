import {createContext, useReducer, useMemo} from 'react'

const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return action.payload
    case 'HIDE_ALERT':
      return null
    default:
      return state
  }
}

const AlertContext = createContext()

const initialState = null

export const AlertProvider = ({children}) => {
  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (type, message) => {
    dispatch({type: 'SHOW_ALERT', payload: {type, message}})
    setTimeout(() => {
      dispatch({type: 'HIDE_ALERT'})
    }, 3000)
  }

  return (
    <AlertContext.Provider value={{state, setAlert}}>
      {children}
    </AlertContext.Provider>
  )
}
export default AlertContext