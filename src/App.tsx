import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import ThemeContextProvider, {
  ThemeContext,
} from "./context/ThemeContextProvider";
import MainScreen from "./Screens/MainScreen";

function App() {

  return (
   <MainScreen/>
  );
}

export default App;
