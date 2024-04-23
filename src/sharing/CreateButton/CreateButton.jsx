import React from "react";
import styles from "./CreateButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/** 생성하기 버튼 */
export const CreateButton = ({ userName, content }) => {
  function UserButton() {
    if (content === undefined) {
      if (userName.length === 0) {
        return (
          <button
            className={cx("unclicked-button")}
            type="submit"
            disabled="disabled"
          >
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
          <button
            className={cx("unclicked-button")}
            type="submit"
            disabled="disabled"
          >
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
