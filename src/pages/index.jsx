import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {Headline} from "@/components/Header";
import {Footer} from "@/components/Footer/header";
import {useCallback, useEffect, useState} from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClickPlus = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  useEffect(() => {
    document.body.style.background = "lightblue";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  const handleClickText = useCallback((e) => {
    if (e.target.value.length > 5) {
      window.alert("文字数が5文字以上です");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDesplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return (
    <>
      <Headline title="Index Page" />
      <div className={styles.container}>
        <div className={styles.btnArea}>
          {isShow ? <h1 className={styles.title}>{count}</h1> : null}
          <button onClick={handleDesplay}>{isShow ? "非表示" : "表示"}</button>
          <button className={styles.btn} onClick={handleClickPlus}>
            クリック
          </button>
        </div>
        <ul className={styles.arrayList}>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <button onClick={handleAdd}>追加</button>
      </div>
      <input type="text" value={text} onChange={handleClickText} />
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
