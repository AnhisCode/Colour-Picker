import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidErrorCircle } from "react-icons/bi";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { useColourContext } from "~/lib/ColourProvider";
import { SavePaletteModal } from "~/components/LeftMenuComponent/SavePaletteModal";

interface SavePaletteProps {
  currentTheme: string;
}
export const SavePalette = ({currentTheme}: SavePaletteProps) => {
  const [saveLoading, setSaveLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data: userData } = useSession();
  const uploadColourPalette = api.colour.addColourPalette.useMutation();

  const {primaryColour, secondaryColour, accentColour1, accentColour2, accentColour3} = useColourContext();

  return (
    <>
      <SavePaletteModal isOpen={isOpen} setIsOpen={setIsOpen} currentTheme={currentTheme}/>
      {userData ?
        <div>
          <p className={"text-center my-4"}>
            {!saveLoading ? "Save this palette to your account?" : "Saving..."}
          </p>
          <div className={"flex justify-center"}>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <button onClick={() => setIsOpen(true)}
                    className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                      "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}
                    disabled={saveLoading}>
              SAVE
            </button>
          </div>


          {/*{savedTheme != "" &&*/}
          {/*  (savedSuccess ? <div>*/}
          {/*    <div className={"flex justify-center text-green-400 pt-4"}>*/}
          {/*      <div className={"flex items-center"}>*/}
          {/*        <AiFillCheckCircle className={"text-center mr-2"} />*/}
          {/*      </div>*/}
          {/*      <p>Successfully saved theme</p>*/}
          {/*    </div>*/}
          {/*    <p className={"text-center text-green-400"}>{currentTheme}</p>*/}
          {/*  </div> : <div className={"flex justify-center text-red-400 pt-4"}>*/}
          {/*    <div className={"flex items-center"}>*/}
          {/*      <BiSolidErrorCircle className={"text-center mr-2"} />*/}
          {/*    </div>*/}
          {/*    <p>Error Saving Theme</p>*/}
          {/*  </div>)}*/}


        </div> : <div>
          <p className={"text-center my-4"}>
            Please login to save this palette
          </p>
          <div className={"flex justify-center"}>
            <Link href={"/login"}
                  className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                    "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}>
              Log In
            </Link>
          </div>
        </div>
      }
      </>
  );
};
