import Providers from "./providers";
import "@/styles/globals.scss";
import { getMetadata } from "@/utils/scaffold-eth/getMetadata";
import "@rainbow-me/rainbowkit/styles.css";

export const metadata = getMetadata({
  title: "Velooxa — Your Premier Car Auction Platform",
  description:
    "Join Velooxa, the premier online car auction platform, where you can bid on a diverse range of vehicles. Discover great deals and detailed listings from the comfort of your home",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
