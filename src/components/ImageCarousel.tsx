import React, { useRef } from "react";
import { useColourContext } from "~/lib/ColourProvider";
import { ImageBox } from "~/components/ImageSelectSequence/ImageBox";

interface CarouselProps {
  items: string[];
}

export const ImageCarousel = () => {
  const [focusedIndex, setFocusedIndex] = React.useState(0);
  const handleItemClick = (index: number) => {
    setFocusedIndex(index);
  };

  const { secondaryColour } = useColourContext();

  return (
    <div className={"relative overflow-hidden"}>
      <div className={`w-[100vw] h-80 flex items-center justify-center`}>
        <div
          className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3 hover:scale-[105%] duration-300 ease-out"}>
          <ImageBox />
        </div>
        <div
          className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3 hover:scale-[105%] duration-300 ease-out"}>
          <ImageBox />
        </div>
        <div
          className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3 hover:scale-[105%] duration-300 ease-out"}>
          <ImageBox />
        </div>
        <div
          className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3 hover:scale-[105%] duration-300 ease-out"}
          style={{ backgroundColor: secondaryColour, boxShadow: `0 0 20px 1px ${secondaryColour}` }}>
        </div>
        <div
          className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3 hover:scale-[105%] duration-300 ease-out"}>
          <ImageBox />
        </div>
        <div
          className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3 hover:scale-[105%] duration-300 ease-out"}>
          <ImageBox />
        </div>
        <div
          className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3 hover:scale-[105%] duration-300 ease-out"}>
          <ImageBox />
        </div>
      </div>
    </div>
  );

};
