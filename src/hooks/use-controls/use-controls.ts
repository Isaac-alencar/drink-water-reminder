import { useReducer } from "react";
import { controlReducer, initialState } from "./use-controls.reduce";

export const useControls = () => {
  const [controls, dispatchControls] = useReducer(controlReducer, initialState);

  return { controls, dispatchControls };
};
