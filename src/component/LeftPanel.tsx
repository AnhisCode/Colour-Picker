import { useEffect, useState } from "react";
import { FieldValue, type SubmitHandler, useForm } from "react-hook-form";
import { api } from "~/utils/api";
import { useColourContext } from "~/lib/ColourProvider";
import Circle from '@uiw/react-color-circle';

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

// create prop interface
type colourPanelProps = {
  setPrimaryColour: (value: string) => void;
  setSecondaryColour: (value: string) => void;
  setAccentColour1: (value: string) => void;
  setAccentColour2: (value: string) => void;
  setAccentColour3: (value: string) => void;
}

export default function LeftPanel() {

  const [openPanel, setOpenPanel] = useState(false);
  const [loading, setLoading] = useState(false);
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
      accentColour3
  } = useColourContext();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<colourData>();
  const getTheme = api.gpt.getColours.useMutation();
  const onSubmit: SubmitHandler<colourData> = async (data) => {
    console.log(data.theme);
    setLoading(true);
    const res = await getTheme.mutateAsync({theme: data.theme});
    setPrimaryColour((res as colourResponse).primaryColour);
    setSecondaryColour((res as colourResponse).secondaryColour);
    setAccentColour1((res as colourResponse).accentColour1);
    setAccentColour2((res as colourResponse).accentColour2);
    setAccentColour3((res as colourResponse).accentColour3);
    setLoading(false);
  }

  return (
      <div className={`fixed top-0 z-10 w-[25vw] bg-slate-600 bg-opacity-80 ${openPanel ? "" : "-translate-x-[100%]"} duration-500 ease-out`}>
        {/*panel toggle*/}
        <div className={"flex items-center font-bold pl-4 text-2xl absolute -right-[25px] " +
          "top-[47%]"}>
          <div className={`${openPanel ? "animate-side-bounce-left" : "animate-side-bounce-right"} cursor-pointer`}
               onClick={() => setOpenPanel(!openPanel)}>
            {openPanel ? "<" : ">"}
          </div>
        </div>
        <div className={"flex"}>
          <div className={`relative`}>
            {/*panel info*/}
            <div className={"overflow-scroll h-screen"}>
            <div>
              <h1 className={"text-white text-2xl text-center pt-4"}>Colour Picker</h1>
            </div>
            {!loading ?
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              <form className={"block"} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>Theme </label>
                  <input defaultValue="test" {...register("theme")} required={true}/>
                  eg: moody, light, dark
                </div>
                <div >
                  <input className={"bg-gray-200 px-4"} type="submit" disabled={loading}/>
                </div>
              </form>
              :
              <div className={"flex flex-col"}> loading... </div>
            }
            <p>Primary Colour</p>
            <div className={`w-16 h-16 m-4`} style={{backgroundColor: primaryColour}}/>
            <Circle
              colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00' ]}
              color={primaryColour}
              onChange={(color) => {
                setPrimaryColour(color.hex);
              }}
            />
            <p>Secondary Colour</p>
            <div className={`w-16 h-16 m-4`} style={{backgroundColor: secondaryColour}}/>
            <Circle
              colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00' ]}
              color={secondaryColour}
              onChange={(color) => {
                setSecondaryColour(color.hex);
              }}
            />
            <p>Accent Colour 1</p>
            <div className={`w-16 h-16 m-4`} style={{backgroundColor: accentColour1}}/>
            <Circle
              colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00' ]}
              color={accentColour1}
              onChange={(color) => {
                setAccentColour1(color.hex);
              }
              }
            />
            <p>Accent Colour 2</p>
            <div className={`w-16 h-16 m-4`} style={{backgroundColor: accentColour2}}/>
            <Circle
              colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#858541' ]}
              color={accentColour2}
              onChange={(color) => {
                setAccentColour2(color.hex);
              }
              }
            />
            <p>Accent Colour 3</p>
            <div className={`w-16 h-16 m-4`} style={{backgroundColor: accentColour3}}/>
            <Circle
              colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00' ]}
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
