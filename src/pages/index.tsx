import React from "react";
import { HaydenPage } from "~/component/Pages/HaydenPage";
import { useColourContext } from "~/lib/ColourProvider";
import Head from "next/head";

export default function Home() {

  const {editMode} = useColourContext();

  return (
    <>
      <Head>
        <title>ColorPick</title>
        <meta name="description" content="AI Colour Palette Generator using GPT AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={"w-screen"}>
      <HaydenPage />
    </div>
    </>
  );
}
