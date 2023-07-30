import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Link from "next/link";
import { useColourContext } from "~/lib/ColourProvider";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}



export const IntroModal = ({ isOpen, setIsOpen }: Props) => {

  const {setOpenPanel} = useColourContext();
  function closeModal() {
    setIsOpen(false);
    setOpenPanel(true)
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
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl bg-menu p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-2xl font-medium leading-6 text-menu-text mb-4"
                  >
                    <div
                      className={"text-4xl mb-4 flex justify-center font-bold hover:scale-[105%] duration-300 text-white ease-out cursor-pointer"}>
                      <div>
                        ColorPick
                        <div className={"w-24 h-1 bg-white"} />
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2 text-sm text-menu-text">
                    <p className="text-xl">
                      <span className={"font-bold"}>Welcome</span> to ColorPick!
                    </p>
                    <p className={"mb-4 italic translate-x-2"}>
                      Where colors come alive! 🌈
                    </p>
                    <p className={"mb-4"}>
                      This is a small experimentational web app I created in order to help me get inspired with using
                      different colors in my projects.
                      You can use AI to generate a color palette, or you can create your own palette by picking colors
                      from the color editor menu.
                     </p>
                    <p className={"mb-4"}>
                      This website was heavily inspired by <a href={"https://realtimecolors.com"} className={"underline font-bold"}>realtimecolors.com</a> by @Juxtopposed, and I highly reccomend
                      you check out her work on youtube as well!
                    </p>
                    <p >
                      Happy Creating! 🎨
                    </p>
                    <p className={"mb-5"}>
                      - Anh Dao
                    </p>
                  </div>

                  <div className="mt-4">
                    <button type={"button"} onClick={closeModal}
                            className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                              "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}>
                      Get Started
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
};