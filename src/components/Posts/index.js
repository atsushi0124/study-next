import {User} from "@/components/User";
import styles from "./Post.module.css";
import {useCallback, useEffect, useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      throw new Error("no such action type");
  }
};

const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      if (!res.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const json = await res.json();
      console.log(json);
      dispatch({type: "end", data: json});
    } catch (error) {
      dispatch({type: "error", error});
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  //   api先のデータを取得中
  if (state.loading) {
    return <div>ローディング中です</div>;
  }

  //   apiのデータを取得できなかった時
  if (state.error) {
    return <div>{state.error.message}</div>;
  }

  //   api先のデータを取得できたとき
  if (state.data.length > 0) {
    return (
      <div className={styles.centerList}>
        <ul className={styles.memoList}>
          {state.data.map((post) => {
            // User配列から、現在のpostのuserIdに一致するユーザーを検索
            const user = User.find((user) => user.id === post.userId);
            return (
              <li key={post.id} className={styles.memo}>
                <strong>タイトル:</strong>
                <br />
                {post.title}
                <br />
                {/* ユーザー名を表示。ユーザーが見つからない場合は「不明」を表示 */}
                <strong>投稿者:</strong> {user ? user.name : "不明"}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    // データがなかったとき
    return <div>データがありません</div>;
  }
};
