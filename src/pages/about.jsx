import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {Footer} from "@/components/Footer/header";
import {Headline} from "@/components/Header";

export default function Home() {
  return (
    <>
      <Headline title="about Page" />
      <main className={styles.main}>
        <h2>about</h2>
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