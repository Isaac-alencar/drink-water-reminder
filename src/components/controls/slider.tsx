"use client";

import { ChangeEvent, useState } from "react";

import styles from "./slider.module.css";

type SliderProps = {
  max: number;
  value: number;
  title: string;
  onChange: (value: number) => void;
};

export const Slider = ({
  max,
  value: sliderValue,
  title,
  onChange,
}: SliderProps) => {
  const [value, setValue] = useState<number>(0);
  const backgroundWidth = (value / 100) * 100 + "%";

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));

    onChange(Number(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <strong>{title}</strong>
        <span>{max}ml</span>
      </div>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={0}
          max={100}
          step={10}
          className={styles.slider}
          value={sliderValue}
          onChange={handleInputChange}
        />
        <div
          className={styles.customRange}
          style={{
            width: backgroundWidth,
          }}
        ></div>
      </div>
    </div>
  );
};
