import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidErrorCircle } from "react-icons/bi";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { useColourContext } from "~/lib/ColourProvider";
import { SavePaletteModal } from "~/components/LeftMenuComponent/SaveSequence/SavePaletteModal";

interface SavePaletteProps {
  currentTheme: string;
}
export const SavePalette = ({currentTheme}: SavePaletteProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: userData } = useSession();

  return (
    <>
      <SavePaletteModal isOpen={isOpen} setIsOpen={setIsOpen} currentTheme={currentTheme}/>
      {userData ?
        <div>
          <p className={"text-center my-4"}>
            Save this palette to your account?
          </p>
          <div className={"flex justify-center"}>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <button onClick={() => setIsOpen(true)}
                    className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                      "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}>
              SAVE
            </button>
          </div>
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
