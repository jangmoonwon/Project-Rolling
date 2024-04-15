import styles from "./CountVisitor.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function CountVisitor({ recentMessages, messageCount }) {
  return (
    <div className={cx("container")}>
      <div className={cx("profile-count")}>
        {recentMessages.map((item, i) => {
          return (
            <div key={i} className={cx("images")}>
              <img src={item.profileImageURL} alt="프로필이미지" />
            </div>
          );
        })}
        <div className={cx("images")}>+{messageCount - 3}</div>
      </div>
      <p>{messageCount}</p>명이 작성했어요!
    </div>
  );
}
