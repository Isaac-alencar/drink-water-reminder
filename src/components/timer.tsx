"use client";

import { useReminder } from "@/providers/reminder.provider";

import styles from "./timer.module.css";

export const Timer = () => {
  const HOUR_IN_MINUTES = 60;
  const { countdown, startCountdown } = useReminder();

  const hour = Math.floor(countdown.counter / HOUR_IN_MINUTES);
  const minutes = countdown.counter % HOUR_IN_MINUTES;

  return (
    <>
      <div className={styles.container}>
        <TimerDisplay amount={hour.toString()} timeIndicator="h" />
        <span>:</span>
        <TimerDisplay amount={minutes.toString()} timeIndicator="m" />
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={startCountdown}
        disabled={countdown.isCounting}
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
