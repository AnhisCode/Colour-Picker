import React, { createContext, useContext, useState } from "react";

// Define the shape of your context
interface ColourContextType {
  setPrimaryColour: (value: string) => void;
  setSecondaryColour: (value: string) => void;
  setAccentColour1: (value: string) => void;
  setAccentColour2: (value: string) => void;
  setAccentColour3: (value: string) => void;
  primaryColour: string;
  secondaryColour: string;
  accentColour1: string;
  accentColour2: string;
  accentColour3: string;
  primaryColourHistory: string[];
  secondaryColourHistory: string[];
  accentColour1History: string[];
  accentColour2History: string[];
  accentColour3History: string[];
}

// Create the context
const MyContext = createContext<ColourContextType | undefined>(undefined);



// Custom hook to access the context
export const useColourContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const MyColourProvider: React.FC = ({ children }) => {

  const [primaryColour, setPColour] = useState("#ffffff");
  const [secondaryColour, setSColour] = useState("#000000");
  const [accentColour1, setAColour1] = useState("#000000");
  const [accentColour2, setAColour2] = useState("#000000");
  const [accentColour3, setAColour3] = useState("#000000");
  const [primaryColourHistory, setPrimaryColourHistory] = useState(["#ffffff"]);
const [secondaryColourHistory, setSecondaryColourHistory] = useState(["#000000"]);
const [accentColour1History, setAccentColour1History] = useState(["#000000"]);
const [accentColour2History, setAccentColour2History] = useState(["#000000"]);
const [accentColour3History, setAccentColour3History] = useState(["#000000"]);

  // handles changing state for colours, as well as keep history of last 6 colours
  const setPrimaryColour = (colour: string) => {
    changeColourHelper(colour, primaryColourHistory, setPrimaryColourHistory, setPColour);
  }
  const setSecondaryColour = (colour: string) => {
    changeColourHelper(colour, secondaryColourHistory, setSecondaryColourHistory, setSColour);
  }
  const setAccentColour1 = (colour: string) => {
    changeColourHelper(colour, accentColour1History, setAccentColour1History, setAColour1);
  }
  const setAccentColour2 = (colour: string) => {
    changeColourHelper(colour, accentColour2History, setAccentColour2History, setAColour2);
  }
  const setAccentColour3 = (colour: string) => {
    changeColourHelper(colour, accentColour3History, setAccentColour3History, setAColour3);
  }


  // Provide the values to the context
  const contextValue: ColourContextType = {
    setPrimaryColour,
    setSecondaryColour,
    setAccentColour1,
    setAccentColour2,
    setAccentColour3,
    primaryColour,
    secondaryColour,
    accentColour1,
    accentColour2,
    accentColour3,
    primaryColourHistory,
    secondaryColourHistory,
    accentColour1History,
    accentColour2History,
    accentColour3History
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

const changeColourHelper = (colour: string,
                            history: string[],
                            setHistory: React.Dispatch<React.SetStateAction<string[]>>,
                            setState: React.Dispatch<React.SetStateAction<string>>) => {
  colour = colour.toLowerCase();
  if (!history.includes(colour)) {
    {
      if (history.length > 5) {
        setHistory([colour, ...history.slice(0, 5)]);
      } else {
        setHistory([colour, ...history]);
      }
    }
  }
  setState(colour);
};