import React from "react";
import { HaydenPage } from "~/component/Pages/HaydenPage";
import { useColourContext } from "~/lib/ColourProvider";

export default function Home() {

  const {editMode} = useColourContext();

  return (
    <div className={"w-screen"}>
      <HaydenPage />
    </div>
  );
}
