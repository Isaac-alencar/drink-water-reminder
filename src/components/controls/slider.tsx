"use client";

import { ChangeEvent } from "react";

import styles from "./slider.module.css";

type SliderProps = {
  label: string;
  title: string;
  value: number;
  onChange: (value: number) => void;
};

export const Slider = ({ label, value, title, onChange }: SliderProps) => {
  const backgroundWidth = (value / 100) * 100 + "%";

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <strong>{title}</strong>
        <span>{label}</span>
      </div>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={0}
          max={100}
          step={10}
          className={styles.slider}
          value={value}
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
