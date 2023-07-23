import { ColourElementWrapper } from "~/components/ColourElementWrapper";
import Circle from "@uiw/react-color-circle";
import React from "react";
import { useColourContext } from "~/lib/ColourProvider";
import { ColourPickerModal } from "~/components/LeftMenuComponent/ColourPickerModal";

export const ColourPicker = () => {

  const [color, setColor] = React.useState<"Primary" | "Secondary" | "Accent1" | "Accent2" | "Accent3">("Primary");
const [isOpen, setIsOpen] = React.useState(false);
const [tempColour, setTempColour] = React.useState("#FFFFFF");

  const {primaryColour,
    setPrimaryColour,
    primaryColourHistory,
    secondaryColour,
    setSecondaryColour,
    secondaryColourHistory,
    accentColour1,
    setAccentColour1,
    accentColour1History,
    accentColour2,
    setAccentColour2,
    accentColour2History,
    accentColour3,
    setAccentColour3,
    accentColour3History} = useColourContext();

  return (
    <div className={"pl-4 pt-4 pr-4"}>

      <ColourPickerModal setIsOpen={setIsOpen} isOpen={isOpen} colour={color} tempColour={tempColour}/>

      <p >Primary Color ({primaryColour})</p>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded cursor-pointer group"}
           style={{backgroundColor: primaryColour}}>
        <div className={"flex justify-center items-center px-8 py-1 bg-opacity-30 bg-menu rounded group-hover:w-full " +
          "group-hover:h-full duration-300 ease-out"}
        onClick={() => {
          setColor("Primary");
          setIsOpen(true);
          setTempColour(primaryColour)
        }}>
          Edit
        </div>
      </div>

      <p className={"mt-4"}>Secondary Color ({secondaryColour})</p>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded cursor-pointer group"}
           style={{backgroundColor: secondaryColour}}>
        <div className={"flex justify-center items-center px-8 py-1 bg-opacity-30 bg-menu rounded group-hover:w-full " +
          "group-hover:h-full duration-300 ease-out"}
             onClick={() => {
               setColor("Secondary");
               setIsOpen(true);
               setTempColour(secondaryColour)
             }}>
          Edit
        </div>
      </div>

      <p className={"mt-4"}>Accent Color 1 ({accentColour1})</p>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded cursor-pointer group"}
            style={{backgroundColor: accentColour1}}>
        <div className={"flex justify-center items-center px-8 py-1 bg-opacity-30 bg-menu rounded group-hover:w-full " +
          "group-hover:h-full duration-300 ease-out"}
             onClick={() => {
               setColor("Accent1");
               setIsOpen(true);
               setTempColour(accentColour1)
             }}>
          Edit
        </div>
      </div>

      <p className={"mt-4"}>Accent Color 2 ({accentColour2})</p>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded cursor-pointer group"}
            style={{backgroundColor: accentColour2}}>
        <div className={"flex justify-center items-center px-8 py-1 bg-opacity-30 bg-menu rounded group-hover:w-full " +
          "group-hover:h-full duration-300 ease-out"}
             onClick={() => {
               setColor("Accent2");
               setIsOpen(true);
               setTempColour(accentColour2)
             }}>
          Edit
        </div>
      </div>

      <p className={"mt-4"}>Accent Color 3 ({accentColour3})</p>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded cursor-pointer group"}
            style={{backgroundColor: accentColour3}}>
        <div className={"flex justify-center items-center px-8 py-1 bg-opacity-30 bg-menu rounded group-hover:w-full " +
          "group-hover:h-full duration-300 ease-out"}
             onClick={() => {
               setColor("Accent3");
               setIsOpen(true);
               setTempColour(accentColour3)
             }}>
          Edit
        </div>
      </div>
    </div>
  )
}