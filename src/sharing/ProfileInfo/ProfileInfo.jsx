import styles from "./ProfileInfo.module.scss";
import classNames from "classnames/bind";

import badge_others from "./badge/others.svg";
import badge_coworker from "./badge/coworker.svg";
import badge_family from "./badge/family.svg";
import badge_friend from "./badge/friend.svg";

const cx = classNames.bind(styles);

export const ProfileInfo = ({ profileImage, name, relationship }) => {
  let badge;

  if (relationship === "친구") {
    badge = badge_friend;
  }
  if (relationship === "지인") {
    badge = badge_others;
  }
  if (relationship === "동료") {
    badge = badge_coworker;
  }
  if (relationship === "가족") {
    badge = badge_family;
  }
  return (
    <div className={cx("container")}>
      <div className={cx("image")}>
        <img src={profileImage} />
      </div>
      <div className={cx("info-wrapper")}>
        <div className={cx("writter-name")}>
          <div className={cx("from")}>From.</div>
          <div className={cx("name")}>{name}</div>
        </div>
        <div className={cx("badge")}>
          <img src={badge} />
        </div>
      </div>
    </div>
  );
};
