import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Button = () => {
  return (
    <div>
      <button className={cx("button")} type="submit">
        생성하기
      </button>
    </div>
  );
};
