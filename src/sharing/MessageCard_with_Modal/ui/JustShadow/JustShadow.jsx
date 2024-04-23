import classNames from "classnames/bind";
import styles from "./JustShadow.module.scss";

const cx = classNames.bind(styles);

export const JustShadow = function ({ visible }) {
  if (!visible) {
    return <></>;
  }
  return <div className={cx("shadow")} />;
};
