import styles from "./CountVisitor.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function CountVisitor({ recentMessages, messageCount }) {
  return (
    <div className={cx("container")}>
      <div className={cx("profile-count")}>
        {recentMessages.map((rec, i) => {
          return (
            <div key={i} className={cx("images")}>
              <img src={rec.profileImageURL} alt="pr" />
            </div>
          );
        })}
        {messageCount > 3 && (
          <div className={cx("images")}>+{messageCount - 3}</div>
        )}
      </div>
    </div>
  );
}
