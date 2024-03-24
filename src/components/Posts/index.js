import styles from "@/styles/Home.module.css";
import {useCallback, useState} from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      if (!res.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useState(() => {
    getPosts();
  }, [getPosts]);

  //   api先のデータを取得中
  if (loading) {
    return <div>ローディング中です</div>;
  }

  //   apiのデータを取得できなかった時
  if (error) {
    return <div>{error.message}</div>;
  }

  //   api先のデータを取得できたとき
  if (posts.length > 0) {
    return (
      <ol className={styles.ol}>
        {posts.map((post) => {
          return (
            <li key={post.id} className={styles.container}>
              {post.title}
            </li>
          );
        })}
      </ol>
    );
  } else {
    // データがなかったとき
    return <div>データがありません</div>;
  }
};
