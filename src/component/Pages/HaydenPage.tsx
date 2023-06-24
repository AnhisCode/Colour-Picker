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
    <div className={`w-full ${poppins.variable} font-poppins overflow-x-hidden`}>
      <div className={"h-32 bg-white"}/>
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
                    <div
                      className={"py-4 z-[30] px-8 rounded-full cursor-pointer hover:scale-[105%] duration-300 ease-out"}
                      style={{ backgroundColor: secondaryColour, color: accentColour1 }}>
                      <ColourElementWrapper type={"accent1"}>
                        <button className={"text-sm font-bold z-[4]"}>
                          GET STARTED
                        </button>
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
          <div className={"relative w-full z-20 duration-300 ease-out pb-8 py-4"}
               style={{ backgroundColor: secondaryColour }}>
            {/*body 1 subheading*/}
            <div className={"flex justify-center translate-y-0 md:translate-y-[-100%]"}>
              <ColourElementWrapper type={"accent1"}>
                <h2 className={"text-2xl font-bold"} style={{ color: accentColour1 }}>Simple and seamless</h2>
                <div className={"flex justify-center mt-2"}>
                  <div className={"w-16 h-2 rounded-full"} style={{ backgroundColor: accentColour1 }} />
                </div>
              </ColourElementWrapper>
            </div>
            {/*body 1 image display*/}
            <div className={"px-20 pt-10 md:pt-0"}>
            <div className={"w-full grid md:grid-cols-3 grid-cols-1 gap-10"}>
              <div>
              <div className={"h-64 bg-white shadow-xl rounded-3xl mb-8"}/>
                <ColourElementWrapper type={"accent1"}>
                <h3 style={{color:accentColour1}} className={"text-xl font-bold mb-4"}>Begin Right Away</h3>
                  <p className={"leading-loose"}> Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
                    Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                  </p>
                </ColourElementWrapper>
              </div>
              <div>
                <div className={"h-64 bg-white shadow-xl rounded-3xl mb-8"}/>
                <ColourElementWrapper type={"accent1"}>
                  <h3 style={{color:accentColour1}} className={"text-xl font-bold mb-4"}>Customise to your liking</h3>
                  <p className={"leading-loose"}> Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
                    Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                  </p>
                </ColourElementWrapper>
              </div>
              <div>
                <div className={"h-64 bg-white shadow-xl rounded-3xl mb-8"}/>
                <ColourElementWrapper type={"accent1"}>
                  <h3 style={{color:accentColour1}} className={"text-xl font-bold mb-4"}>Convenient at your fingertips</h3>
                  <p className={"leading-loose"}> Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
                    Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                  </p>
                </ColourElementWrapper>
              </div>
            </div>
            </div>
          </div>

          <div className={"top-0 absolute z-0 rotate-[-1deg] translate-y-[-280px]"}>
            <SectionBleed1 colour={secondaryColour} />
          </div>
          <div className={"absolute rotate-[-181deg] z-10 scale-x-[150%] -translate-y-[230px]"}>
            <SectionBleed1 colour={secondaryColour} />
          </div>
        </ColourElementWrapper>

        {/*body 3*/}
        <ColourElementWrapper type={"primary"}>
          <div className={"relative w-full duration-300 ease-out pt-32 pb-40"} style={{ backgroundColor: primaryColour }}>
            <div className={"w-full flex justify-center items-center px-32 translate-y-[40px]"}>
              {/*image  */}
              <div className={"grid md:grid-cols-2 grid-cols-1 w-full gap-16"}>
              <div className={"bg-white w-full rounded-3xl shadow-2xl h-80"}/>
                  <div className={"w-[70%]"}>
                  <ColourElementWrapper type={"secondary"}>
                    <h3 style={{color:secondaryColour}} className={"text-xl font-bold mb-4"}>Customise to your liking</h3>
                    <p className={"leading-loose"} style={{color: secondaryColour}}> Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
                      Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                    </p>
                    <div className={"flex"}>
                      <div
                        className={"py-4 z-[30] px-8 mt-8 rounded-full cursor-pointer hover:scale-[105%] duration-300 ease-out"}
                        style={{ backgroundColor: secondaryColour, color: accentColour1 }}>
                        <ColourElementWrapper type={"accent1"}>
                          <button className={"text-sm font-bold z-[4]"}>
                            GET STARTED
                          </button>
                        </ColourElementWrapper>
                      </div>
                    </div>
                  </ColourElementWrapper>
                  </div>
              </div>
            </div>
          </div>
        </ColourElementWrapper>
      </div>
    </div>
  );

};

