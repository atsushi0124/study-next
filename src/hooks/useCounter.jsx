import {useCallback, useState} from "react";

// カウントアップや表示/非表示の切り替えのstate
export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClickPlus = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    } else {
      return alert("10に達しました");
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return {count, isShow, handleClickPlus, handleDisplay};
};
