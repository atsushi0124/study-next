import {useCallback, useState} from "react";

export const useInput = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleClickText = useCallback((e) => {
    if (e.target.value.length > 5) {
      window.alert("文字数が5文字以上です");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      // if (prevArray.some((item) => item === text)) {
      if (prevArray.includes(text)) {
        alert("同じ要素がすでに存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);
  return {text, array, handleClickText, handleAdd};
};
