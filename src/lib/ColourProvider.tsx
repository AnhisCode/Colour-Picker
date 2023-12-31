import React, { createContext, type ReactNode, useContext, useState } from "react";

// Define the shape of your context
interface ColourContextType {
  setPrimaryColour: (value: string, save?: boolean) => void;
  setSecondaryColour: (value: string, save?: boolean) => void;
  setAccentColour1: (value: string, save?: boolean) => void;
  setAccentColour2: (value: string, save?: boolean) => void;
  setAccentColour3: (value: string, save?: boolean) => void;
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
  openPanel: boolean;
  setOpenPanel: (value: boolean) => void;
  primaryColourLocked: boolean;
  setPrimaryColourLocked: (value: boolean) => void;
  secondaryColourLocked: boolean;
  setSecondaryColourLocked: (value: boolean) => void;
  accentColour1Locked: boolean;
  setAccentColour1Locked: (value: boolean) => void;
  accentColour2Locked: boolean;
  setAccentColour2Locked: (value: boolean) => void;
  accentColour3Locked: boolean;
  setAccentColour3Locked: (value: boolean) => void;
}

// Create the context
const MyContext = createContext<ColourContextType | undefined>(undefined);


// Custom hook to access the context
export const useColourContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};


export const MyColourProvider: React.FC = ({ children }: { children?: ReactNode[] }) => {

  const [primaryColour, setPColour] = useState("#E94C78");
  const [secondaryColour, setSColour] = useState("#FFFFFF");
  const [accentColour1, setAColour1] = useState("#FD749B");
  const [accentColour2, setAColour2] = useState("#D2D2D2");
  const [accentColour3, setAColour3] = useState("#FFD0D0");
  const [primaryColourHistory, setPrimaryColourHistory] = useState(["#E94C78".toLowerCase()]);
  const [secondaryColourHistory, setSecondaryColourHistory] = useState(["#FFFFFF".toLowerCase()]);
  const [accentColour1History, setAccentColour1History] = useState(["#FD749B".toLowerCase()]);
  const [accentColour2History, setAccentColour2History] = useState(["#D2D2D2".toLowerCase()]);
  const [accentColour3History, setAccentColour3History] = useState(["#FFD0D0".toLowerCase()]);
  const [openPanel, setOpenPanel] = useState(false);
  const [primaryColourLocked, setPrimaryColourLocked] = React.useState(false);
  const [secondaryColourLocked, setSecondaryColourLocked] = React.useState(false);
  const [accentColour1Locked, setAccentColour1Locked] = React.useState(false);
  const [accentColour2Locked, setAccentColour2Locked] = React.useState(false);
  const [accentColour3Locked, setAccentColour3Locked] = React.useState(false);

  // handles changing state for colours, as well as keep history of last 6 colours
  const setPrimaryColour = (colour: string, save = true) => {
    if(!primaryColourLocked){
    changeColourHelper(colour, primaryColourHistory, setPrimaryColourHistory, setPColour, save);
    }
  };
  const setSecondaryColour = (colour: string, save = true) => {
    if (!secondaryColourLocked) {
      changeColourHelper(colour, secondaryColourHistory, setSecondaryColourHistory, setSColour, save);
    }
  };
  const setAccentColour1 = (colour: string, save = true) => {
    if (!accentColour1Locked) {
      changeColourHelper(colour, accentColour1History, setAccentColour1History, setAColour1, save);
    }
  };
  const setAccentColour2 = (colour: string, save = true) => {
    if (!accentColour2Locked) {
    changeColourHelper(colour, accentColour2History, setAccentColour2History, setAColour2, save);
    }
  };
  const setAccentColour3 = (colour: string, save = true) => {
    if (!accentColour3Locked) {
      changeColourHelper(colour, accentColour3History, setAccentColour3History, setAColour3, save);
    }
  };

  const [editMode, setEditMode] = useState(false);

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
    setEditMode,
    openPanel,
    setOpenPanel,
    primaryColourLocked,
    setPrimaryColourLocked,
    secondaryColourLocked,
    setSecondaryColourLocked,
    accentColour1Locked,
    setAccentColour1Locked,
    accentColour2Locked,
    setAccentColour2Locked,
    accentColour3Locked,
    setAccentColour3Locked,
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
                            setState: React.Dispatch<React.SetStateAction<string>>,
                            save: boolean) => {
  colour = colour.toLowerCase();
  if (save) {
    if (!history.includes(colour)) {
      {
        if (history.length > 20) {
          setHistory([colour, ...history.slice(0, 20)]);
        } else {
          setHistory([colour, ...history]);
        }
      }
    } else {
      setHistory([colour, ...history.filter((c) => c !== colour)]);
    }
  }
  setState(colour);
};