import React from "react";
import { ColourElementWrapper } from "~/component/ColourElementWrapper";
import { useColourContext } from "~/lib/ColourProvider";
import { SectionBleed1 } from "~/SVGComponents/page1/SectionBleed1";
import localFont from "@next/font/local";
import { calculateRelativeLuminance, darkenHexColor } from "~/lib/HexFunctionHelper";
import { ImageCarousel } from "~/component/ImageCarousel";

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

  const secondaryBrightness = calculateRelativeLuminance(secondaryColour);
  const bright = secondaryBrightness > 0.5;
  const darkerPrimary = darkenHexColor(primaryColour);

  return (
    <div className={`w-full ${poppins.variable} font-poppins overflow-x-hidden`}>
      <div className={"h-32 bg-white"} />
      <div className={""}>

        {/*header*/}
        <ColourElementWrapper type={"primary"}>
          <div className={"flex justify-center z-[1] h-[700px] w-full duration-300 ease-out"}
               style={{
                 // backgroundColor: primaryColour,
                 background: `linear-gradient(180deg, ${primaryColour} 40%, ${darkerPrimary} 100%)`
               }}>
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
                  <div className={"aspect-video bg-white shadow-xl rounded-3xl mb-8"} />
                  <ColourElementWrapper type={"accent1"}>
                    <h3 style={{ color: accentColour1 }} className={"text-xl font-bold mb-4"}>Begin Right Away</h3>
                    <p className={`leading-extra-loose ${bright ? "text-black" : "text-white"}`}> Fusce ut elit aliquet,
                      fermentum leo vel, tempus nunc.
                      Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                    </p>
                  </ColourElementWrapper>
                </div>
                <div>
                  <div className={"aspect-video bg-white shadow-xl rounded-3xl mb-8"} />
                  <ColourElementWrapper type={"accent1"}>
                    <h3 style={{ color: accentColour1 }} className={"text-xl font-bold mb-4"}>Customise to your
                      liking</h3>
                    <p className={`leading-extra-loose ${bright ? "text-black" : "text-white"}`}> Fusce ut elit aliquet,
                      fermentum leo vel, tempus nunc.
                      Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                    </p>
                  </ColourElementWrapper>
                </div>
                <div>
                  <div className={"aspect-video bg-white shadow-xl rounded-3xl mb-8"} />
                  <ColourElementWrapper type={"accent1"}>
                    <h3 style={{ color: accentColour1 }} className={"text-xl font-bold mb-4"}>Convenient at your
                      fingertips</h3>
                    <p className={`leading-extra-loose ${bright ? "text-black" : "text-white"}`}> Fusce ut elit aliquet,
                      fermentum leo vel, tempus nunc.
                      Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                    </p>
                  </ColourElementWrapper>
                </div>
              </div>
            </div>
          </div>

          <div className={"top-0 absolute z-0 rotate-[-1deg] md:translate-y-[-280px] translate-y-[-260px]"}>
            <SectionBleed1 colour={secondaryColour} />
          </div>
          <div className={"absolute rotate-[-181deg] z-10 scale-x-[150%] -translate-y-[230px]"}>
            <SectionBleed1 colour={secondaryColour} />
          </div>
        </ColourElementWrapper>

        {/*body 3*/}
        <ColourElementWrapper type={"primary"}>
          <div className={"relative w-full duration-300 ease-out xl:pt-40 pt-32 pb-40"}
               style={{
                 background: `linear-gradient(180deg, ${primaryColour} 40%, ${darkerPrimary} 100%)`
               }}>
            <div className={"w-full flex justify-center items-center xl:px-32 px-20 translate-y-[40px]"}>
              {/*image  */}
              <div className={"grid md:grid-cols-2 grid-cols-1 w-full gap-16 mb-10 xl:mb-20"}>
                <div className={"bg-white w-full rounded-3xl shadow-2xl aspect-video"} />
                <div className={"xl:w-[70%]"}>
                  <ColourElementWrapper type={"secondary"}>
                    <h3 style={{ color: secondaryColour }} className={"text-xl font-bold mb-4"}>Customise to your
                      liking</h3>
                    <p className={"leading-extra-loose"} style={{ color: secondaryColour }}> Fusce ut elit aliquet,
                      fermentum leo vel, tempus nunc.
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

        {/*body 4*/}
        <ColourElementWrapper type={"secondary"}>
          <div className={"relative w-full flex justify-center items-center"} style={{
            backgroundColor: secondaryColour
          }}>
            <ColourElementWrapper type={"primary"}>
              <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:px-32 px-16 mt-20 mb-20"}>
                <div className={"w-full xl:pl-32"}>
                  <div className={"text-2xl mb-8 font-bold"} style={{ color: primaryColour }}>
                    <h2 className={"mb-2"}>Get Experience</h2>
                    <h2 className={"mb-4"}>With ...</h2>
                    <div className={"w-16 h-2 rounded-full"} style={{ backgroundColor: primaryColour }} />
                  </div>
                  <p className={`leading-extra-loose ${bright ? "text-black" : "text-white"}`}>CoinBase is an online
                    site and a p2admin platform that allows
                    users to buy,
                    sell and/ or exchange digital and fiat assets safely. Owned and managed by
                    CoinBase Business Services established and Incoperated in Nigeria.
                  </p>
                  <div className={"flex"}>
                    <div
                      className={"py-4 z-[30] px-8 mt-8 rounded-full cursor-pointer hover:scale-[105%] duration-300 ease-out"}
                      style={{ backgroundColor: primaryColour, color: secondaryColour }}>
                      <button className={"text-sm font-bold z-[4]"}>
                        DISCOVER
                      </button>
                    </div>
                  </div>
                </div>
                <div className={"items-center relative flex h-[400px]"}>
                  <div
                    className={"absolute aspect-square z-20 xl:h-[80%] h-[60%] md:left-[40%] left-[30%] " +
                      "drop-shadow-[0px_0px_15px_rgba(0,0,0,0.25)] rounded-2xl translate-y-[-10px]"}
                    style={{ backgroundColor: primaryColour }} />
                  <div className={"absolute h-[200px] w-[300%] z-10 bg-white shadow-xl rounded-3xl " +
                    "mb-8 md:translate-x-[40px] translate-x-[-200px]"} />
                </div>
              </div>
            </ColourElementWrapper>
          </div>

          <div className={"top-0 absolute z-0 rotate-[-1deg] md:translate-y-[-280px] translate-y-[-260px]"}>
            <SectionBleed1 colour={secondaryColour} />
          </div>
          <div className={"absolute rotate-[-181deg] z-10 scale-x-[150%] translate-x-[-100px] -translate-y-[230px]"}>
            <SectionBleed1 colour={secondaryColour} />
          </div>
        </ColourElementWrapper>

        {/*body 5*/}
        <ColourElementWrapper type={"primary"}>
          <div className={"w-full"} style={{
            // backgroundColor: primaryColour,
            background: `linear-gradient(180deg, ${primaryColour} 40%, ${darkerPrimary} 100%)`
          }}>
            <ColourElementWrapper type={"secondary"}>
              <div className={"w-full flex h-full justify-center pt-60"}>
                <div>
                  <h2 className={"text-3xl font-bold text-center px-16"} style={{
                    color: secondaryColour
                  }}>DISCOVER WHAT THE COMMUNITY IS DOING</h2>
                  <ColourElementWrapper type={"accent1"}>
                    <div className={"w-full flex justify-center pt-8"}>
                      <div className={"w-16 h-2 rounded-full"} style={{ backgroundColor: accentColour1 }} />
                    </div>
                  </ColourElementWrapper>
                  <div className={"flex justify-center"}>
                    <div className={"text-center md:w-[500px] w-[80%]"}>
                      <p className={"mt-10"} style={{
                        color: secondaryColour
                      }}>
                        Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
                        Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                      </p>
                      <p className={"mt-4"} style={{
                        color: secondaryColour
                      }}>
                        Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
                        Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                      </p>
                      <p className={"mt-4"} style={{
                        color: secondaryColour
                      }}>
                        Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
                        Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                      </p>
                      <p className={"mt-4"} style={{
                        color: secondaryColour
                      }}>
                        Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
                        Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"md:pb-60 pb-16"}>
                <ImageCarousel />
              </div>
            </ColourElementWrapper>
          </div>
        </ColourElementWrapper>

        {/*body 6*/}
        <ColourElementWrapper type={"secondary"}>
          <div className={"top-0 absolute z-0 rotate-[-1deg] md:translate-y-[-280px] translate-y-[-260px]"}>
            <SectionBleed1 colour={secondaryColour} />
          </div>
        </ColourElementWrapper>
      </div>
    </div>
  );

};