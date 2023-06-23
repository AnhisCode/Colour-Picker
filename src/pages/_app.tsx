import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import LeftPanel from "~/component/LeftPanel";
import { MyColourProvider } from "~/lib/ColourProvider";
import React from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {


  return (
    <SessionProvider session={session}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*// @ts-ignore*/}
      <MyColourProvider>
      <LeftPanel/>
      <Component {...pageProps} />
      </MyColourProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
