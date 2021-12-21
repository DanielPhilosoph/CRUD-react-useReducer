import { createContext } from "react";
import React, { useReducer } from "react";

import { mainReducer } from "../reducers/MainReducer";
import friends from "../db/db";

export default function StateProvider(props) {
  // Create context
  const mainContext = createContext();

  // Destructuring useReducer
  const [friendsState, dispatch] = useReducer(mainReducer, [...friends]);

  return (
    <mainContext.Provider value={{ friendsState, dispatch }}>
      {props.children}
    </mainContext.Provider>
  );
}
