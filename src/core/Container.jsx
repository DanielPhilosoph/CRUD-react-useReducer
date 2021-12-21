import React from "react";

import StateProvider from "../context/StateProvider";
import NavBar from "./NavBar";
import Page from "./Page";

export default function Container() {
  //? Every child in StateProvider will recognize the state (context in StateProvider)
  return (
    <StateProvider>
      <NavBar />
      <Page />
    </StateProvider>
  );
}
