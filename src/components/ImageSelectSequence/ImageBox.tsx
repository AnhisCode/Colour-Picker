import React from "react";
import { useColourContext } from "~/lib/ColourProvider";
import Image from "next/image";
import { ImageSelectorModal } from "~/components/ImageSelectSequence/ImageSelectorModal";


export const ImageBox = () => {

  const [image, setImage] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const { secondaryColour, primaryColour } = useColourContext();

  return (
    <>
    <ImageSelectorModal setIsOpen={setIsOpen} isOpen={isOpen} setImage={setImage}/>
    <div className={`aspect-video mb-8 group cursor-pointer rounded-2xl overflow-hidden ${image[8] != "t" ? "shadow-xl" : ""}`} onClick={() => {
      setIsOpen(!isOpen)
    }}>
      {image == "" ? <div className={"bg-white w-full h-full rounded-3xl flex justify-center items-center"}>
        <div
          className={"w-10 h-10 group-hover:scale-[110%] duration-300 ease-out rounded-full flex justify-center items-center"}
          style={{ backgroundColor: primaryColour }}>
          <p className={"font-bold text-xl"}
             style={{ color: secondaryColour }}>+</p>
        </div>
      </div> :
        <Image
        src={image}
        alt="google"
        width="2000"
        height="2000"
      />
      }
    </div>
    </>
  );
};