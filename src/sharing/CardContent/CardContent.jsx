import React from "react";
import styles from "./CardContent.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/** 작성글 */
export const CardContent = ({ content, font }) => {
  const data = [
    {
      font: "Noto Sans",
      styleClassName: "notoSans",
    },
    {
      font: "Pretendard",
      styleClassName: "pretendard",
    },
    {
      font: "나눔명조",
      styleClassName: "nanumMyeongjo",
    },
    {
      font: "나눔손글씨 손편지체",
      styleClassName: "nanumpenscript",
    },
  ];

  function style() {
    const styleData = data.find((item) => item.font === font);
    return styleData.styleClassName;
  }

  return (
    <div className={cx("bottom")}>
      <div className={cx(style())}>{content}</div>
      <div
        className={cx(style())}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};
