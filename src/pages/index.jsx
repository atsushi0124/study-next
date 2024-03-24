import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {Headline} from "@/components/Header";
import {Footer} from "@/components/Footer/header";
import {useBgColor} from "@/hooks/useBgColor";
import {useCallback, useState} from "react";
import {get} from "http";

export default function Home() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
    console.log(json);
  }, []);

  useState(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <Headline title="Index Page" />
      {posts.length > 0 ? (
        <ol className={styles.ol}>
          {posts.map((post) => {
            return (
              <li key={post.id} className={styles.container}>
                {post.title}
              </li>
            );
          })}
        </ol>
      ) : null}
    </>
  );
}
