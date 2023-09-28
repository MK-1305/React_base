import React from "react";
import ColorfulMessage from "./components/colorfulMessage";

// JSX記法はタグを一つにまとめないとエラーが出るが<>でそれを回避する
function App() {
  const onClickButton = () => alert();

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
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
}

// Appを他のファイルでも使えるようにする
export default App;
