import { TwatsContext } from "../context/TwatsContext";
import { useContext } from "react";

export const useTwatsContext = () => {
  const context = useContext(TwatsContext);

  if (!context) {
    throw Error("useTwatsContext can be used only inside TwatsContextProvider!");
  }

  return context;
};
