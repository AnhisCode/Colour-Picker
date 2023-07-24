import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useColourContext } from "~/lib/ColourProvider";
import Image from "next/image";

interface ImageSelectorModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

export function ImageSelectorModal({
                                    isOpen,
                                    setIsOpen,
                                    setImage
                                  }: ImageSelectorModalProps) {

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const pictures: string[] = [
    "/images/img1.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/timg7.png",
    "/images/timg6.png",
    "/images/timg9.png",
    "/images/img10.png",
    "/images/img11.png",
  ]

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
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl bg-menu p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-menu-text mb-4"
                  >
                    Changing Image
                  </Dialog.Title>
                  <div className="grid grid-cols-3 gap-2">

                    {/*empty*/}
                    <div className={"aspect-video rounded-2xl cursor-pointer overflow-hidden bg-white"}
                         onClick={() => {
                           setImage("")
                           closeModal()
                         }}>
                    </div>
                    {/*pics*/}
                    {pictures.map((pic, key) => {
                      return (
                        <div className={"aspect-video rounded-2xl cursor-pointer overflow-hidden"} key={key}
                        onClick={() => {
                          setImage(pic)
                          closeModal()
                        }}>
                          <Image
                            src={pic}
                            alt="google"
                            width="2000"
                            height="2000"
                          />
                        </div>
                      )
                    })}


                  </div>

                  <div className="mt-4">
                    <button onClick={closeModal} type={"button"}
                            className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                              "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}>
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}