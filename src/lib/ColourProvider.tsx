import React, { createContext, type ReactNode, useContext, useState } from "react";

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
  editMode: boolean;
  setEditMode: (value: boolean) => void;
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


export const MyColourProvider: React.FC = ({ children }: {children?: ReactNode[]}) => {

  const [primaryColour, setPColour] = useState("#E94C78");
  const [secondaryColour, setSColour] = useState("#FFFFFF");
  const [accentColour1, setAColour1] = useState("#FD749B");
  const [accentColour2, setAColour2] = useState("#000000");
  const [accentColour3, setAColour3] = useState("#000000");
  const [primaryColourHistory, setPrimaryColourHistory] = useState([primaryColour]);
const [secondaryColourHistory, setSecondaryColourHistory] = useState([secondaryColour]);
const [accentColour1History, setAccentColour1History] = useState([accentColour1]);
const [accentColour2History, setAccentColour2History] = useState([accentColour2]);
const [accentColour3History, setAccentColour3History] = useState([accentColour3]);

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

  const [editMode, setEditMode] = useState(true);

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
    accentColour3History,
    editMode,
    setEditMode
  };

  //TODO ADD EDIT MODE

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