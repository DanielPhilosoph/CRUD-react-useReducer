import { createContext } from "react";
import React, { useReducer } from "react";

import { mainReducer } from "../reducers/MainReducer";
import friends from "../db/db";

//? Create context - will be used to access the provider value
export const mainContext = createContext();

export default function StateProvider(props) {
  //? Destructuring useReducer
  const [friendsState, dispatch] = useReducer(mainReducer, [...friends]);

  return (
    <mainContext.Provider value={{ friendsState, dispatch }}>
      {props.children}
    </mainContext.Provider>
  );
}
