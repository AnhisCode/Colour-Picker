import React from "react";
import { useColourContext } from "~/lib/ColourProvider";
import { ColourElementWrapper } from "~/component/ColourElementWrapper";
import { signOut } from "next-auth/react";

export const SignOutComponent = () => {

  const { primaryColour, accentColour1, secondaryColour, accentColour2 } = useColourContext();

  return (
    <div className={"w-[350px]"}>
      <ColourElementWrapper type={"secondary"}>
        <div
          className={"mb-2"} style={{ color: secondaryColour }}>
          <h1 className={"text-3xl mb-2 font-bold text-center"}>Oops...</h1>
          <p className={"text-center mb-4"}>You are already signed in, please sign out before using another account </p>
        </div>
      </ColourElementWrapper>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <div onClick={async () => {await signOut({callbackUrl: "/login"})}}
        className={"py-2 mb-2 flex justify-center w-full px-4 font-bold rounded-xl hover:scale-[105%] duration-300 ease-out cursor-pointer"}
        style={{ backgroundColor: secondaryColour, color: accentColour1 }}>
        Sign Out
      </div>
    </div>
  );
};