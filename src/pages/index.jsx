import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {Headline} from "@/components/Header";
import {Footer} from "@/components/Footer/header";
import {useEffect} from "react";
import {useCounter} from "@/hooks/useCounter";
import {useInput} from "src/hooks/useInput";

export default function Home() {
  const {count, isShow, handleClickPlus, handleDisplay} = useCounter();
  const {text, array, handleClickText, handleAdd} = useInput();

  useEffect(() => {
    document.body.style.background = "lightblue";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <>
      <Headline title="Index Page" />
      <div className={styles.container}>
        <div className={styles.btnArea}>
          {isShow ? <h1 className={styles.title}>{count}</h1> : null}
          <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
          <button className={styles.btn} onClick={handleClickPlus}>
            クリック
          </button>
        </div>
        <input type="text" value={text} onChange={handleClickText} />
        <ul className={styles.arrayList}>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <button onClick={handleAdd}>追加</button>
      </div>
      <main className={styles.main}>
        <h2>index</h2>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
