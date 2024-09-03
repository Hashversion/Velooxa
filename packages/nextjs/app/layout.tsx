import Providers from "./providers";
import "@rainbow-me/rainbowkit/styles.css";
import "~~/styles/globals.scss";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Velooxa — Your Premier Car Auction Platform",
  description:
    "Join Velooxa, the premier online car auction platform, where you can bid on a diverse range of vehicles. Discover great deals and detailed listings from the comfort of your home",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
