import React, { type ReactNode, useEffect, useRef, useState } from "react";
import Block from "@uiw/react-color-block";
import { useColourContext } from "~/lib/ColourProvider";

interface WrapperProps {
  children?: ReactNode;
  type: "primary" | "secondary" | "accent1" | "accent2" | "accent3";
}

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handleClickOutside: () => void
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClickOutside();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, handleClickOutside]);
};

//TODO FIX THE OVERLAPPING ISSUE

export const ColourElementWrapper: React.FC<WrapperProps> = ({ children, type }) => {
  const [openColourPanel, setOpenColourPanel] = useState(false);

  const elementRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setOpenColourPanel(false);
  };

  useClickOutside(elementRef, handleClickOutside);

  const {
    primaryColour,
    secondaryColour,
    accentColour1,
    accentColour2,
    accentColour3,
    setPrimaryColour,
    setSecondaryColour,
    setAccentColour1,
    setAccentColour2,
    setAccentColour3,
    editMode,
    setEditMode
  } = useColourContext();

  let colour = "";
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  let setterFunction = (colour: string) => {
  };

  switch (type) {
    case "primary":
      colour = primaryColour;
      setterFunction = setPrimaryColour;
      break;
    case "secondary":
      colour = secondaryColour;
      setterFunction = setSecondaryColour;
      break;
    case "accent1":
      colour = accentColour1;
      setterFunction = setAccentColour1;
      break;
    case "accent2":
      colour = accentColour2;
      setterFunction = setAccentColour2;
      break;
    case "accent3":
      colour = accentColour3;
      setterFunction = setAccentColour3;
      break;
  }

  return (
      <div className={"relative"} ref={elementRef}>
        {/*colour changer*/}
        <div className={`absolute z-10 ${!openColourPanel ? "z-[-2] opacity-0" : "opacity-100"} top-[110%] left-[25%]`}
             style={{
               transitionProperty: "opacity, z-index",
               transitionDuration: "0.2s, 0s",
               transitionDelay: `${openColourPanel ? "0s, 0s" : "0s, 0.2s"}`,
               transitionTimingFunction: "ease-out, ease-in-out"
             }}>
          <Block
            color={colour}
            onChange={(color) => setterFunction(color.hex)}
          />
        </div>
        <div onClick={() => {
          if (editMode) {
            setOpenColourPanel(!openColourPanel);
            setEditMode(false)
          }
        }}
             className={`relative ${editMode ? "cursor-pointer hover:shadow-[0_0_0_2px_rgba(0,0,0,1)]" : ""}`}>
          {/*CONTENT HERE*/}
          {children}
          {/*CONTENT HERE*/}
        </div>

      </div>
  );

};