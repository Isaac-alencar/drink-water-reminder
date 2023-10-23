import { useCallback, useEffect, useRef, useState } from "react";

import { useGoal } from "@/providers/GoalProvider";

export const useCountdown = () => {
  const { completeIterations, currentIteration, totalIterations } = useGoal();

  const HOUR_IN_MINUTES = 60;
  const DEFAULT_TIMER_VALUE = 60;

  const intervalRef = useRef<NodeJS.Timeout>();
  const [timer, setTimer] = useState<number>(DEFAULT_TIMER_VALUE);
  const [isCounting, setIsCounting] = useState<boolean>(false);

  const hour = Math.floor(timer / HOUR_IN_MINUTES);
  const minutes = timer % HOUR_IN_MINUTES;

  const restoreCountdown = useCallback(() => {
    if (timer === 0 && currentIteration <= totalIterations) {
      setIsCounting(false);
      setTimer(DEFAULT_TIMER_VALUE);
      console.log(currentIteration);
      completeIterations();
    }

    clearInterval(intervalRef.current);
  }, [currentIteration, timer, completeIterations, totalIterations]);

  const startCountdown = () => {
    setIsCounting(true);
    restoreCountdown();

    const DELAY = 1000;
    intervalRef.current = setInterval(() => {
      if (intervalRef.current) setTimer((old) => old - 1);
    }, DELAY * 60);
  };

  useEffect(() => {
    if (timer === 0) {
      restoreCountdown();
    }
  }, [restoreCountdown, timer]);

  return {
    timer: { hour, minutes },
    isCounting,
    startCountdown,
  };
};
