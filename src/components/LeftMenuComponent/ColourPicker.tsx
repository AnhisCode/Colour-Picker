import { ColourElementWrapper } from "~/components/ColourElementWrapper";
import Circle from "@uiw/react-color-circle";
import React from "react";
import { useColourContext } from "~/lib/ColourProvider";
import { ColourPickerModal } from "~/components/LeftMenuComponent/ColourPickerModal";
import { toast } from "react-toastify";
import { BiCopy } from "react-icons/bi";

export const ColourPicker = () => {

  const [color, setColor] = React.useState<"Primary" | "Secondary" | "Accent1" | "Accent2" | "Accent3">("Primary");
  const [isOpen, setIsOpen] = React.useState(false);
  const [tempColour, setTempColour] = React.useState("#FFFFFF");

  const {
    primaryColour,
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
    accentColour3History
  } = useColourContext();

  const handleCopyToClipboard = (colour: string) => {
    navigator.clipboard.writeText(colour).then(() => {
      // Success! Text is copied to the clipboard
      toast.success("Copied to clip board: " + colour, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    })
      .catch(() => {
        // Handle errors, if any
        toast.error("Failed to copy to clip board:", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      });
  };

  return (
    <div className={"pl-4 pt-4 pr-4"}>

      <ColourPickerModal setIsOpen={setIsOpen} isOpen={isOpen} colour={color} tempColour={tempColour} />
      <div className={"flex"}>
        <p>Primary Color <span className={"font-bold mr-1"}>({primaryColour}) </span></p>
        <button id="copyButton" onClick={() => {
          handleCopyToClipboard(primaryColour);
        }}><BiCopy /></button>
      </div>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded cursor-pointer group"}
           style={{ backgroundColor: primaryColour }}>
        <div className={"flex justify-center items-center px-8 py-1 bg-opacity-30 bg-menu rounded group-hover:w-full " +
          "group-hover:h-full duration-300 ease-out"}
             onClick={() => {
               setColor("Primary");
               setIsOpen(true);
               setTempColour(primaryColour);
             }}>
          Edit
        </div>
      </div>

      <div className={"flex mt-4"}>
        <p className={"mr-1"}>Secondary Color <span className={"font-bold"}>({secondaryColour})</span></p>
        <button id="copyButton" onClick={() => {
          handleCopyToClipboard(secondaryColour);
        }}><BiCopy /></button>
      </div>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded cursor-pointer group"}
           style={{ backgroundColor: secondaryColour }}>
        <div className={"flex justify-center items-center px-8 py-1 bg-opacity-30 bg-menu rounded group-hover:w-full " +
          "group-hover:h-full duration-300 ease-out"}
             onClick={() => {
               setColor("Secondary");
               setIsOpen(true);
               setTempColour(secondaryColour);
             }}>
          Edit
        </div>
      </div>

      <div className={"flex mt-4"}>
        <p className={"mr-1"}>Accent Color 1 <span className={"font-bold"}>({accentColour1})</span></p>
        <button id="copyButton" onClick={() => {
          handleCopyToClipboard(accentColour1);
        }}><BiCopy /></button>
      </div>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded cursor-pointer group"}
           style={{ backgroundColor: accentColour1 }}>
        <div className={"flex justify-center items-center px-8 py-1 bg-opacity-30 bg-menu rounded group-hover:w-full " +
          "group-hover:h-full duration-300 ease-out"}
             onClick={() => {
               setColor("Accent1");
               setIsOpen(true);
               setTempColour(accentColour1);
             }}>
          Edit
        </div>
      </div>

      <div className={"flex mt-4"}>
        <p className={"mr-1"}>Accent Color 2 <span className={"font-bold"}>({accentColour2})</span></p>
        <button id="copyButton" onClick={() => {
          handleCopyToClipboard(accentColour2);
        }}><BiCopy /></button>
      </div>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded cursor-pointer group"}
           style={{ backgroundColor: accentColour2 }}>
        <div className={"flex justify-center items-center px-8 py-1 bg-opacity-30 bg-menu rounded group-hover:w-full " +
          "group-hover:h-full duration-300 ease-out"}
             onClick={() => {
               setColor("Accent2");
               setIsOpen(true);
               setTempColour(accentColour2);
             }}>
          Edit
        </div>
      </div>

      <div className={"flex mt-4"}>
        <p className={"mr-1"}>Accent Color 3 <span className={"font-bold"}>({accentColour3})</span></p>
        <button id="copyButton" onClick={() => {
          handleCopyToClipboard(accentColour3);
        }}><BiCopy /></button>
      </div>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded cursor-pointer group"}
           style={{ backgroundColor: accentColour3 }}>
        <div className={"flex justify-center items-center px-8 py-1 bg-opacity-30 bg-menu rounded group-hover:w-full " +
          "group-hover:h-full duration-300 ease-out"}
             onClick={() => {
               setColor("Accent3");
               setIsOpen(true);
               setTempColour(accentColour3);
             }}>
          Edit
        </div>
      </div>
    </div>
  );
};