import React from "react";

// JSX記法はタグを一つにまとめないとエラーが出るが<>でそれを回避する
function App() {
  const onClickButton = () => alert();
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
}

// Appを他のファイルでも使えるようにする
export default App;
