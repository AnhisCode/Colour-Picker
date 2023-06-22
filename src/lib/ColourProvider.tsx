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

  const [primaryColour, setPrimaryColour] = useState("#ffffff");
  const [secondaryColour, setSecondaryColour] = useState("#000000");
  const [accentColour1, setAccentColour1] = useState("#000000");
  const [accentColour2, setAccentColour2] = useState("#000000");
  const [accentColour3, setAccentColour3] = useState("#000000");

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
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};