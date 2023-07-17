import React from "react";
import { useColourContext } from "~/lib/ColourProvider";
import { useForm } from "react-hook-form";
import { ImKey, ImMail, ImMan } from "react-icons/im";
import { GoMail } from "react-icons/go";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";
import Google from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface LoginProps {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const LoginComponent = () => {

  const { register, handleSubmit } = useForm<LoginProps>();

  const googleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const onSubmit = (data: LoginProps) => {
    console.log(data);
  };

  const {
    accentColour1,
    secondaryColour,
    accentColour3
  } = useColourContext();




  return (
    <Fade>
      <div className={"w-[400px] z-20"}>


        {/*Login input*/}
        <div className={"w-full flex justify-center py-2"} style={{
          color: secondaryColour
        }}>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(onSubmit)} className={"w-3/4 md:w-full"}>
            <label className={"font-bold"}>Email</label>
            <div className={"flex"}>
              <div className={"flex items-center justify-center px-2"}>
                <GoMail />
              </div>
              <input {...register("email")}
                     className={"h-12 w-full rounded-lg appearance-none bg-transparent " +
                       "font-bold border-none w-full leading-tight focus:outline-none"}
                     required={true}
                     type={"email"}
              />
            </div>
            <div className={"w-full h-[2px] -translate-y-1 mb-6"} style={{
              backgroundColor: secondaryColour
            }} />

            <label className={"font-bold"}>Password</label>
            <div className={"flex"}>
              <div className={"flex items-center justify-center px-2"}>
                <ImKey />
              </div>
              <input {...register("password")}
                     className={"h-12 w-full rounded-lg appearance-none bg-transparent " +
                       "font-bold border-none w-full leading-tight focus:outline-none"}
                     required={true}
                     type={"password"}
              />
            </div>
            <div className={"w-full h-[2px] -translate-y-1 mb-6"} style={{
              backgroundColor: secondaryColour
            }} />

            <div className={"flex justify-between mb-10"}>
              <div className={"flex items-center"}>
                <input type={"checkbox"} {...register("rememberMe")} className={"mr-2"} />
                <label>Remember me</label>
              </div>
              <div className={"flex items-center"}>
                <a href={"/"} className={"text-sm"}>Forgot password?</a>
              </div>
            </div>

            <div className={"flex justify-center"}>
              <input type={"submit"}
                     className={"py-2 mb-2 w-full px-4 font-bold rounded-xl hover:scale-[105%] duration-300 ease-out cursor-pointer"}
                     style={{ backgroundColor: secondaryColour, color: accentColour1 }}
                     value={"Login"} />

            </div>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <div onClick={googleLogin}
                 className="py-2 flex mb-2 justify-center w-full px-4 font-bold
                    rounded-xl hover:scale-[105%] duration-300 ease-out cursor-pointer"
                 style={{ backgroundColor: secondaryColour, color: accentColour1 }}
            >
              <span className="p-1 flex items-center mr-2">
                <Image
                  src="/icon/google.svg"
                  alt="google"
                  width="14"
                  height="14"
                />
              </span>
              Login with Google
            </div>
            <div className={"text-sm cursor-default"}>Don&apos;t have an account?
              <a href={"/signup"}
                 className={"font-bold underline"}> Click
                Here</a> to
              sign up
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};