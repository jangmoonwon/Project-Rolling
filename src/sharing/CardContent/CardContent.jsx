import React from "react";
import styles from "./CardContent.module.scss";
import classNames from "classnames/bind";
import "../../styles/global.scss";

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

  const customStyle = {
    fontFamily: style(),
    fontSize: "1.5rem",
    color: "black",
  };

  return (
    <div className={cx("bottom")}>
      <div className={cx(style())}>{content}</div>
      <div
        className="nanumpenscript"
        style={customStyle}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};
