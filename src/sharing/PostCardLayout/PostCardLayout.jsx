import styles from "./PostCardLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const PostCardLayout = ({ children }) => {
  return <div className={cx("container")}>{children}</div>;
};
