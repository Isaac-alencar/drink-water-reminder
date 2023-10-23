"use client";

import { useGoal } from "@/providers/GoalProvider";

import { Card } from "@/components/card";
import { Timer } from "@/components/timer";
import { Controls } from "@/components/controls/";

import styles from "./page.module.css";

export default function Home() {
  const { dailyGoal, currentProgress } = useGoal();

  return (
    <main className={styles.main}>
      <Card
        goal={`${((dailyGoal * 3) / 100).toPrecision(2)}L`}
        percentage={currentProgress}
        title="Beber água"
      />
      <Controls />
      <Timer />
    </main>
  );
}
