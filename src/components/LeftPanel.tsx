import React, { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { api } from "~/utils/api";
import { useColourContext } from "~/lib/ColourProvider";
import Circle from "@uiw/react-color-circle";
import { ColourElementWrapper } from "~/components/ColourElementWrapper";
import { calculateRelativeLuminance } from "~/lib/HexFunctionHelper";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { BiSolidErrorCircle } from "react-icons/bi";
import { ColourPaletteSearch } from "~/components/ColourPaletteSearch";

interface colourData {
  theme: string;
}

interface colourResponse {
  primaryColour: string;
  secondaryColour: string;
  accentColour1: string;
  accentColour2: string;
  accentColour3: string;
}

export default function LeftPanel() {

  const [loading, setLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("default");
  const [savedTheme, setSavedTheme] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);



  const { data: userData } = useSession();
  const {
    setPrimaryColour,
    setSecondaryColour,
    setAccentColour1,
    setAccentColour2,
    setAccentColour3,
    primaryColour,
    secondaryColour,
    accentColour1,
    accentColour2,
    accentColour3,
    primaryColourHistory,
    secondaryColourHistory,
    accentColour1History,
    accentColour2History,
    accentColour3History,
    editMode,
    setEditMode,
    openPanel,
    setOpenPanel
  } = useColourContext();
  const { register, handleSubmit } = useForm<colourData>();
  const getTheme = api.gpt.getColours.useMutation();
  const onSubmit: SubmitHandler<colourData> = async (data) => {
    setCurrentTheme(data.theme);
    console.log(data.theme);
    setLoading(true);
    const res = await getTheme.mutateAsync({ theme: data.theme });
    setPrimaryColour((res as colourResponse).primaryColour);
    setSecondaryColour((res as colourResponse).secondaryColour);
    setAccentColour1((res as colourResponse).accentColour1);
    setAccentColour2((res as colourResponse).accentColour2);
    setAccentColour3((res as colourResponse).accentColour3);
    setLoading(false);
  };

  const generatePaletteWithoutTheme = async () => {
    setLoading(true);
    const res = await getTheme.mutateAsync({ theme: "" });
    setPrimaryColour((res as colourResponse).primaryColour);
    setSecondaryColour((res as colourResponse).secondaryColour);
    setAccentColour1((res as colourResponse).accentColour1);
    setAccentColour2((res as colourResponse).accentColour2);
    setAccentColour3((res as colourResponse).accentColour3);
    setLoading(false);
  };

  const relativeLuminance = calculateRelativeLuminance(primaryColour);
  const isDark = relativeLuminance < 0.5;

  const uploadColourPalette = api.colour.addColourPalette.useMutation();
  const handleSave = async () => {
    setSaveLoading(true);
    const res = await uploadColourPalette.mutateAsync({
      themeName: currentTheme,
      primaryColour: primaryColour,
      secondaryColour: secondaryColour,
      accentColour1: accentColour1,
      accentColour2: accentColour2,
      accentColour3: accentColour3
    });
    if (res.status == "success") {
      setSavedSuccess(true);
    } else {
      setSavedSuccess(false);
    }
    setSaveLoading(false);
    setSavedTheme(currentTheme);
  };

  return (
    <div
      className={`fixed top-0 z-[101] text-menu-text w-[300px] bg-menu overscroll-contain ${openPanel ? "" : "-translate-x-[100%]"} duration-500 ease-out`}>
      {/*panel toggle*/}
      <div className={"flex items-center font-bold pl-4 text-2xl absolute -right-[25px] " +
        "top-[47%]"}>
        <div
          className={`${openPanel ? "animate-side-bounce-left" : "animate-side-bounce-right"} cursor-pointer ${isDark ? "text-white" : "text-black"}`}
          onClick={() => setOpenPanel(!openPanel)}>
          {openPanel ? "<" : ">"}
        </div>
      </div>
      <div className={"flex"}>
        <div className={`relative`}>
          {/*panel info*/}
          {/*<button onClick={() => {setEditMode(!editMode)}}>*/}
          {/*  edit mode*/}
          {/*</button>*/}
          <div className={"overflow-scroll h-screen"}>
            <div>
              <div
                className={"text-4xl my-4 flex justify-center font-bold hover:scale-[105%] duration-300 text-white ease-out cursor-pointer"}>
                <div>
                  ColorPick
                  <div className={"w-24 h-1 bg-white"} />
                </div>
              </div>

              <p className={"text-center mb-4 px-4"}>
                Welcome to <span className={"font-bold"}>ColorPick</span>, a tool to help you decide the colour palette
                for your next website.
              </p>

              <p className={"text-center mb-4 px-4"}>
                to get started, get an <span className={"font-bold"}>AI</span> to generate a colour palette for you by
                entering a <span className={"font-bold"}>theme</span> below. Alternatively, you can choose to generate a
                random colour
                palette without a theme.
              </p>

            </div>
            {!loading ?
              <div className={"mb-40"}>
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
                <form className={"block px-4 mb-12"} onSubmit={handleSubmit(onSubmit)}>
                  <div className={"flex mb-4"}>
                    <label className={"mr-2 flex items-center -translate-y-[11px]"}> <FaRobot /> </label>
                    <div className={"w-full"}>
                      <input placeholder="theme" {...register("theme")} required={true}
                             className={"w-full bg-[#30303d] pl-2 rounded-md focus:outline-none"}
                             maxLength={20}/>
                      <p className={"text-xs pl-2"}>eg. Navy, Beige, Forest</p>
                    </div>
                  </div>
                  <div className={"flex justify-center"}>
                    <input className={" text-menu-text bg-transparent cursor-pointer font-bold " +
                      "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}
                           type="submit" value={"Generate"} disabled={loading} />
                    {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                    <div onClick={() => generatePaletteWithoutTheme()}
                         className={" ml-2 text-menu-text bg-transparent cursor-pointer font-bold " +
                           "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}>
                      Random
                    </div>
                  </div>
                </form>
                <h1 className={"font-bold text-center mb-4 text-xl"}>Current Palette</h1>
                <div className={"flex mx-10 mb-4 rounded-2xl overflow-hidden border-[#30303d] border-[2px]"}>
                  <div className={"w-[20%] hover:scale-[120%] duration-300 ease-out h-40"} style={{
                    backgroundColor: primaryColour
                  }} />
                  <div className={"w-[20%] hover:scale-[120%] duration-300 ease-out h-40"} style={{
                    backgroundColor: secondaryColour
                  }} />
                  <div className={"w-[20%] hover:scale-[120%] duration-300 ease-out h-40"} style={{
                    backgroundColor: accentColour1
                  }} />
                  <div className={"w-[20%] hover:scale-[120%] duration-300 ease-out h-40"} style={{
                    backgroundColor: accentColour2
                  }} />
                  <div className={"w-[20%] hover:scale-[120%] duration-300 ease-out h-40"} style={{
                    backgroundColor: accentColour3
                  }} />
                </div>
                <div className={"pl-4"}>
                  <p>Primary Colour</p>
                  <div className={"flex"}>
                    <div className={`w-16 h-16 mr-4 mb-4 mt-2`} style={{ backgroundColor: primaryColour }}>
                      <ColourElementWrapper type={"primary"}>
                        <div className={"h-16"} />
                      </ColourElementWrapper>
                    </div>
                    <Circle
                      colors={primaryColourHistory}
                      color={primaryColour}
                      onChange={(color) => {
                        setPrimaryColour(color.hex);
                      }}
                      className={"pt-4"}
                    />
                  </div>
                  <p>Secondary Colour</p>
                  <div className={"flex"}>
                    <div className={`w-16 h-16 mr-4 mb-4 mt-2`} style={{ backgroundColor: secondaryColour }}>
                      <ColourElementWrapper type={"secondary"}>
                        <div className={"h-16"} />
                      </ColourElementWrapper>
                    </div>
                    <Circle
                      colors={secondaryColourHistory}
                      color={secondaryColour}
                      onChange={(color) => {
                        setSecondaryColour(color.hex);
                      }}
                      className={"pt-4"}
                    />
                  </div>

                  <p>Accent Colour 1</p>
                  <div className={"flex"}>
                    <div className={`w-16 h-16 mr-4 mb-4 mt-2`} style={{ backgroundColor: accentColour1 }}>
                      <ColourElementWrapper type={"accent1"}>
                        <div className={"h-16"} />
                      </ColourElementWrapper>
                    </div>
                    <Circle
                      colors={accentColour1History}
                      color={accentColour1}
                      onChange={(color) => {
                        setAccentColour1(color.hex);
                      }}
                      className={"pt-4"}
                    />
                  </div>

                  <p>Accent Colour 2</p>
                  <div className={"flex"}>
                    <div className={`w-16 h-16 mr-4 mb-4 mt-2`} style={{ backgroundColor: accentColour2 }}>
                      <ColourElementWrapper type={"accent2"}>
                        <div className={"h-16"} />
                      </ColourElementWrapper>
                    </div>
                    <Circle
                      colors={accentColour2History}
                      color={accentColour2}
                      onChange={(color) => {
                        setAccentColour2(color.hex);
                      }}
                      className={"pt-4"}
                    />
                  </div>
                  <p>Accent Colour 3</p>
                  <div className={"flex"}>
                    <div className={`w-16 h-16 mr-4 mb-4 mt-2`} style={{ backgroundColor: accentColour3 }}>
                      <ColourElementWrapper type={"accent3"}>
                        <div className={"h-16"} />
                      </ColourElementWrapper>
                    </div>
                    <Circle
                      colors={accentColour3History}
                      color={accentColour3}
                      onChange={(color) => {
                        setAccentColour3(color.hex);
                      }}
                      className={"pt-4"}
                    />
                  </div>
                </div>

                {/*save*/}
                <section>
                  <div className={"text-center text-2xl mt-4"}>Save?</div>
                  {userData ?
                    <div>
                      <p className={"text-center my-4"}>
                        {!saveLoading ? "Save this palette to your account?" : "Saving..."}
                      </p>
                      <div className={"flex justify-center"}>
                        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                        <button onClick={handleSave}
                                className={"text-menu-text bg-transparent cursor-pointer font-bold " +
                                  "border-menu-text border-2 hover:text-menu hover:bg-menu-text rounded-md px-4"}
                                disabled={saveLoading}>
                          SAVE
                        </button>
                      </div>
                      {savedTheme != "" &&
                        (savedSuccess ? <div>
                          <div className={"flex justify-center text-green-400 pt-4"}>
                            <div className={"flex items-center"}>
                              <AiFillCheckCircle className={"text-center mr-2"} />
                            </div>
                            <p>Successfully saved theme</p>
                          </div>
                          <p className={"text-center text-green-400"}>{currentTheme}</p>
                        </div> : <div className={"flex justify-center text-red-400 pt-4"}>
                              <div className={"flex items-center"}>
                                <BiSolidErrorCircle className={"text-center mr-2"} />
                              </div>
                              <p>Error Saving Theme</p>
                            </div>)}
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
                </section>

                {/*search*/}
                <section className={""}>
                  <div className={"text-center text-2xl mt-8 mb-4"}>Saved Presets</div>
                  <ColourPaletteSearch/>
                </section>
              </div>

              :
              // loading animation
              <div className="animate-pulse flex space-x-4 px-4 py-6">
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="h-2 w-[40%] mt-6 bg-slate-700 rounded"></div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );

}
