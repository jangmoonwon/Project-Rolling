import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";
import { LOGO_IMAGE } from "./constant";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export const NavBar = ({ isHiddenButton }) => {
  return (
    <nav className={cx("container")}>
      <div className={cx("item")}>
        <Link to="/">
          <img src={LOGO_IMAGE} alt="nav logo" />
        </Link>
        <Link to="/post">
          <button className={cx("button", { hidden: isHiddenButton })}>
            롤링 페이퍼 만들기
          </button>
        </Link>
      </div>
    </nav>
  );
};
