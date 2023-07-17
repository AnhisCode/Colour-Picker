import React, { useEffect, useState } from "react";
import { HaydenPage } from "~/components/Pages/HaydenPage";
import { useColourContext } from "~/lib/ColourProvider";
import Head from "next/head";

export default function Home() {

  const {editMode} = useColourContext();
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsWindows(userAgent.includes('Windows'));
  }, []);

  return (
    <>
      <Head>
        <title>ColorPick</title>
        <meta name="description" content="AI Colour Palette Generator using GPT AI" />
        <link rel="icon" href="/ColorPickerIcon.PNG" />
        {isWindows &&
          <style>
            {
              `::-webkit-scrollbar{
              display: none;
              }
              `
            }
          </style>
        }
      </Head>
    <div className={"w-screen"}>
      <HaydenPage />
    </div>
    </>
  );
}
