import { useCallback, useEffect, useReducer, useRef } from "react";

import { countdownReducer, initialState } from "./use-countdown.reduce";

export const useCountdown = () => {
  const [countdown, countdownDispatch] = useReducer(
    countdownReducer,
    initialState
  );

  const intervalRef = useRef<NodeJS.Timeout>();

  const startCountdown = () => {
    countdownDispatch({ type: "START_COUNTDOWN" });

    const DELAY = 1000;
    intervalRef.current = setInterval(
      () => countdownDispatch({ type: "DECREMENT_COUNTER" }),
      DELAY
    );
  };

  useEffect(() => {
    if (countdown.counter === 0) {
      clearInterval(intervalRef.current);
      countdownDispatch({ type: "STOP_COUNTDOWN" });
    }
  }, [countdown.counter]);

  return { countdown, startCountdown };
};
