"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [aes, setAES] = useState<string>("II4031KkSTI080Pm157Cl171Hs");
  const [rc4, setRC4] = useState<string>("II4031KkSTI080Pm157Cl171Hs");

  return (
    <AppContext.Provider value={[rc4, setRC4, aes, setAES]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
