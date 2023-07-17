import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox-next";
import { PaletteTree } from "./palette";
import { HaydenPage } from "~/components/Pages/HaydenPage";
import MyApp from "~/pages/_app";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/HaydenPage">
        <HaydenPage />
      </ComponentPreview>
      <ComponentPreview path="/MyApp">
        <MyApp />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;