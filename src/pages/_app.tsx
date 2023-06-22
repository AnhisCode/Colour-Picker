import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import LeftPanel from "~/component/LeftPanel";
import { MyColourProvider } from "~/lib/ColourProvider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  return (
    <SessionProvider session={session}>
      <MyColourProvider>
      <LeftPanel/>
      <Component {...pageProps} />
      </MyColourProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
