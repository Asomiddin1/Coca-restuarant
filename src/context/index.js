import { createContext, useReducer } from "react"

const initinalValue = {
  modal: false,
  addNote: false
}




export const Context = createContext()

const reducer = (state = initinalValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_NOTE':
      const as12 = state.addNote
      return { ...state, modal: !as12 }
    case 'SET_MODAL':
      let asd = state.modal
      return { ...state, modal: !asd }

    default:
      return { state };
  }
}
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initinalValue)
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default Provider