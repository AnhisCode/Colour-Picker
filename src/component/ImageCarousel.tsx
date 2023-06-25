import React, { useRef } from "react";

interface CarouselProps {
  items: string[];
}
export const ImageCarousel = () => {
  const [focusedIndex, setFocusedIndex] = React.useState(0);
  const handleItemClick = (index: number) => {
    setFocusedIndex(index);
  };

    return (
      <div className={"relative"}>
        <div className={`w-[100vw] h-80 flex items-center justify-center overflow-scroll`} >
          <div className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3"} />
          <div className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3"} />
          <div className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3"} />
          <div className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3"} />
          <div className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3"} />
          <div className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3"} />
          <div className={"bg-white shadow-2xl h-[60%] aspect-video rounded-3xl mx-3"} />
        </div>
      </div>
    );

}
