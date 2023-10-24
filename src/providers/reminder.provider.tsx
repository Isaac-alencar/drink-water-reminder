import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";

import { useControls } from "@/hooks/use-controls";
import { useCountdown } from "@/hooks/use-countdown";

type ReminderContextProps = ReturnType<typeof useControls> &
  ReturnType<typeof useCountdown>;

export const ReminderContext = createContext<ReminderContextProps>(
  {} as ReminderContextProps
);

export const ReminderProvider = ({ children }: PropsWithChildren) => {
  const { controls, dispatchControls } = useControls();
  const { countdown, startCountdown } = useCountdown();

  useEffect(() => {
    if (countdown.counter === 0) {
      dispatchControls({ type: "COMPLETE_ITERATION" });
      dispatchControls({ type: "UPDATE_PROGRESS" });
    }
  }, [countdown.counter, dispatchControls]);

  const state = useMemo(
    () => ({
      countdown,
      controls,
      dispatchControls,
      startCountdown,
    }),
    [countdown, controls, startCountdown, dispatchControls]
  );

  return (
    <ReminderContext.Provider value={state}>
      {children}
    </ReminderContext.Provider>
  );
};

export const useReminder = () => {
  const context = useContext(ReminderContext);

  if (!context) {
    throw new Error("useReminder needs to be inside a ReminderProvider!");
  }

  return context;
};
