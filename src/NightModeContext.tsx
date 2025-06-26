import { createContext, useContext } from "react";

export const NightModeContext = createContext({
  mode: false,
  setMode: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
});
export const useNightModeContext = () => useContext(NightModeContext);
