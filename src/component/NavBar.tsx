import React, { useState } from "react";
import { useColourContext } from "~/lib/ColourProvider";
import Link from "next/link";
import { rotate } from "next/dist/server/lib/squoosh/impl";

export const NavbarHayden = () => {

  const [activeTab, setActiveTab] = useState<"Home" | "About Us" | "Contact">("Home");
  const [openNav, setOpenNav] = useState(false);


  const {
    primaryColour,
    secondaryColour,
    accentColour3,
    accentColour1
  } = useColourContext();

  const [isSmall, setIsSmall] = useState(false);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1095) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    });
  }

  return (
    <div>
    <div className={"h-32 flex justify-between items-center px-16"} style={
      {
        backgroundColor: primaryColour,
        color: secondaryColour
      }}>
      <div className={"text-4xl font-bold hover:scale-[105%] duration-300 ease-out cursor-pointer"}>
        C<span style={{ color: accentColour3 }}>o</span>l<span style={{ color: accentColour3 }}>o</span>rPick
        <div className={"w-24 h-1"} style={{ backgroundColor: accentColour3 }} />
      </div>
      <div className={"ml-16  md:block hidden"}>
        <div className={"flex justify-evenly items-center relative"}>
          <div>
            <p className={"mx-8 hover:scale-[105%] duration-300 ease-out cursor-pointer"} onClick={() => {
              setActiveTab("Home");
            }}>Home</p>
            {activeTab === "Home" &&
              <div className={"absolute translate-x-10"}>
                <div className={"h-1 w-8 rounded-xl"} style={{ backgroundColor: secondaryColour }} />
              </div>
            }
          </div>

          <div>
            <p className={"mx-8 hover:scale-[105%] duration-300 ease-out cursor-pointer"} onClick={() => {
              setActiveTab("About Us");
            }}>About Us</p>
            {activeTab === "About Us" &&
              <div className={"absolute translate-x-[50px]"}>
                <div className={"h-1 w-8 rounded-xl"} style={{ backgroundColor: secondaryColour }} />
              </div>
            }
          </div>

          <div>
            <p className={"mx-8 hover:scale-[105%] duration-300 ease-out cursor-pointer"} onClick={() => {
              setActiveTab("Contact");
            }}>Contact</p>
            {activeTab === "Contact" &&
              <div className={"absolute translate-x-[50px]"}>
                <div className={"h-1 w-8 rounded-xl"} style={{ backgroundColor: secondaryColour }} />
              </div>
            }
          </div>
          <Link href={"/login"}>
            <div className={"rounded-3xl px-6 py-3 ml-8 hover:scale-[105%] duration-300 ease-out cursor-pointer"}
                 style={{ backgroundColor: secondaryColour }}>
              <p className={"font-bold"} style={{ color: accentColour1 }}>Log In</p>
            </div>
          </Link>
        </div>
      </div>
        <div className={`w-12 h-12 rounded-xl md:hidden ${openNav ? "rotate-90" : "rotate-180"} cursor-pointer grid 
        duration-300 ease-out`} onClick={() => {
          setOpenNav(!openNav);
        }}>
          <div className={"flex justify-center items-center"}>
          <div className={"w-[80%] h-1 rounded-2xl"} style={{
            backgroundColor: secondaryColour
          }}/>
          </div>
          <div className={"flex justify-center items-center"}>
            <div className={"w-[80%] h-1 rounded-2xl"} style={{
              backgroundColor: secondaryColour
            }}/>
          </div>
          <div className={"flex justify-center items-center"}>
            <div className={"w-[80%] h-1 rounded-2xl"} style={{
              backgroundColor: secondaryColour
            }}/>
          </div>
        </div>

    </div>
      {openNav &&  <div className={"absolute z-20 w-full h-12 px-6 md:hidden -translate-y-10"}>
        <div className={"rounded-2xl h-24 p-4"}>
          <p className={`duration-300 ease-out cursor-pointer p-2 rounded-2xl mb-2`} onClick={() => {
            setActiveTab("Home");
          }}
             style={{
               backgroundColor: activeTab === "Home" ? secondaryColour : "transparent",
               color: activeTab === "Home" ? accentColour1 : secondaryColour
             }}>Home</p>
          <p className={`duration-300 ease-out cursor-pointer p-2 rounded-2xl mb-2`} onClick={() => {
            setActiveTab("About Us");
          }}
          style={{
            backgroundColor: activeTab === "About Us" ? secondaryColour : "transparent",
            color: activeTab === "About Us" ? accentColour1 : secondaryColour
          }}>About Us</p>
          <p className={`duration-300 ease-out cursor-pointer p-2 rounded-2xl mb-4`} onClick={() => {
            setActiveTab("Contact");
          }}
             style={{
               backgroundColor: activeTab === "Contact" ? secondaryColour : "transparent",
               color: activeTab === "Contact" ? accentColour1 : secondaryColour
             }}>Contact</p>
          <Link href={"/login"} className={`duration-300 ease-out font-bold cursor-pointer p-2 rounded-2xl mb-2`} onClick={() => {
            setActiveTab("About Us");
          }}
             style={{
               backgroundColor: "transparent",
               color: secondaryColour
             }}>Log In</Link>
        </div>
      </div>}
    </div>
  );
};