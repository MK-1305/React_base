import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";
import { ColorfulMessage } from "./components/colorfulMessage";

// JSX記法はタグを一つにまとめないとエラーが出るが<>でそれを回避する
function App() {
  // [ステートの変数名、ステートを変更する関数名]を書く
  const [num, setNum] = useState(0);
  // ボタンを押す度に顔文字がでたり消えたりする
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUP = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 最初に走らせたい処理と第二引数の値が変わった時に処理させる（関心分離）
  useEffect(() => {
    if (num > 0) {
      // カウントが３の倍数の時顔文字を表示する
      if (num % 3 === 0) {
        // 左側がfalseなら右を返す
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // 左側がtrueなら右を返す
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      {/* 外カッコがJSで中の{}がオブジェクト */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* コンポーネントにPropsを渡す */}
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      {/* <ColorfulMessage color="pink" message="お元気です！" /> */}
      {/* 違う書き方もできる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUP}>カウントアップ！</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* 左側がtrueなら右を返す */}
      {faceShowFlag && <p>(;´∀｀)</p>}
    </>
  );
}

// Appを他のファイルでも使えるようにする
export default App;
