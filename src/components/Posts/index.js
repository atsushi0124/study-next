import styles from "@/styles/Home.module.css";
import {useCallback, useState} from "react";

export const Posts = () => {
  //   const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      //   console.log(res);
      if (!res.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const json = await res.json();
      //   setState.data(json);
      setState((prevState) => {
        return {
          data: json,
          loading: false,
          error: null,
        };
      });
    } catch (error) {
      //   setState.error(error);
    }
    // state.loading(false);
  }, []);

  useState(() => {
    getPosts();
  }, [getPosts]);

  console.log("foo");

  //   api先のデータを取得中
  if (state.loading) {
    return <div>ローディング中です</div>;
  }

  //   apiのデータを取得できなかった時
  if (state.error) {
    return <div>{error.message}</div>;
  }

  //   api先のデータを取得できたとき
  if (state.data.length > 0) {
    return (
      <ol className={styles.ol}>
        {state.data.map((post) => {
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
