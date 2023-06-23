import React, { useState } from "react";
import { useColourContext } from "~/lib/ColourProvider";
import Block from "@uiw/react-color-block";
import { ColourElementWrapper } from "~/component/ColourElementWrapper";

export default function Home() {

  const {
    primaryColour,
    secondaryColour,
    accentColour1,
    accentColour2,
    accentColour3
  } = useColourContext();

  return (
    <div>
      <div className={`top-0 w-screen`}>
        <div className={`flex w-screen h-screen justify-center items-center 
       duration-300 ease-out`} style={{ backgroundColor: primaryColour }}>
          <div className={""}>
            {/*TODO turn these into component*/}
            <ColourElementWrapper type={"secondary"}>
              <p
                style={{ color: secondaryColour }}
                className={"text-3xl font-bold m-4"}>
                Hayden&apos;s Website here
              </p>
            </ColourElementWrapper>
            <ColourElementWrapper type={"accent1"}>
              <p
                style={{ color: accentColour1 }}
                className={"text-2xl font-bold m-4"}>

                Hayden&apos;s Website here
              </p>
            </ColourElementWrapper>
            <ColourElementWrapper type={"accent2"}>
              <p
                style={{ color: accentColour2 }}
                className={"text-xl font-bold m-4"}>
                Hayden&apos;s Website here
              </p>
            </ColourElementWrapper>
            <ColourElementWrapper type={"accent3"}>
              <p
                style={{ color: accentColour3 }}
                className={"text-md font-bold m-4"}>
                Hayden&apos;s Website here
              </p>
            </ColourElementWrapper>
          </div>

        </div>
      </div>
    </div>
  );
}
