import React from "react";
import styles from "./CardContent.module.scss";
import classNames from "classnames/bind";
import parse from "html-react-parser";

const cx = classNames.bind(styles);

/** 작성글 */
export const CardContent = ({ content, font }) => {
  console.log(content);

  const data = [
    {
      font: "Noto Sans",
      value: "Noto Sans KR",
    },
    {
      font: "Pretendard",
      value: "Pretendard",
    },
    {
      font: "나눔명조",
      value: "Nanum Myeongjo",
    },
    {
      font: "나눔손글씨 손편지체",
      value: "Nanum Pen Script",
    },
  ];

  function style() {
    const styleData = data.find((item) => item.font === font);
    return styleData.value;
  }

  return (
    <div className={cx("bottom")}>
      <div
        className={cx("text", "hidden")}
        style={{
          fontFamily: style(),
          fontSize: "1.5rem",
          color: "black",
        }}
      >
        {parse(content)}
      </div>
    </div>
  );
};
