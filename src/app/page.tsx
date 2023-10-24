"use client";

import { Card } from "@/components/card";
import { Timer } from "@/components/timer";
import { Modal } from "@/components/modal";
import { Controls } from "@/components/controls";

import { useReminder } from "@/providers/reminder.provider";

import styles from "./page.module.css";

export default function Home() {
  const { controls, countdown } = useReminder();

  return (
    <main className={styles.main}>
      <Card
        goal={`${((controls.dailyGoal * 3) / 100).toPrecision(2)}L`}
        percentage={controls.currentProgress}
        title="Beber água"
      />
      <Controls />
      <Timer />
      <Modal shouldDisplayModal={countdown.finishCounting} />
    </main>
  );
}
