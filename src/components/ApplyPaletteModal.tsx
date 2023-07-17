import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { useColourContext } from "~/lib/ColourProvider";

interface ColorPalette {
  primaryColour: string;
  secondaryColour: string;
  accentColour1: string;
  accentColour2: string;
  accentColour3: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export function ApplyPaletteModal({primaryColour, accentColour3, secondaryColour, accentColour2, accentColour1, isOpen, setIsOpen} : ColorPalette) {

  const {setPrimaryColour, setSecondaryColour, setAccentColour1, setAccentColour2, setAccentColour3} = useColourContext();

  function closeModal() {
    setIsOpen(false)
  }

  function applyChanges() {
    setIsOpen(false)
setPrimaryColour(primaryColour);
setSecondaryColour(secondaryColour);
setAccentColour1(accentColour1);
setAccentColour2(accentColour2);
setAccentColour3(accentColour3);
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[200]" onClose={closeModal}>
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
                    className="text-2xl font-medium leading-6 text-menu-text mb-4"
                  >
                    Applying Color Palette
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-menu-text">
                      You are about to apply a color palette to your website. Any unsaved palettes will be <span className={"font-bold"}>lost</span>. Are you sure you want to continue?
                    </p>
                  </div>

                  <div className={"flex mx-10 mb-6 mt-4 rounded-2xl overflow-hidden border-[#30303d] border-[2px]"}>
                    <div className={"w-[20%] duration-300 ease-out h-40"} style={{
                      backgroundColor: primaryColour
                    }} />
                    <div className={"w-[20%] duration-300 ease-out h-40"} style={{
                      backgroundColor: secondaryColour
                    }} />
                    <div className={"w-[20%] duration-300 ease-out h-40"} style={{
                      backgroundColor: accentColour1
                    }} />
                    <div className={"w-[20%] duration-300 ease-out h-40"} style={{
                      backgroundColor: accentColour2
                    }} />
                    <div className={"w-[20%] duration-300 ease-out h-40"} style={{
                      backgroundColor: accentColour3
                    }} />
                  </div>

                  <div className="mt-4">
                    <button onClick={closeModal} type={"button"}
                            className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                              "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4 mr-4"}>
                      Take me back!
                    </button>
                    <button onClick={applyChanges} type={"button"}
                            className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                              "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}>
                      Continue
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}