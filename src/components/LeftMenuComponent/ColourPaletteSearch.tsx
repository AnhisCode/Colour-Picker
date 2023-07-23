import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FaRobot, FaSearch } from "react-icons/fa";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { HiRefresh } from "react-icons/hi";
import { ApplyPaletteModal } from "~/components/LeftMenuComponent/ApplyPaletteModal";
import { useColourContext } from "~/lib/ColourProvider";
import { BsFillTrashFill } from "react-icons/bs";

export interface colorPalette {
  primaryColour: string;
  secondaryColour: string;
  accentColour1: string;
  accentColour2: string;
  accentColour3: string;
}

export const ColourPaletteSearch = () => {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const { data: userData } = useSession();
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const deleteTheme = api.colour.deleteTheme.useMutation();

  const { data: paletteData, refetch } = api.colour.getColourPalette.useQuery();
  const [currentPalette, setCurrentPalette] = useState<colorPalette>({
    primaryColour: "",
    secondaryColour: "",
    accentColour1: "",
    accentColour2: "",
    accentColour3: ""
  });
  const [currentTheme, setCurrentTheme] = useState<string>("default");

  const [inputValue, setInputValue] = useState<string>("");

  const debounced = useDebouncedCallback(
    // function
    (value: string) => {
      if (value != "") {
        setInputValue(value);
        console.log(value);
      }
    },
    // delay in ms
    500
  );

  useEffect(() => {
    debounced(inputValue);
  }, [inputValue]);

  function formatDateToMonthDateYear(date: Date) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month || ""} ${day} ${year}`;
  }

  const palettes = paletteData && paletteData.palettes && paletteData.palettes || [];

  const def = {
    themeName: "default",
    primaryColour: "#E94C78",
    secondaryColour: "#FFFFFF",
    accentColour1: "#FD749B",
    accentColour2: "#D2D2D2",
    accentColour3: "#FFD0D0",
    uploadDate: null
  };

  const navy = {
    themeName: "Navy",
    primaryColour: "#042e58",
    secondaryColour: "#e8e8e8",
    accentColour1: "#124676",
    accentColour2: "#3e597e",
    accentColour3: "#314a70",
    uploadDate: null

  };

  const forest = {
    themeName: "Forest",
    primaryColour: "#2E543C",
    secondaryColour: "#BEBD8E",
    accentColour1: "#7D9D74",
    accentColour2: "#A7A57E",
    accentColour3: "#C5C4A0",
    uploadDate: null

  };

  const paletteWithBasic = [...palettes, def, navy, forest];

  const handleDeleteTheme = async (themeName: string) => {
    await deleteTheme.mutateAsync({ themeName: themeName });
    await refetch();
  }

  //filter colour palettes
  const filteredPalettes = paletteWithBasic.filter((palette) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    return palette.themeName.toLowerCase().includes(inputValue.toLowerCase());
  }) || [];

  return (
    <div className={"px-4"}>
      <ApplyPaletteModal
        primaryColour={currentPalette.primaryColour}
        accentColour1={currentPalette.accentColour1}
        secondaryColour={currentPalette.secondaryColour}
        accentColour2={currentPalette.accentColour2}
        accentColour3={currentPalette.accentColour3}
        setIsOpen={setOpenModal}
        isOpen={openModal}
      />
      <div className={"flex mb-4"}>
        <label className={"mr-2 flex items-center"}> <FaSearch /> </label>
        <div className={"w-full"}>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                 className={"w-full bg-[#30303d] pl-2 rounded-md focus:outline-none"} />
        </div>
      </div>
      <div className={"flex justify-center"}>
        <div className={"bg-[#30303d] w-full h-80 rounded-2xl overflow-y-scroll"}>


          {/*element*/}
          {filteredPalettes.map((palette, key) => {
            return (
              <div className={"relative"} key={key}>
                <div onClick={() => {
                  setCurrentPalette({
                    primaryColour: palette.primaryColour as string,
                    secondaryColour: palette.secondaryColour as string,
                    accentColour1: palette.accentColour1 as string,
                    accentColour2: palette.accentColour2 as string,
                    accentColour3: palette.accentColour3 as string
                  });
                  setCurrentTheme(palette.themeName as string);
                  setOpenModal(true);
                }}
                     className={`h-14 relative border-menu z-30 ${(key == filteredPalettes.length - 1 && filteredPalettes.length > 5) ? "" :
                       "border-b-2 "} bg-[#30303d] flex justify-between cursor-pointer group overscroll-contain w-full ${deleteMode && palette.uploadDate ? '-translate-x-10 border-r-2': ""} duration-300 ease-out `}>
                  <div>
                    <h2 className={"font-bold pt-2 pl-2"}>{palette.themeName} </h2>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
                    <h3 className={"pl-3 text-sm -translate-y-1"}>{palette.uploadDate ? formatDateToMonthDateYear(palette.uploadDate) : "Basic theme"}</h3>
                  </div>
                  {/*colour display*/}
                  <div className={"flex"}>
                    <div className={"h-full w-5 group-hover:w-8 duration-300 ease-out"}
                         style={{ backgroundColor: palette.primaryColour as string }} />
                    <div className={"h-full w-5 group-hover:w-8 duration-300 ease-out"}
                         style={{ backgroundColor: palette.secondaryColour as string }} />
                    <div className={"h-full w-5 group-hover:w-8 duration-300 ease-out"}
                         style={{ backgroundColor: palette.accentColour1 as string }} />
                    <div className={"h-full w-5 group-hover:w-8 duration-300 ease-out"}
                         style={{ backgroundColor: palette.accentColour2 as string }} />
                    <div className={"h-full w-5 group-hover:w-8 duration-300 ease-out"}
                         style={{ backgroundColor: palette.accentColour3 as string }} />
                  </div>
                </div>
                <div className={`w-64 ${(key == filteredPalettes.length - 1 && filteredPalettes.length > 5) ? "" :
                  "border-b-2 border-menu"} h-full border-y-1 absolute bg-red-500 translate-x-10 top-0
                  flex items-center justify-end cursor-pointer`}
                onClick={async () => {
                  console.log("delete", palette.themeName);
                  setDeleteMode(false)
                  await handleDeleteTheme(palette.themeName as string);
                }}>
                  <p className={"-translate-x-[43px] font-bold text-xl"}>
                  X
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {userData && <div className={"flex justify-evenly mt-4"}>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <button onClick={async () => {
          await refetch();
        }}
                className={"text-[#fafafb] bg-transparent cursor-pointer font-bold " +
                  "flex border-[#fafafb] border-2 hover:text-[#17171e] hover:bg-[#fafafb] rounded-md px-4"}>
          Refresh
          <div className={"flex justify-center items-center ml-1 translate-y-1"}>
            <HiRefresh />
          </div>
        </button>
        <button onClick={() => {
          setDeleteMode(!deleteMode);
        }}
                             className={"text-[#fafafb] bg-transparent cursor-pointer font-bold " +
                               "flex border-[#fafafb] border-2 hover:text-[#17171e] hover:bg-[#fafafb] rounded-md px-4"}>
          Delete
          <div className={"flex justify-center items-center ml-1 translate-y-1"}>
            <BsFillTrashFill />
          </div>
        </button>

      </div>}
    </div>
  );
};
