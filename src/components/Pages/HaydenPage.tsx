import React, { useEffect, useReducer, useState } from "react";
import { ColourElementWrapper } from "~/components/ColourElementWrapper";
import { useColourContext } from "~/lib/ColourProvider";
import { SectionBleed1 } from "~/SVGComponents/page1/SectionBleed1";
import { Blob } from "~/SVGComponents/page1/Blob";
import localFont from "@next/font/local";
import { calculateRelativeLuminance, darkenHexColor, hexToRGB } from "~/lib/HexFunctionHelper";
import { ImageCarousel } from "~/components/ImageCarousel";
import { NavbarHayden } from "~/components/NavBar";
import { Footer } from "~/components/Footer";
import { Fade } from "react-awesome-reveal";
import { ImageBox } from "~/components/ImageSelectSequence/ImageBox";


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
    accentColour3,
    setOpenPanel
  } = useColourContext();




  const secondaryBrightness = calculateRelativeLuminance(secondaryColour);
  const bright = secondaryBrightness > 0.5;
  const darkerPrimary = darkenHexColor(primaryColour);

  return (
    <>
      <main className={`w-full ${poppins.variable} font-poppins overflow-hidden`}
            style={{ backgroundColor: darkerPrimary }}>
        <NavbarHayden />
        <div>
          {/*header*/}
          <ColourElementWrapper type={"primary"}>
            <div className={"flex justify-center z-[1] h-[700px] w-full duration-300 ease-out"}
                 style={{
                   // backgroundColor: primaryColour,
                   background: `linear-gradient(180deg, ${hexToRGB(primaryColour)} 40%, ${darkerPrimary} 100%)`
                 }}>
              <div className={"absolute scale-[70%] z-0 rotate-[18deg] md:left-10 -left-60 top-0"}>
                <Blob colour={accentColour2} />
              </div>
              <div className={"absolute scale-[70%] z-0 rotate-[160deg] md:right-10 -right-60 bottom-20"}>
                <Blob colour={accentColour3} />
              </div>
              <ColourElementWrapper type={"secondary"}>
                <Fade direction={"up"} triggerOnce={true}>
                  <div
                    className={"text-center cursor-default z-[2] duration-300 ease-out mt-[38%] md:scale-100 scale-[80%]"}
                    style={{ color: secondaryColour }}>
                    <h1 className={"text-5xl mb-6 "}>Quickly and Easily</h1>
                    <h1 className={"text-5xl font-bold"}>Create Websites</h1>
                    <p className={"mt-4 text-xl"}>Change the colour of website in live</p>
                    <p className={"text-xl"}>time and customise it how you want to look</p>
                    <div className={"flex justify-center items-center mt-4"}>
                      <ColourElementWrapper type={"secondary"}>
                        <div
                          className={"py-4 z-[30] px-8 rounded-full cursor-pointer hover:scale-[105%] duration-300 ease-out"}
                          style={{ backgroundColor: secondaryColour, color: accentColour1 }}
                          onClick={() => {
                            setOpenPanel(true);
                          }}>
                          <ColourElementWrapper type={"accent1"}>
                            <button className={"text-sm font-bold z-[4]"}>
                              GET STARTED
                            </button>
                          </ColourElementWrapper>
                        </div>
                      </ColourElementWrapper>
                    </div>
                  </div>
                </Fade>
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
                    <ImageBox/>
                    <ColourElementWrapper type={"accent1"}>
                      <Fade direction={"up"} triggerOnce={true}>
                        <h3 style={{ color: accentColour1 }} className={"text-xl font-bold mb-4"}>Begin Right Away</h3>
                        <p className={`leading-extra-loose ${bright ? "text-black" : "text-white"}`}> Fusce ut elit
                          aliquet,
                          fermentum leo vel, tempus nunc.
                          Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                        </p>
                      </Fade>
                    </ColourElementWrapper>
                  </div>
                  <div>
                    <ImageBox/>
                    <ColourElementWrapper type={"accent1"}>
                      <Fade direction={"up"} triggerOnce={true}>
                        <h3 style={{ color: accentColour1 }} className={"text-xl font-bold mb-4"}>Customise to your
                          liking</h3>
                        <p className={`leading-extra-loose ${bright ? "text-black" : "text-white"}`}> Fusce ut elit
                          aliquet,
                          fermentum leo vel, tempus nunc.
                          Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                        </p>
                      </Fade>
                    </ColourElementWrapper>
                  </div>
                  <div>
                    <ImageBox/>
                    <ColourElementWrapper type={"accent1"}>
                      <Fade direction={"up"} triggerOnce={true}>
                        <h3 style={{ color: accentColour1 }} className={"text-xl font-bold mb-4"}>Convenient at your
                          fingertips</h3>
                        <p className={`leading-extra-loose ${bright ? "text-black" : "text-white"}`}> Fusce ut elit
                          aliquet,
                          fermentum leo vel, tempus nunc.
                          Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                        </p>
                      </Fade>
                    </ColourElementWrapper>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={"top-0 absolute z-0 md:scale-[150%] scale-[250%] translate-x-10 md:translate-x-[-20px] rotate-[-3deg] md:translate-y-[-100px] translate-y-[-130px]"}>
              <SectionBleed1 colour={secondaryColour} />
            </div>
            <div className={"absolute rotate-[-181deg] z-10 scale-x-[150%] translate-x-10 md:translate-x-0 -translate-y-[80px]"}>
              <SectionBleed1 colour={secondaryColour} />
            </div>
          </ColourElementWrapper>

          {/*body 2*/}
          <ColourElementWrapper type={"primary"}>
            <div className={"relative w-full duration-300 ease-out xl:pt-40 pt-32 pb-40"}
                 style={{
                   background: `linear-gradient(180deg, ${hexToRGB(primaryColour)} 40%, ${darkerPrimary} 100%)`
                 }}>
              <div className={"absolute scale-[70%] z-0 rotate-[100deg] left-10 top-40"}>
                <Blob colour={accentColour3} />
              </div>
              <div className={"absolute scale-[70%] z-0 rotate-[90deg] right-10 -bottom-40"}>
                <Blob colour={accentColour2} />
              </div>
              <div className={"w-full flex justify-center items-center xl:px-32 px-20 translate-y-[40px]"}>
                {/*image  */}
                <div className={"grid md:grid-cols-2 grid-cols-1 w-full gap-16 mb-10 xl:mb-20"}>
                  <Fade direction={"left"} triggerOnce={true}>
                    <ImageBox/>
                  </Fade>
                  <div className={"xl:w-[70%]"}>
                    <ColourElementWrapper type={"secondary"}>
                      <Fade direction={"right"} triggerOnce={true}>
                        <h3 style={{ color: secondaryColour }} className={"text-xl font-bold mb-4"}>Customise to your
                          liking</h3>
                        <p className={"leading-extra-loose"} style={{ color: secondaryColour }}> Fusce ut elit aliquet,
                          fermentum leo vel, tempus nunc.
                          Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
                        </p>
                        <div className={"flex"}>
                          <div
                            className={"py-4 z-[30] px-8 mt-8 rounded-full cursor-pointer hover:scale-[105%] duration-300 ease-out"}
                            style={{ backgroundColor: secondaryColour, color: accentColour1 }}
                            onClick={() => {
                              setOpenPanel(true);
                            }}>
                            <ColourElementWrapper type={"accent1"}>
                              <button className={"text-sm font-bold z-[4]"}>
                                GET STARTED
                              </button>
                            </ColourElementWrapper>
                          </div>
                        </div>
                      </Fade>
                    </ColourElementWrapper>
                  </div>
                </div>
              </div>
            </div>
          </ColourElementWrapper>

          {/*body 3*/}
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
                    <Fade direction={"up"} triggerOnce={true}>
                      <div>
                        <p className={`leading-extra-loose ${bright ? "text-black" : "text-white"}`}>
                          Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue.
                          Fusce vel metus pharetra, fermentum
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
                    </Fade>
                  </div>
                  <div className={"items-center relative flex h-[400px]"}>
                    <div
                      className={"absolute aspect-square z-20 xl:h-[80%] h-[60%] md:left-[40%] left-[30%] " +
                        "drop-shadow-[0px_0px_15px_rgba(0,0,0,0.25)] inner-shadow-xl rounded-2xl translate-y-[-10px]"}
                      style={{ backgroundColor: primaryColour }} />
                    <div className={"absolute h-[200px] w-[300%] z-10 bg-white shadow-xl rounded-3xl " +
                      "mb-8 md:translate-x-[40px] translate-x-[-200px]"} />
                  </div>
                </div>
              </ColourElementWrapper>
            </div>

            <div
              className={"top-0 absolute z-0 rotate-[-1deg] scale-x-[150%] translate-x-10 md:translate-x-0 md:translate-y-[-150px] translate-y-[-110px]"}>
              <SectionBleed1 colour={secondaryColour} />
            </div>
            <div className={"absolute rotate-[-181deg] z-10 scale-x-[150%] translate-x-10 md:translate-x-0 -translate-y-[80px] md:-translate-y-[50px]"}>
              <SectionBleed1 colour={secondaryColour} />
            </div>
          </ColourElementWrapper>

          {/*body 4*/}
          <ColourElementWrapper type={"primary"}>
            <div className={"w-full relative"} style={{
              // backgroundColor: primaryColour,
              background: `linear-gradient(180deg, ${hexToRGB(primaryColour)} 40%, ${darkerPrimary} 100%)`
            }}>
              <div className={"absolute scale-[50%] left-10 top-20"}>
                <Blob colour={accentColour2} />
              </div>
              <div className={"absolute scale-[30%] right-10 bottom-20"}>
                <Blob colour={accentColour3} />
              </div>
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
                    <ColourElementWrapper type={"secondary"}>
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
                    </ColourElementWrapper>
                  </div>
                </div>
                <div className={"md:pb-60 pb-16"}>
                  <ImageCarousel />
                  <div className={"flex justify-center"}>
                    <ColourElementWrapper type={"secondary"}>
                      <div
                        className={"py-4 md:mb-0 mb-12 z-[30] px-8 rounded-full cursor-pointer hover:scale-[105%] duration-300 ease-out"}
                        style={{ backgroundColor: secondaryColour, color: accentColour1 }}
                        onClick={() => {
                          setOpenPanel(true);
                        }}>
                        <ColourElementWrapper type={"accent1"}>
                          <button className={"text-sm text-center font-bold z-[11]"}>
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

          {/*body 5*/}
          <ColourElementWrapper type={"secondary"}>
            <div
              className={"top-0 absolute z-0 rotate-[1deg] scale-x-[-150%] translate-x-10 md:translate-x-0 md:translate-y-[-150px] translate-y-[-110px]"}>
              <SectionBleed1 colour={secondaryColour} />
            </div>
            <div className={`md:block absolute scale-[70%] z-20 rotate-[34deg] left-10 top-0 hidden`}>
              <Blob colour={accentColour2} />
            </div>
            <div className={"absolute scale-[80%] z-[1] rotate-[210deg] right-10 -top-5"}>
              <Blob colour={accentColour3} />
            </div>
            <div className={"w-full relative flex justify-center items-center py-20"} style={{
              backgroundColor: secondaryColour
            }}>
              <div className={`text-center  z-[30] ${bright ? "text-black" : "text-white"}`}>
                <div className={"flex justify-center translate-y-0 md:translate-y-[-100%]"}>
                  <ColourElementWrapper type={"accent1"}>
                    <h2 className={"text-2xl font-bold"} style={{ color: accentColour1 }}>Experience the magic</h2>
                    <div className={"flex justify-center mt-2 md:mb-0 mb-10"}>
                      <div className={"w-16 h-2 rounded-full"} style={{ backgroundColor: accentColour1 }} />
                    </div>
                  </ColourElementWrapper>
                </div>
                <Fade direction={"up"} triggerOnce={true}>
                  <p className={"mb-4"}>Discover awesome way to build website in a</p>
                  <p>new fashion</p>
                  <div className={"flex justify-center"}>
                    <div
                      className={"py-4 z-[30] px-8 mt-8 rounded-full cursor-pointer hover:scale-[105%] duration-300 ease-out"}
                      style={{ backgroundColor: primaryColour, color: secondaryColour }}
                      onClick={() => {
                        setOpenPanel(true);
                      }}>
                      <button className={"text-sm font-bold z-[30]"}>
                        Get Started
                      </button>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className={"absolute z-[29] rotate-[-179deg] translate-x-10 scale-x-[-150%] md:translate-x-[10px] -translate-y-[85px] md:-translate-y-[75px]"}>
              <SectionBleed1 colour={secondaryColour} />
            </div>
          </ColourElementWrapper>

          {/*footer*/}
          <ColourElementWrapper type={"primary"}>
            <div className={"w-full"} style={{
              background: `linear-gradient(180deg, ${hexToRGB(primaryColour)} 40%, ${darkerPrimary} 100%)`
            }}>
              <div className={"pt-52 md:px-32 px-16 pb-32"}>
                <Footer />
              </div>
            </div>
          </ColourElementWrapper>
        </div>
      </main>
    </>
  );

};