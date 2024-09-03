"use client";

import { ReactLenis } from "../components/Lenis";
import { ScaffoldEthAppWithProviders } from "@/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "@/components/ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider enableSystem>
        <ReactLenis root>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ReactLenis>
      </ThemeProvider>
    </>
  );
};

export default Providers;
