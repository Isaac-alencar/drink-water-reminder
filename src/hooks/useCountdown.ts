import { useEffect, useRef, useState } from "react";

export const useCountdown = () => {
  const HOUR_IN_MINUTES = 60;
  const DEFAULT_TIMER_VALUE = HOUR_IN_MINUTES;

  const intervalRef = useRef<NodeJS.Timeout>();
  const [timer, setTimer] = useState<number>(DEFAULT_TIMER_VALUE);
  const [isCounting, setIsCounting] = useState<boolean>(false);

  const hour = Math.floor(timer / HOUR_IN_MINUTES);
  const minutes = timer % HOUR_IN_MINUTES;

  const restoreCountdown = () => {
    if (timer === 0) {
      setIsCounting(false);
      setTimer(DEFAULT_TIMER_VALUE);
    }

    clearInterval(intervalRef.current);
  };

  const startCountdown = () => {
    setIsCounting(true);
    restoreCountdown();

    const DELAY = 1000;
    intervalRef.current = setInterval(() => {
      if (intervalRef.current) setTimer((old) => old - 1);
    }, DELAY);
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(intervalRef.current);
      return;
    }
  }, [timer]);

  return {
    timer: { hour, minutes },
    isCounting,
    startCountdown,
  };
};
