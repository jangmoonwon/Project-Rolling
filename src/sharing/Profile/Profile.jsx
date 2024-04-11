import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/** 프로필 선택 */
export const Profile = ({ value, setValue, data }) => {
  const handleItemClick = (event) => {
    setValue(event);
  };

  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>프로필 이미지</h2>
      <div className={cx("profileBlock")}>
        <img
          className={cx("profileImage")}
          src={value}
          alt="선택된 프로필 이미지"
        />

        <div className={cx("imgItems")}>
          <p>프로필 이미지를 선택해주세요!</p>
          <div className={cx("itemsBlock")}>
            {data.map((item, i) => {
              return (
                <img
                  key={i}
                  className={cx("item")}
                  onClick={() => handleItemClick(item)}
                  alt="프로필 이미지"
                  src={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
