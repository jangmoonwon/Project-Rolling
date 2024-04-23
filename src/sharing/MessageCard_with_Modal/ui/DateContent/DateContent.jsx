import classNames from "classnames/bind";
import styles from "./DateContent.module.scss"
const cx = classNames.bind(styles);

/** 등록 날짜 */
export const DateContent = ({ date }) => {
  function displayDate() {
    const createdAtDate = new Date(date);
    const year = createdAtDate.getFullYear();

    // 10보다 작다면 월, 일 숫자 앞에 0을 붙임
    const month =
      createdAtDate.getMonth() + 1 < 10
        ? `0${createdAtDate.getMonth() + 1}`
        : createdAtDate.getMonth() + 1;
    const day =
      createdAtDate.getDate() < 10
        ? `0${createdAtDate.getDate()}`
        : createdAtDate.getDate();

    return `${year}.${month}.${day}`;
  }

  return <p className={cx("date")}>{displayDate()}</p>;
};
