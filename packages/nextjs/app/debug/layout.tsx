"use client";

import Providers from "../providers";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useInitializeNativeCurrencyPrice } from "@/hooks/scaffold-eth";
import { Toaster } from "react-hot-toast";

const DebugLayout = ({ children }: { children: React.ReactNode }) => {
  useInitializeNativeCurrencyPrice();
  return (
    <>
      <Providers>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="relative flex flex-col flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </Providers>
    </>
  );
};

export default DebugLayout;
