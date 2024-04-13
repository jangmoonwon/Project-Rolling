import React from "react";
import styles from "./CreateButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const CreateButton = () => {
  return (
    <div>
      <button className={cx("button")} type="submit">
        생성하기
      </button>
    </div>
  );
};
