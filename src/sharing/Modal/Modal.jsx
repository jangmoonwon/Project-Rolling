import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

/**
 * @param {profile} 작성된 프로필 컴포넌트(카드에 들어가는 거랑 동일)
 * @param {profile} 해당 메시지의 텍스트
 * @returns 프로필과 텍스트가 들어간 모달
 */
export const Modal = ({ profile, textContent }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("head")}>
        <div className={cx("date")}>2023.07.20</div>
        <div className={cx("profile-area")}>{profile}</div>
        <div className={cx("divider")} />
      </div>
      <div className={cx("content")}>{textContent}</div>
      <Link to="/list">
        <button className={cx("button")}>확인</button>
      </Link>
    </div>
  );
};
