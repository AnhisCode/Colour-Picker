import React from "react";
import { useColourContext } from "~/lib/ColourProvider";
import { ImFacebook, ImGooglePlus, ImHome, ImInstagram, ImPhone, ImTwitter } from "react-icons/im";
import { useForm } from "react-hook-form";

interface emailData {
  email: string;
}

export const Footer = () => {

  const { register, handleSubmit } = useForm<emailData>();

  const onSubmit = (data: emailData) => {
    alert(`Thank you for subscribing to our newsletter (${data.email})! This is a demo so nothing will happen hahaha`)
  }

  const {
    accentColour3,
    secondaryColour,
    accentColour1
  } = useColourContext();

  return (
    <div className={"grid xl:grid-cols-4 gap-10 md:grid-cols-2 "} style={{ color: secondaryColour }}>
      <div className={"text-sm mb-6"}>
        <div className={"text-4xl font-bold mb-10"}>
          C<span style={{ color: accentColour3 }}>o</span>l<span style={{ color: accentColour3 }}>o</span>rPick
          <div className={"w-24 h-1"} style={{ backgroundColor: accentColour3 }} />
        </div>
        <div className={"mb-10"}>
          Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum
        </div>
        <div className={"flex"}>
          <ImInstagram className={"mr-4"}/>
          <ImTwitter className={"mr-4"}/>
          <ImFacebook className={"mr-4"}/>
          <ImGooglePlus className={"mr-4"}/>
        </div>
      </div>
      <div className={"flex xl:justify-center mb-6"}>
        <div>
        <div className={"text-2xl mb-10"}>
          Product
        </div>
        <ul className={"text-sm"}>
          <li className={"mb-4 cursor-pointer"}>
            Home
          </li>
          <li className={"mb-4 cursor-pointer"}>
            About us
          </li>
          <li className={"mb-4 cursor-pointer"}>
            Contact
          </li>
          <li className={"mb-4 cursor-pointer"}>
            Sign In
          </li>
        </ul>
        </div>
      </div>
      <div className={"flex xl:justify-center mb-6"}>
        <div className={"text-sm"}>
          <div className={"text-2xl mb-10"}>
            Contact Us
          </div>
          <ul>
            <li className={"mb-2 flex"}>
              <ImPhone className={"mr-2"}/> <p>0404 040 404</p>
            </li>
            <li className={"mb-2 flex"}>
              <ImHome className={"mr-2"} /> <p> Imaginary Road 22, QLD State, 4040</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={"text-2xl mb-10"}>
          Subscribe to our newsletter
        </div>
        <p className={"mb-4"}>
          The latest insights, community content, and resources sent to your inbox weekly.
        </p>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit(onSubmit)} className={"mr-4"}>
          <input className={" rounded-md w-full p-2 mb-4"}
                 type="email"
                 {...register("email")}
                 placeholder={"Enter your email"}
                 style={{color: "black"}}
                 required={true}
          />
          <input type={"submit"} className={"py-2 px-4 font-bold rounded-xl hover:scale-[105%] duration-300 ease-out cursor-pointer"}
                 style={{backgroundColor: secondaryColour, color:accentColour1}}/>
        </form>
      </div>
    </div>
  );
};