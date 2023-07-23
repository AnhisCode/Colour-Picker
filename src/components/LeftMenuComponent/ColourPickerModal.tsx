import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Colorful from "@uiw/react-color-colorful";
import { useColourContext } from "~/lib/ColourProvider";
import ShadeSlider from "@uiw/react-color-shade-slider";
import { hexToHsva, hsvaToHex } from "@uiw/color-convert";
import Slider from "@uiw/react-color-slider";
import EditableInputRGBA from "@uiw/react-color-editable-input-rgba";
import Swatch from "@uiw/react-color-swatch";


interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  colour: "Primary" | "Secondary" | "Accent1" | "Accent2" | "Accent3";
  tempColour: string;
}

export const ColourPickerModal= ({setIsOpen, isOpen, colour, tempColour} : Props) => {

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

  let colorToChange = primaryColour;
  let changeColorFunction = setPrimaryColour
  let colorHistory = primaryColourHistory;

  switch (colour) {
    case "Primary":
      colorToChange = primaryColour;
      changeColorFunction = setPrimaryColour;
      colorHistory = primaryColourHistory;
      break;
    case "Secondary":
      colorToChange = secondaryColour;
      changeColorFunction = setSecondaryColour;
      colorHistory = secondaryColourHistory;
      break;
    case "Accent1":
      colorToChange = accentColour1;
      changeColorFunction = setAccentColour1;
      colorHistory = accentColour1History;
      break;
    case "Accent2":
      colorToChange = accentColour2;
      changeColorFunction = setAccentColour2;
      colorHistory = accentColour2History;
      break;
    case "Accent3":
      colorToChange = accentColour3;
      changeColorFunction = setAccentColour3;
      colorHistory = accentColour3History;
      break;
  }

  const closeModal = () => {
    setIsOpen(false)
    changeColorFunction(tempColour, false);
  }

  const closeAndSaveModal = () => {
    setIsOpen(false)
    changeColorFunction(colorToChange, true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[200] text-menu-text" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-menu p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-menu-text"
                  >
                    {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
                    {colour[0] == "A" ? `Accent Color ${colour[colour.length - 1]}` : `${colour} Color`}
                  </Dialog.Title>
                  <div className="mt-2 mb-2 p-2">


                    <p className={"my-2 text-xl"}>Color Picker</p>
                    <div className={"flex mb-6"}>
                      <Colorful
                        color={colorToChange}
                        onChange={(color) => {
                          changeColorFunction(color.hexa, false);
                        }}
                        className={"scale-[120%] m-4"}
                        disableAlpha={true}
                      />
                    </div>

                    <p className={"mb-2 text-xl"}>Shade Slider</p>
                    <div className={"mb-6"}>
                    <ShadeSlider
                      className={"mb-1"}
                      hsva={hexToHsva(colorToChange)}
                      onChange={(newShade) => {
                        const hsvaColor = hexToHsva(colorToChange);
                        changeColorFunction(hsvaToHex({h: hsvaColor.h, s: hsvaColor.s, v: newShade.v, a: hsvaColor.a}), false);
                      }}
                    />
                    <Slider
                      className={"translate-x-[-1px]"}
                      color={hexToHsva(colorToChange)}
                      onChange={(color) => {
                        const hsvaColor = hexToHsva(colorToChange);
                        changeColorFunction(hsvaToHex({h: hsvaColor.h, s: hsvaColor.s, v: color.hsva.v, a: hsvaColor.a}), false);
                      }}
                    />
                    </div>

                    <p className={"mb-3 text-xl"}>RGB Editor</p>
                    <div className={"mb-6"}>
                      <div style={{ padding: '0 10px 0 20px' , scale: '110%'}}>
                        <EditableInputRGBA
                          hsva={hexToHsva(colorToChange)}
                          aProps={false}
                          onChange={(color) => {
                            console.log(color.hex);
                            changeColorFunction(color.hex, false);
                          }}
                        />
                      </div>
                    </div>

                    <p className={"mb-3 text-xl"}>Color History</p>
                    <div className={"mb-6"}>
                    <Swatch
                      colors={colorHistory}
                      color={colorToChange}
                      onChange={(color) => {
                        changeColorFunction(hsvaToHex(color), false);
                      }}
                    />
                  </div>

                  </div>
                  <button onClick={() => {
                    closeModal();
                  }} type={"button"}
                          className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                            "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4 mr-4"}>
                    Cancel
                  </button>
                  <button onClick={() => {
                    closeAndSaveModal()
                  }} type={"button"}
                          className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                            "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}>
                    Apply
                  </button>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}