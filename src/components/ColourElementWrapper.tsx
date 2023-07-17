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

interface CustomElementState {
  position: { x: number; y: number };
}

export const ColourElementWrapper: React.FC<WrapperProps> = ({ children, type }) => {
  const [openColourPanel, setOpenColourPanel] = useState(false);
  const [state, setState] = useState<CustomElementState>({
    position: { x: 0, y: 0 },
  });

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
        <div className={`fixed ${!openColourPanel ? "z-[-10] opacity-0" : "z-[100] opacity-100"}`}
             style={{
               top: `${state.position.y + 10}px`,
                left: `${state.position.x - 85}px `,
               transitionProperty: "opacity, z-index",
               transitionDuration: "0.2s, 0s",
               transitionDelay: `${openColourPanel ? "0s, 0s" : "0s, 0.2s"}`,
               transitionTimingFunction: "ease-out, ease-in-out"
             }}>
          <div className={`${openColourPanel ? "hidden" :"absolute"} z-[101] w-full h-full bg-rose-50`}/>
          <Block
            color={colour}
            onChange={(color) => setterFunction(color.hex)}
            className={"z-[100] fixed"}
          />
        </div>
        <div onClick={(event) => {
          if (editMode) {
            event.stopPropagation();
            setOpenColourPanel(!openColourPanel);
            setEditMode(false)
            setState({
              position: { x: event.clientX, y: event.clientY },
            });
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