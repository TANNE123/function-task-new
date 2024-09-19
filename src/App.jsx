import React from "react";
import { useState } from "react";
import { createContext } from "react";
import GlobuleCounter from "./components/05-09-24tasks/globlecounter";
import GlobuleTheme from "./components/05-09-24tasks/themes/golbulethemes";

export const UseCounter = createContext();
const App = () => {
  const [counter, setCountry] = useState(0);
  const [theme,setTheme]=useState(true)

  const counterHandler = () => {
    setCountry(counter + 1);
  };

  const themeHandler=()=>{
    setTheme(!theme)
  }
  return (
    <UseCounter.Provider
      value={{
        counterHandler,
        themeHandler,
        theme,
        counter,
      }}
      
    >
      <GlobuleCounter/>
      <GlobuleTheme/>
    </UseCounter.Provider>
  );
};

export default App;
