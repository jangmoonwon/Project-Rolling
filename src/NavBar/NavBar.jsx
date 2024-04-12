import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";
import { LOGO_IMAGE } from "./constant";

const cx = classNames.bind(styles);

export const NavBar = () => {
  return (
    <nav className={cx("container")}>
      <div className={cx("item")}>
        <img src={LOGO_IMAGE} alt="nav logo" />
        <button className={cx("button")}>롤링 페이퍼 만들기</button>
      </div>
    </nav>
  );
};
