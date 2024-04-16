import { useState } from "react";
import styles from "./ShareButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState();
  const [isCopyed, setIsCopyed] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const copyUrlToClipBoard = () => {
    setUrl(window.location.href);
    setIsCopyed(true);
    navigator.clipboard.writeText(url);
    setTimeout(() => {
      setIsCopyed(false);
    }, 5000);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("share-icon-button")} onClick={toggleDropdown}>
        <img src="../images/shareIcon.svg" alt="url 공유 버튼" />
      </div>
      {isOpen && (
        <div className={cx("share-button-container")}>
          <div className={cx("share-button")}>카카오톡 공유</div>
          <div className={cx("share-button")} onClick={copyUrlToClipBoard}>
            URL 공유
          </div>
        </div>
      )}
      {isCopyed && (
        <div className={cx("toast")}>
          <div className={cx("toast-text")}>
            <img src="../images/completed.png" alt="체크 이미지" />
            URL이 복사되었습니다.
          </div>
          <img
            src="../images/close.png"
            alt="닫기 버튼 이미지"
            onClick={() => setIsCopyed(false)}
          />
        </div>
      )}
    </div>
  );
}
