import { createContext, useReducer } from "react";

const initinalValue = {
  modal: false,
  addNote: false,
  toggle: true,
};

export const Context = createContext();

const reducer = (state = initinalValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_NOTE":
      const as12 = state.addNote;
      return { ...state, modal: !as12 };
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
