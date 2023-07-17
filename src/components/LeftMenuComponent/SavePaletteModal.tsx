import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { useColourContext } from "~/lib/ColourProvider";
import { FiSave } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { api } from "~/utils/api";
import 'react-toastify/dist/ReactToastify.css';
interface ColorPalette {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  currentTheme: string;
}

interface paletteData{
  theme: string;
}

export function SavePaletteModal({isOpen, setIsOpen, currentTheme} : ColorPalette) {

  const {primaryColour, secondaryColour, accentColour1, accentColour2, accentColour3} = useColourContext();
  const { register, handleSubmit } = useForm<paletteData>();
  const [savedTheme, setSavedTheme] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const uploadColourPalette = api.colour.addColourPalette.useMutation();

  function closeModal() {
    setIsOpen(false)
  }

  const handleSave: SubmitHandler<paletteData> = async (data) => {
    setSaveLoading(true);
    const res = await uploadColourPalette.mutateAsync({
      themeName: data.theme,
      primaryColour: primaryColour,
      secondaryColour: secondaryColour,
      accentColour1: accentColour1,
      accentColour2: accentColour2,
      accentColour3: accentColour3
    });
    if (res.status == "success") {
      setSavedSuccess(true);
      closeModal();

      const toastBody = () => (
        <div>
          <h1 className={"font-bold text-menu-text"}>{`Successfully saved palette:`}</h1>
          <div className={"flex mx-10 mb-2 mt-4 rounded-2xl overflow-hidden border-[#30303d] border-[2px]"}>
            <div className={"w-[20%] duration-300 ease-out h-20"} style={{
              backgroundColor: primaryColour
            }} />
            <div className={"w-[20%] duration-300 ease-out h-20"} style={{
              backgroundColor: secondaryColour
            }} />
            <div className={"w-[20%] duration-300 ease-out h-20"} style={{
              backgroundColor: accentColour1
            }} />
            <div className={"w-[20%] duration-300 ease-out h-20"} style={{
              backgroundColor: accentColour2
            }} />
            <div className={"w-[20%] duration-300 ease-out h-20"} style={{
              backgroundColor: accentColour3
            }} />
          </div>
          <div className={"flex justify-center"}>
            <h1 className={"font-bold text-menu-text"}>{`${data.theme}`}</h1>
          </div>
        </div>
      )

      toast.success(toastBody, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setSavedSuccess(false);
      toast.error("Unable to save, please try again later", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setSaveLoading(false);
    setSavedTheme(currentTheme);
  };

  return (
    <>
      <ToastContainer toastClassName={""} bodyClassName={"font-bold text-menu-text"}/>
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
                    as="div"
                    className="flex text-2xl font-medium leading-6 text-menu-text mb-4"
                  >
                    Save Color Palette
                    <FiSave className={"ml-2"}/>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-menu-text">
                      You are about to save your color palette. What would you like to name it?
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

                  {/* eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
                  <form className={"block px-4 mb-12 text-menu-text"} onSubmit={handleSubmit(handleSave)}>
                    <div className={"flex mb-4"}>
                      <div className={"w-full"}>
                        <input placeholder="theme" {...register("theme")} required={true}
                               className={"w-full bg-[#30303d] pl-2 rounded-md focus:outline-none"}
                               maxLength={20}
                        defaultValue={currentTheme}/>
                      </div>
                    </div>
                    <div className={"flex justify-center"}>
                      <input className={" text-menu-text bg-transparent cursor-pointer font-bold " +
                        "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4 mr-4"}
                             type="submit" value={"Save"} disabled={saveLoading} />
                      <button onClick={closeModal} type={"button"}
                              className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                                "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4 "}>
                        Cancel
                      </button>
                    </div>
                  </form>

                  {/*<div className="mt-4">*/}
                  {/*  <button onClick={closeModal} type={"button"}*/}
                  {/*          className={"text-menu-text bg-transparent cursor-pointer font-bold " +*/}
                  {/*            "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4 mr-4"}>*/}
                  {/*    Cancel*/}
                  {/*  </button>*/}
                  {/*</div>*/}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}