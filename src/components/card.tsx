import Image from "next/image";

import styles from "./card.module.css";

type CardProps = {
  goal: string;
  title: string;
  percentage: number;
};

export const Card = ({ goal, percentage, title }: CardProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.percentage}>{percentage * 100}%</span>
      <div className={styles.imgContainer}>
        <Image
          src="/icons/water.svg"
          alt="glass of water"
          width={95}
          height={95}
        />
      </div>
      <div className={styles.textContainer}>
        <strong>{title}</strong>
        <span>Meta: {goal}</span>
      </div>
    </div>
  );
};
