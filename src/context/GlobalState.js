import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  // transactions will be accessed by different components to do calculations for balance, etc.
  transactions: []
}


// Create a globalContext
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id){
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction){
    dispatch({

      type: "ADD_TRANSACTION",
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
    );
}