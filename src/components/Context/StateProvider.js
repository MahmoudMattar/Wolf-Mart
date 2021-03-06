import { useContext, createContext, useReducer } from "react";

// prepares the data layer
export const StateContext = createContext();

// Wrap our App and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Put Information from the data layer
export const useStateValue = () => useContext(StateContext);
