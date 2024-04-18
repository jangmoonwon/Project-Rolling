import React from "react";
import styles from "./CreateButton.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

/** 생성하기 버튼 */
export const CreateButton = ({ userName, content }) => {
  // 중복 해결 필요
  function UserButton() {
    if (content === undefined) {
      if (userName.length === 0) {
        return (
          <button className={cx("notButton")} type="submit" disabled="disabled">
            생성하기
          </button>
        );
      } else {
        return (
          <button className={cx("button")} type="submit">
            생성하기
          </button>
        );
      }
    } else {
      if (userName.length === 0 || content.length === 0) {
        return (
          <button className={cx("notButton")} type="submit" disabled="disabled">
            생성하기
          </button>
        );
      } else {
        return (
          <button className={cx("button")} type="submit">
            생성하기
          </button>
        );
      }
    }
  }

  return (
    <div>
      <UserButton />
    </div>
  );
};
