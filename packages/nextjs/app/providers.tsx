"use client";

import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider enableSystem>
        <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
      </ThemeProvider>
    </>
  );
};

export default Providers;
