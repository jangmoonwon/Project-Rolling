import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/** 사용자 프로필: 이미지, 이름, 관계 */
export const Profile = ({ image, name, relationship }) => {
  const data = [
    {
      relationship: "지인",
      styleClassName: "acquaintance",
    },
    {
      relationship: "친구",
      styleClassName: "friend",
    },
    {
      relationship: "동료",
      styleClassName: "colleague",
    },
    {
      relationship: "가족",
      styleClassName: "family",
    },
  ];

  function style() {
    const styleData = data.find((item) => item.relationship === relationship);
    return styleData.styleClassName;
  }

  return (
    <div className={cx("top")}>
      <img className={cx("profile")} src={image} alt="프로필 이미지"></img>

      <div>
        <p className={cx("name")}>
          From. <span className={cx("userName")}>{name}</span>
        </p>
        <span className={cx("relationship", style())}>{relationship}</span>
      </div>
    </div>
  );
};
