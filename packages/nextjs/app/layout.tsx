import localFont from "next/font/local";
import Providers from "./providers";
import Header from "@/components/layouts/header";
import "@/styles/globals.scss";
import { getMetadata } from "@/utils/scaffold-eth/getMetadata";
import "@rainbow-me/rainbowkit/styles.css";

const Suisse = localFont({
  src: "../public/fonts/Suisse_intl_Regular.ttf",
  display: "swap",
});

export const metadata = getMetadata({
  title: "Velooxa — Your Premier Car Auction Platform",
  description:
    "Join Velooxa, the premier online car auction platform, where you can bid on a diverse range of vehicles. Discover great deals and detailed listings from the comfort of your home",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning className={Suisse.className}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
