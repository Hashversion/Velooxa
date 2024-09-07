/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction, useEffect } from "react";
import LabelInput from "./label-input";
import s from "./login-model.module.scss";
import CrossIcon from "@/components/assets/CrossIcon";
import Button from "@/components/ui/button";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { arbitrum, base, mainnet, optimism, polygon } from "wagmi/chains";

const queryClient = new QueryClient();
const config = getDefaultConfig({
  appName: "Velooxa",
  projectId: "d356af9a58fd9a61485c0db5855dbf0b",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

type LoginModelT = {
  isVisible: boolean;
  onClose: Dispatch<SetStateAction<void>>;
};

const LoginModel = ({ isVisible, onClose }: LoginModelT) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <div className={s.wrapper}>
              <div className={s.model}>
                <div className={s.header}>
                  <div></div>
                  <button className=" cursor-pointer" onClick={() => onClose()}>
                    <CrossIcon />
                  </button>
                </div>
                <div className={s.brand}>
                  <h1>Signup</h1>
                  <p>Connect to Velooxa</p>
                </div>

                <form action="" className={s.form}>
                  <LabelInput type="text" placeholder="Name" />
                  <LabelInput type="email" placeholder="Email" />
                  <LabelInput type="password" placeholder="Password" />
                  <ConnectButton />
                </form>
              </div>
            </div>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default LoginModel;
