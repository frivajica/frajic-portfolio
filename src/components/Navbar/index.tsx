import Link from "next/link";
import Image from "next/image";

import { socialMedia } from "@/src/static/data";
import DynamicIcon from "../common/DynamicIcon";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.container}>
      <div className={styles.routes}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </div>
      <div className={styles.logo}>
        <Image src="/icon.svg" alt="Logo" width={100} height={50} priority />
      </div>
      <div className={styles.networks}>
        {socialMedia.map(({ id, ...props }) => (
          <DynamicIcon key={id} {...props} />
        ))}
      </div>
    </header>
  );
}
