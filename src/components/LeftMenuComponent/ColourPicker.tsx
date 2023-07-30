import { ColourElementWrapper } from "~/components/ColourElementWrapper";
import Circle from "@uiw/react-color-circle";
import React from "react";
import { useColourContext } from "~/lib/ColourProvider";
import { ColourPickerModal } from "~/components/LeftMenuComponent/ColourPickerModal";
import { toast } from "react-toastify";
import { BiCopy } from "react-icons/bi";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { BsFillLockFill, BsFillUnlockFill } from "react-icons/bs";

export const ColourPicker = () => {

  const [color, setColor] = React.useState<"Primary" | "Secondary" | "Accent1" | "Accent2" | "Accent3">("Primary");
  const [isOpen, setIsOpen] = React.useState(false);
  const [tempColour, setTempColour] = React.useState("#FFFFFF");


  const {
    primaryColour,
    setPrimaryColour,
    secondaryColour,
    setSecondaryColour,
    accentColour1,
    setAccentColour1,
    accentColour2,
    setAccentColour2,
    accentColour3,
    setAccentColour3,
    primaryColourLocked,
    setPrimaryColourLocked,
    secondaryColourLocked,
    setSecondaryColourLocked,
    accentColour1Locked,
    setAccentColour1Locked,
    accentColour2Locked,
    setAccentColour2Locked,
    accentColour3Locked,
    setAccentColour3Locked
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

  const handleRandomise = () => {
    setPrimaryColour(getRandomHexColor());
    setSecondaryColour(getRandomHexColor());
    setAccentColour1(getRandomHexColor());
    setAccentColour2(getRandomHexColor());
    setAccentColour3(getRandomHexColor());
  };

  function getRandomHexColor(): string {
    // Generate a random number between 0 and 16777215 (0xFFFFFF in hexadecimal)
    const randomColorNumber = Math.floor(Math.random() * 16777216);

    // Convert the number to hexadecimal and pad with zeros if necessary to ensure it has 6 digits
    const hexColor = randomColorNumber.toString(16).padStart(6, "0");

    // Return the color in the form "#RRGGBB"
    return `#${hexColor}`;
  }

  return (
    <div className={"pl-4 pt-1 pr-4"}>
      <div className={"flex justify-center mb-4"}>
        <div onClick={handleRandomise}
             className={" ml-2 text-menu-text bg-transparent cursor-pointer font-bold " +
               "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}>
          Randomise
        </div>
      </div>

      <ColourPickerModal setIsOpen={setIsOpen} isOpen={isOpen} colour={color} tempColour={tempColour} />

      <div className={"flex"}>
        <p>Primary Color <span className={"font-bold mr-1"}>({primaryColour}) </span></p>
        <button id="copyButton" onClick={() => {
          handleCopyToClipboard(primaryColour);
        }}><BiCopy /></button>
      </div>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded"}
           style={{ backgroundColor: primaryColour }}>
        {!primaryColourLocked &&
          <div onClick={() => {
            setColor("Primary");
            setIsOpen(true);
            setTempColour(primaryColour);
          }}
               className={"bg-menu bg-opacity-30 px-4 py-1 rounded ml-2 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
            Edit
          </div>}

        <div onClick={() => {
          setPrimaryColourLocked(!primaryColourLocked);
        }}
             className={"bg-menu bg-opacity-30 px-2 py-2 rounded ml-2 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
          {primaryColourLocked ? <BsFillLockFill /> : <BsFillUnlockFill />}
        </div>
      </div>

      <div className={"flex"}>
        <p>Secondary Color <span className={"font-bold mr-1"}>({secondaryColour}) </span></p>
        <button id="copyButton" onClick={() => {
          handleCopyToClipboard(secondaryColour);
        }}><BiCopy /></button>
      </div>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded"}
           style={{ backgroundColor: secondaryColour }}>
        {!secondaryColourLocked &&
        <div>
          <div onClick={() => {
            setColor("Secondary");
            setIsOpen(true);
            setTempColour(secondaryColour);
          }}
               className={"bg-menu bg-opacity-30 px-4 py-1 rounded ml-2 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
            Edit
          </div>
        </div>
        }
        <div onClick={() => {
          setSecondaryColourLocked(!secondaryColourLocked);
        }}
             className={"bg-menu bg-opacity-30 px-2 py-2 rounded ml-2 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
          {secondaryColourLocked ? <BsFillLockFill /> : <BsFillUnlockFill />}
        </div>
      </div>

      <div className={"flex"}>
        <p>Accent Color 1<span className={"font-bold mr-1"}>({accentColour1}) </span></p>
        <button id="copyButton" onClick={() => {
          handleCopyToClipboard(accentColour1);
        }}><BiCopy /></button>
      </div>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded"}
           style={{ backgroundColor: accentColour1 }}>
        {!accentColour1Locked &&
          <div onClick={() => {
            setColor("Accent1");
            setIsOpen(true);
            setTempColour(accentColour1);
          }}
               className={"bg-menu bg-opacity-30 px-4 py-1 rounded ml-2 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
            Edit
        </div>
        }
        <div onClick={() => {
          setAccentColour1Locked(!accentColour1Locked);
        }}
             className={"bg-menu bg-opacity-30 px-2 py-2 rounded ml-2 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
          {accentColour1Locked ? <BsFillLockFill /> : <BsFillUnlockFill />}
        </div>
      </div>

      <div className={"flex"}>
        <p>Accent Color 2<span className={"font-bold mr-1"}>({accentColour2}) </span></p>
        <button id="copyButton" onClick={() => {
          handleCopyToClipboard(accentColour2);
        }}><BiCopy /></button>
      </div>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded"}
           style={{ backgroundColor: accentColour2 }}>
          {!accentColour2Locked &&
          <div onClick={() => {
            setColor("Accent2");
            setIsOpen(true);
            setTempColour(accentColour2);
          }}
               className={"bg-menu bg-opacity-30 px-4 py-1 rounded ml-2 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
            Edit
          </div>
          }
        <div onClick={() => {
          setAccentColour2Locked(!accentColour2Locked);
        }}
             className={"bg-menu bg-opacity-30 px-2 py-2 rounded ml-2 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
          {accentColour2Locked ? <BsFillLockFill /> : <BsFillUnlockFill />}
        </div>
      </div>

      <div className={"flex"}>
        <p>Accent Color 3<span className={"font-bold mr-1"}>({accentColour3}) </span></p>
        <button id="copyButton" onClick={() => {
          handleCopyToClipboard(accentColour3);
        }}><BiCopy /></button>
      </div>
      <div className={"flex justify-center items-center w-full h-16 my-2 rounded"}
           style={{ backgroundColor: accentColour3 }}>
          {!accentColour3Locked &&
          <div onClick={() => {
            setColor("Accent3");
            setIsOpen(true);
            setTempColour(accentColour3);
          }}
               className={"bg-menu bg-opacity-30 px-4 py-1 rounded ml-2 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
            Edit
          </div>
          }
        <div onClick={() => {
          setAccentColour3Locked(!accentColour3Locked);
        }}
             className={"bg-menu bg-opacity-30 px-2 py-2 rounded ml-2 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
          {accentColour3Locked ? <BsFillLockFill /> : <BsFillUnlockFill />}
        </div>
      </div>
    </div>
  );
};