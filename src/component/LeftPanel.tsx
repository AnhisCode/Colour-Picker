import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";

export default function LeftPanel() {

  const [openPanel, setOpenPanel] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const getTheme = api.gpt.getColours.useMutation();

  const onSubmit = async (data: any) => {
    console.log(data);
    setLoading(true);
    const res = await getTheme.mutateAsync({theme: "Hello ChatGPT!"})
    console.log(res.greeting);
  }

  return (
    <>
      <div className={"absolute"}>
        <div className={"flex"}>
          <div className={`bg-slate-600 bg-opacity-80 ${openPanel ? "" : "-translate-x-[100%]"} relative
         w-[25vw] h-screen duration-300 ease-out`}>

            {/*panel toggle*/}
            <div className={"flex items-center font-bold pl-4 text-2xl absolute -right-[25px] " +
              "top-[47%]"}>
              <div className={`${openPanel ? "animate-side-bounce-left" : "animate-side-bounce-right"} cursor-pointer`}
                   onClick={() => setOpenPanel(!openPanel)}>
                {openPanel ? "<" : ">"}
              </div>
            </div>

            {/*panel info*/}
            <div>
              <h1 className={"text-white text-2xl text-center pt-4"}>Colour Picker</h1>
            </div>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form className={"block"} onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Theme </label>
                <input defaultValue="test" {...register("Theme")} />
                eg: moody, light, dark
              </div>
              <div >
                <input className={"bg-gray-200 px-4"} type="submit" disabled={loading}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

}
