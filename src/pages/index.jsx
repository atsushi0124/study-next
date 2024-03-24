import {Headline} from "@/components/Header";
import {Posts} from "@/components/Posts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>トップページです</title>
      </Head>
      <Headline title="Index Page" />
      <Posts />
    </>
  );
}
