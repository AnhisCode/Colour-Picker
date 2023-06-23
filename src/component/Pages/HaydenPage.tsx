import React from "react";
import { ColourElementWrapper } from "~/component/ColourElementWrapper";
import { useColourContext } from "~/lib/ColourProvider";
import Image from "next/image";
import { SectionBleed1 } from "~/SVGComponents/page1/SectionBleed1";
import localFont from "@next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../../../public/fonts/Poppins-Regular.ttf",
      weight: "400"
    },
    {
      path: "../../../public/fonts/Poppins-Bold.ttf",
      weight: "700"
    }
  ],
  variable: "--font-poppins"
});

export const HaydenPage = () => {

  const {
    primaryColour,
    secondaryColour,
    accentColour1,
    accentColour2,
    accentColour3
  } = useColourContext();

  return (
    <div className={`w-full ${poppins.variable} font-poppins`}>
      <div className={""}>
        {/*header*/}
        <ColourElementWrapper type={"primary"}>
          <div className={"flex justify-center z-[1] h-[700px] w-full duration-300 ease-out"}
               style={{ backgroundColor: primaryColour }}>
            <ColourElementWrapper type={"secondary"}>
              <div className={"text-center z-[2] duration-300 ease-out mt-[38%]"} style={{ color: secondaryColour }}>
                <h1 className={"text-5xl mb-6"}>Quickly and Easily</h1>
                <h1 className={"text-5xl font-bold"}>Create Websites</h1>
                <p className={"mt-4 text-xl"}>Change the colour of website in live</p>
                <p className={"text-xl"}>time and customise it how you want to look</p>
                <div className={"flex justify-center items-center mt-4"}>
                  <ColourElementWrapper type={"secondary"}>
                    <div className={"py-4 z-[30] px-8 rounded-full cursor-pointer hover:scale-[105%] duration-300 ease-out"}
                         style={{ backgroundColor: secondaryColour, color: accentColour1 }}>
                      <ColourElementWrapper type={"accent1"}>
                        <p className={"text-sm font-bold z-[4]"}>
                          GET STARTED
                        </p>
                      </ColourElementWrapper>
                    </div>
                  </ColourElementWrapper>
                </div>
              </div>
            </ColourElementWrapper>
          </div>
        </ColourElementWrapper>

        {/*body 1*/}
        <ColourElementWrapper type={"secondary"}>
          <div className={"h-[600px] relative w-full duration-300 ease-out"}
               style={{ backgroundColor: secondaryColour }}>
            <div className={"top-[-48%] absolute rotate-[-1deg]"}>
              <SectionBleed1 colour={secondaryColour} />
            </div>
          </div>
        </ColourElementWrapper>
      </div>
    </div>
  );

};

