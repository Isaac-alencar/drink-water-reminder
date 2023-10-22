"use client";

import { useState } from "react";

import { Slider } from "./slider";

import styles from "./controls.module.css";

export const Controls = () => {
  const [goal, setGoal] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  return (
    <div className={styles.controls}>
      <Slider
        max={3000}
        value={goal}
        title="Meta diária"
        onChange={(value) => {
          setGoal(value);
        }}
      />
      <Slider
        max={300}
        value={step}
        title="Quantidade por timer"
        onChange={(value) => {
          setStep(value);
        }}
      />
    </div>
  );
};
