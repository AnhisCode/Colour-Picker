import { useColourContext } from "~/lib/ColourProvider";
import { hexToRGB } from "~/lib/HexFunctionHelper";
import { Blob } from "~/SVGComponents/page1/Blob";
import React, { useEffect, useState } from "react";
import { LoginComponent } from "~/components/authComponent/LoginComponent";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { SignOutComponent } from "~/components/authComponent/SignOutComponent";
import Head from "next/head";


const Login: React.FC = () => {
  const [top1, setTop1] = useState<number>(Math.random() * 500);
  const [left1, setLeft1] = useState(Math.random() * 500);
  const [top2, setTop2] = useState<number>(Math.random() * 500 + 500);
  const [left2, setLeft2] = useState(Math.random() * 500 + 500);
  const [topChange1, setTopChange1] = useState<number>(1);
  const [leftChange1, setLeftChange1] = useState<number>(-1);
  const [topChange2, setTopChange2] = useState<number>(-1);
  const [leftChange2, setLeftChange2] = useState<number>(1);
  const [rotation1, setRotation1] = useState<number>(Math.random() * 360);
  const [rotation2, setRotation2] = useState<number>(Math.random() * 360);

  const {data: userData} = useSession();


  useEffect(() => {
    const parentWidth = window.innerWidth - 200; // Width of the parent container
    const parentHeight = window.innerHeight - 200; // Height of the parent container

    const interval = setInterval(() => {
      if (top1 >= parentHeight) {
        setTopChange1(-1);
      } else if (top1 < 0) {
        setTopChange1(1);
      }
      if (left1 >= parentWidth) {
        setLeftChange1(-1);
      } else if (left1 < 0) {
        setLeftChange1(1);
      }
      if (top2 >= parentHeight) {
        setTopChange2(-1);
      } else if (top2 < 0) {
        setTopChange2(1);
      }
      if (left2 >= parentWidth) {
        setLeftChange2(-1);
      } else if (left2 < 0) {
        setLeftChange2(1);
      }
      setTop1(top1 + topChange1);
      setLeft1(left1 + leftChange1);

      setTop2(top2 + topChange2);
      setLeft2(left2 + leftChange2);
      setRotation2(rotation2 + 0.1);
      setRotation1(rotation1 - 0.1);
    }, 32);

    return () => clearInterval(interval);
  });

  const {
    primaryColour,
    accentColour1,
    secondaryColour,
    accentColour2,
    accentColour3
  } = useColourContext();
  const router = useRouter();
  const redirect = () => {
    void router.push("/");
  };

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
    <div className={"w-screen relative font-poppins h-screen flex justify-center items-center overflow-hidden"} style={{
      background: `radial-gradient(circle, ${hexToRGB(primaryColour)} 20%, ${hexToRGB(accentColour1)} 100%)`
    }}>
      <div className={"flex justify-center z-10"} style={{
        color: secondaryColour
      }}>
        <div>
        {/*header*/}
        <div onClick={redirect}
             className={"flex justify-center z-20 mb-6 cursor-pointer hover:scale-[105%] duration-300 ease-out"}>
          <div className={"text-6xl font-bold text-center"}>
            C<span style={{ color: accentColour3 }}>o</span>l<span style={{ color: accentColour3 }}>o</span>rPick
            <div className={"w-36 h-1"} style={{ backgroundColor: accentColour3 }} />
          </div>
        </div>
          {userData? <SignOutComponent/> : <LoginComponent />}

        </div>
      </div>
      <div className={"absolute top-0 z-0"} style={{
        top: `${top1}px`,
        left: `${left1}px`,
        rotate: `${rotation1}deg`
      }}>
        <Blob colour={accentColour2} />
      </div>
      <div className={"absolute bottom-0 z-0"} style={{
        top: `${top2}px`,
        left: `${left2}px`,
        rotate: `${rotation2}deg`
      }}>
        <Blob colour={accentColour2} />
      </div>
    </div>
    </>

  );
};

export default Login;