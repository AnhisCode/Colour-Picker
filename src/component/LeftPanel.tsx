import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { api } from "~/utils/api";
import { useColourContext } from "~/lib/ColourProvider";
import Circle from "@uiw/react-color-circle";
import { ColourElementWrapper } from "~/component/ColourElementWrapper";
import { calculateRelativeLuminance } from "~/lib/HexFunctionHelper";

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

  const [openPanel, setOpenPanel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("default");
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
    setEditMode
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

  const relativeLuminance = calculateRelativeLuminance(primaryColour);
  const isDark = relativeLuminance < 0.5;

  const uploadColourPalette = api.colour.addColourPalette.useMutation();
  const handleSave = async () => {
    const res = await uploadColourPalette.mutateAsync({
      themeName: currentTheme,
      primaryColour: primaryColour,
      secondaryColour: secondaryColour,
      accentColour1: accentColour1,
      accentColour2: accentColour2,
      accentColour3: accentColour3
    });
    console.log(res)
  }

  return (
    <div
      className={`fixed top-0 z-[101] w-[250px] bg-slate-600 bg-opacity-80 ${openPanel ? "" : "-translate-x-[100%]"} duration-500 ease-out`}>
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
          <button onClick={() => {setEditMode(!editMode)}}>
            edit mode
          </button>
          <button className={"ml-4"} onClick={handleSave}>
            SAVE
          </button>
          <div className={"overflow-scroll h-screen"}>
            <div>
              <h1 className={"text-white text-2xl text-center pt-4"}>Colour Picker</h1>
            </div>
            {!loading ?
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              <form className={"block"} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>Theme </label>
                  <input defaultValue="test" {...register("theme")} required={true} />
                  eg: moody, light, dark
                </div>
                <div>
                  <input className={"bg-gray-200 px-4"} type="submit" disabled={loading} />
                </div>
              </form>
              :
              <div className={"flex flex-col"}> loading... </div>
            }
            <p>Primary Colour</p>

            <div className={`w-16 h-16 m-4`} style={{ backgroundColor: primaryColour }} >
              <ColourElementWrapper type={"primary"}>
                <div className={"h-16"}/>
              </ColourElementWrapper>
            </div>
            <Circle
              colors={primaryColourHistory}
              color={primaryColour}
              onChange={(color) => {
                setPrimaryColour(color.hex);
              }}
            />
            <p>Secondary Colour</p>
            <div className={`w-16 h-16 m-4`} style={{ backgroundColor: secondaryColour }} >
              <ColourElementWrapper type={"secondary"}>
                <div className={"h-16"}/>
              </ColourElementWrapper>
            </div>
            <Circle
              colors={secondaryColourHistory}
              color={secondaryColour}
              onChange={(color) => {
                setSecondaryColour(color.hex);
              }}
            />
            <p>Accent Colour 1</p>
            <div className={`w-16 h-16 m-4`} style={{ backgroundColor: accentColour1 }} >
              <ColourElementWrapper type={"accent1"}>
                <div className={"h-16"}/>
              </ColourElementWrapper>
            </div>
            <Circle
              colors={accentColour1History}
              color={accentColour1}
              onChange={(color) => {
                setAccentColour1(color.hex);
              }
              }
            />
            <p>Accent Colour 2</p>
            <div className={`w-16 h-16 m-4`} style={{ backgroundColor: accentColour2 }} >
              <ColourElementWrapper type={"accent2"}>
                <div className={"h-16"}/>
              </ColourElementWrapper>
            </div>
            <Circle
              colors={accentColour2History}
              color={accentColour2}
              onChange={(color) => {
                setAccentColour2(color.hex);
              }
              }
            />
            <p>Accent Colour 3</p>
            <div className={`w-16 h-16 m-4`} style={{ backgroundColor: accentColour3 }} >
              <ColourElementWrapper type={"accent3"}>
                <div className={"h-16"}/>
              </ColourElementWrapper>
            </div>
            <Circle
              colors={accentColour3History}
              color={accentColour3}
              onChange={(color) => {
                setAccentColour3(color.hex);
              }
              }
            />
          </div>
        </div>
      </div>
    </div>
  );

}

