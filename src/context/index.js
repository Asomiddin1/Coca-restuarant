import { createContext, useReducer } from "react";

const initinalValue = {
  modal: false,
  addNote: false,
  orderCon:false,
  sLeft:false,
  navig:false,
  toggle: true,
};

export const Context = createContext();

const reducer = (state = initinalValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_NAV':
   const nav = state.navig
   return {...state , navig:!nav}
    case 'SLEFT_ON':
     const sL = state.sLeft
     return { ...state, sLeft: !sL }
    case 'ORDER_CON':
      const ordr = state.orderCon
      return { ...state, orderCon: !ordr }
    case 'ADD_NOTE':
      const as12 = state.addNote
      return { ...state, addNote: !as12 }
    case "SET_MODAL":
      let asd = state.modal;
      return { ...state, modal: !asd };

    case "SET_TOGGLE":
      return { ...state, toggle: payload };

    default:
      return { state };
  }
};
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initinalValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
