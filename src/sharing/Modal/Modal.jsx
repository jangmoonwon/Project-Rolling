import styles from "./Modal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/**
 *
 * @param {CardProfile} 작성된 프로필 컴포넌트(카드에 들어가는 거랑 동일)
 * @param {textContent} 해당 메시지의 텍스트
 * @returns 프로필과 텍스트가 들어간 모달
 */

export const Modal = ({
  CardProfile,
  textContent,
  date,
  visible,
  setModalId,
}) => {
  const goBack = function () {
    setModalId(-1);
  };
  if (!visible) {
    return <></>;
  }

  return (
    <div className={cx("container")}>
		
      <div className={cx("head")}>
        <div className={cx("date")}>{date}</div>
        <div className={cx("profile-area")}>{CardProfile}</div>
        <div className={cx("divider")} />
      </div>

      <div className={cx("content")}>{textContent}</div>

      <button className={cx("button")} onClick={goBack}>
        확인
      </button>
    </div>
  );
};
