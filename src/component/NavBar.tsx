import React, { useState } from "react";
import { useColourContext } from "~/lib/ColourProvider";

export const NavbarHayden = () => {

  const [activeTab, setActiveTab] = useState<"Home" | "About Us" | "Contact">("Home");


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
    <div className={"h-32 flex justify-between items-center px-16"} style={
      {
        backgroundColor: primaryColour,
        color: secondaryColour
      }}>
      <div className={"text-4xl font-bold hover:scale-[105%] duration-300 ease-out cursor-pointer"}>
        C<span style={{ color: accentColour3 }}>o</span>l<span style={{ color: accentColour3 }}>o</span>rPick
        <div className={"w-24 h-1"} style={{ backgroundColor: accentColour3 }} />
      </div>
      {!isSmall ? <div className={"ml-32"}>
        <div className={"flex justify-evenly items-center relative"}>
          <div>
            <p className={"mx-12 hover:scale-[105%] duration-300 ease-out cursor-pointer"} onClick={() => {
              setActiveTab("Home");
            }}>Home</p>
            {activeTab === "Home" &&
              <div className={"absolute translate-x-14"}>
                <div className={"h-1 w-8 rounded-xl"} style={{backgroundColor: secondaryColour}}/>
              </div>
            }
          </div>

          <div>
            <p className={"mx-12 hover:scale-[105%] duration-300 ease-out cursor-pointer"} onClick={() => {
              setActiveTab("About Us");
            }}>About Us</p>
            {activeTab === "About Us" &&
              <div className={"absolute translate-x-[67px]"}>
                <div className={"h-1 w-8 rounded-xl"} style={{backgroundColor: secondaryColour}}/>
              </div>
            }
          </div>

          <div>
            <p className={"mx-12 hover:scale-[105%] duration-300 ease-out cursor-pointer"} onClick={() => {
              setActiveTab("Contact");
            }}>Contact</p>
            {activeTab === "Contact" &&
              <div className={"absolute translate-x-[65px]"}>
                <div className={"h-1 w-8 rounded-xl"} style={{backgroundColor: secondaryColour}}/>
              </div>
            }
          </div>

          <div className={"rounded-3xl px-6 py-3 ml-12 hover:scale-[105%] duration-300 ease-out cursor-pointer"}
               style={{ backgroundColor: secondaryColour }}>
            <p className={"font-bold"} style={{ color: accentColour1 }}>Get Started</p>
          </div>
        </div>
      </div> : <div>Small</div>}
    </div>
  );
};