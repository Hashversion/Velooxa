"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "@/components/Lenis";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BlockieAvatar } from "@/components/scaffold-eth";
import { ProgressBar } from "@/components/scaffold-eth/ProgressBar";
import { wagmiConfig } from "@/services/web3/wagmiConfig";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ThemeProvider enableSystem>
        <ReactLenis root>
          <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
              <ProgressBar />
              <RainbowKitProvider
                avatar={BlockieAvatar}
                theme={mounted ? (isDarkMode ? darkTheme() : lightTheme()) : lightTheme()}
              >
                {children}
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </ReactLenis>
      </ThemeProvider>
    </>
  );
};

export default Providers;
