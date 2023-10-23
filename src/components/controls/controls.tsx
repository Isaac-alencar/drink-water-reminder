"use client";

import { useGoal } from "@/providers/GoalProvider";

import { Slider } from "./slider";

import styles from "./controls.module.css";

export const Controls = () => {
  const { dailyGoal, quantityPerTimer, setQuantityPerTime, setDailyGoal } =
    useGoal();

  return (
    <div className={styles.controls}>
      <Slider
        label="3000ml"
        title="Meta diária"
        value={dailyGoal}
        onChange={(value) => {
          setDailyGoal(value);
        }}
      />
      <Slider
        label="300ml"
        title="Quantidade por timer"
        value={quantityPerTimer}
        onChange={(value) => {
          setQuantityPerTime(value);
        }}
      />
    </div>
  );
};
