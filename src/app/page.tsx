import styles from "./page.module.css";

import { Card } from "@/components/card";

export default function Home() {
  return (
    <main className={styles.main}>
      <Card goal="3L" percentage={0.8} title="Beber água" />
    </main>
  );
}
