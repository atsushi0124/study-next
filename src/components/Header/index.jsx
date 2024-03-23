import styles from "./Header.module.css";
import Link from "next/link";

// const inter = Inter({subsets: ["latin"]});
const NAV_ITEMS = [
  {href: "/", label: "index"},
  {href: "about", label: "about"},
  {href: "test", label: "test"},
];

export function Headline(props) {
  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        {NAV_ITEMS.map((item) => {
          return (
            <Link key={item.href} className={styles.link} href={item.href}>
              {item.label}
            </Link>
          );
        })}

        {/* <Link className={styles.link} href="/">
          index
        </Link>
        <Link className={styles.link} href="/about/">
          about
        </Link> */}
      </div>
    </header>
  );
}
