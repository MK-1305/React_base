import React from "react";

const ColorfulMessage = (props) => {
  // propsの中からcolorとchildrenを取り出しコードをスッキリさせる
  const { color, children } = props;
  const contentStyle = {
    color: color,
    // プロパティ名と当てはめる値が同じ名前のときはcolor,だけでもOK
    fontSize: "18px",
  };
  // タグで囲ったときはchildrenという変数に格納される
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
