import styles from "./BadgeEmoji.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function BadgeEmoji({ emoji, count }) {
  return (
    <div className={cx("container")}>
      <span>{emoji}</span>
      <span>{count}</span>
    </div>
  );
}
