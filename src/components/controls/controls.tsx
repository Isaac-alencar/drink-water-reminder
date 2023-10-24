"use client";

import { Slider } from "./slider";
import { useReminder } from "@/providers/reminder.provider";

import styles from "./controls.module.css";

export const Controls = () => {
  const { controls, dispatchControls } = useReminder();

  console.log(controls.dailyGoal);

  return (
    <div className={styles.controls}>
      <Slider
        label="3000ml"
        title="Meta diária"
        value={controls.dailyGoal}
        onChange={(value) => {
          dispatchControls({ type: "SET_DAILY_GOAL", payload: value });
        }}
      />
      <Slider
        label="300ml"
        title="Quantidade por timer"
        value={controls.quantityPerTimer}
        onChange={(value) => {
          dispatchControls({ type: "SET_QUANTITY_PER_TIMER", payload: value });
        }}
      />
    </div>
  );
};
