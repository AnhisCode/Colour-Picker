import React from "react";
import { useColourContext } from "~/lib/ColourProvider";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x} ${y}`);
  };
const {
    primaryColour,
    secondaryColour,
    accentColour1,
    accentColour2,
    accentColour3} = useColourContext();

  console.log(primaryColour)

  return (
    <div onClick={handleClick} className={" top-0 w-screen"}>
      <div className={`flex w-full h-[1000px] justify-center items-center 
       duration-300 ease-out`} style={{backgroundColor: primaryColour}}>
        <p className={`text-3xl font-bold duration-300 ease-out`} style={{color: secondaryColour}}>Hayden&apos;s Website here</p>
      </div>
    </div>
  );
}
