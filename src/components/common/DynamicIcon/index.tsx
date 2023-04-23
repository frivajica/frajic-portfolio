import { DynamicIconProps } from "@/src/interfaces";
import styles from "./DynamicIcon.module.css";

export default function DynamicIcon({ icon, link }: DynamicIconProps) {
  return (
    <div className={styles.container}>
      <a href={link} className={styles.item} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </div>
  );
}
