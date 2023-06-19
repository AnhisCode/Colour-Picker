import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useEffect, useState } from "react";
import LeftPanel from "~/component/LeftPanel";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className={"flex w-full h-screen justify-center items-center"}>
        <p className={"text-3xl font-bold"}>Hayden&apos;s Website here</p>
      </div>
    </>
  );
}
