import styles from "./Header.module.css";
import Link from "next/link";

// const inter = Inter({subsets: ["latin"]});

export function Headline(props) {
  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        <Link className={styles.link} href="/">
          index
        </Link>
        <Link className={styles.link} href="/about/">
          about
        </Link>
      </div>
    </header>
  );
}
