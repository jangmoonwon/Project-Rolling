import styles from "./DeleteButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const DeleteButton = ({ image }) => {
  return (
    <div>
      {image ? (
        <img className={cx("icon")} src={image} alt="삭제하기" />
      ) : (
        <div className={cx("editBlock")}>
          <button className={cx("editButton")}>삭제하기</button>
        </div>
      )}
    </div>
  );
};
