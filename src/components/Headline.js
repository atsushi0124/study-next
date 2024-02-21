import styles from "@/styles/Home.module.css";

// const inter = Inter({subsets: ["latin"]});

export function Headline(props) {
  return (
    <div className={styles.description}>
      <p>
        Get started by editing
        <code className={styles.code}>src/pages/{props.title}</code>
      </p>
    </div>
  );
}
