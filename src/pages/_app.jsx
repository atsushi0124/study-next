import "@/styles/globals.css";
import Head from "next/head";
import {useCounter} from "@/hooks/useCounter";
import {useInput} from "src/hooks/useInput";
import {useBgColor} from "@/hooks/useBgColor";

export default function App({Component, pageProps}) {
  const counter = useCounter();
  const Input = useInput();
  useBgColor();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...Input} />
    </>
  );
}
