"use client";

import { useCountdown } from "@/hooks/useCountdown";

import styles from "./timer.module.css";

export const Timer = () => {
  const { isCounting, startCountdown, timer } = useCountdown();

  return (
    <>
      <div className={styles.container}>
        <TimerDisplay amount={timer.hour.toString()} timeIndicator="h" />
        <span>:</span>
        <TimerDisplay amount={timer.minutes.toString()} timeIndicator="m" />
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={startCountdown}
        disabled={isCounting}
      >
        Começar
      </button>
    </>
  );
};

type TimerDisplayProps = {
  amount: string;
  timeIndicator: string;
};

const TimerDisplay = ({ amount, timeIndicator }: TimerDisplayProps) => {
  return (
    <div className={styles.timerDisplayWrapper}>
      <div className={styles.timerDisplay}>
        <span>{amount}</span>
      </div>
      <span className={styles.timerIndicator}>{timeIndicator}</span>
    </div>
  );
};
