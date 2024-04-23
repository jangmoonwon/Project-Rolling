import { useState } from "react";
import styles from "./ShareButton.module.scss";
import classNames from "classnames/bind";
import { SHARE_ICON, COMPLETED_ICON, CLOSE_ICON } from "./constant";
import { useKakaoSdk } from "util";

const cx = classNames.bind(styles);

export function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopyed, setIsCopyed] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const copyUrlToClipBoard = () => {
    const currentUrl = window.location.href;
    setIsCopyed(true);
    navigator.clipboard.writeText(currentUrl);
    setTimeout(() => {
      setIsCopyed(false);
    }, 5000);
  };

  const { shareKakao } = useKakaoSdk();

  const handleKakaoClick = () => {
    shareKakao();
  };

  return (
    <div className={cx("container")}>
      <div className={cx("share-icon-button")} onClick={toggleDropdown}>
        <img src={SHARE_ICON} alt="url 공유 버튼" />
      </div>
      {isOpen && (
        <div className={cx("share-button-container")}>
          <div className={cx("share-button")} onClick={handleKakaoClick}>
            카카오톡 공유
          </div>
          <div className={cx("share-button")} onClick={copyUrlToClipBoard}>
            URL 공유
          </div>
        </div>
      )}
      {isCopyed && (
        <div className={cx("toast")}>
          <div className={cx("toast-text")}>
            <img src={COMPLETED_ICON} alt="체크 이미지" />
            URL이 복사되었습니다.
          </div>
          <img
            src={CLOSE_ICON}
            alt="닫기 버튼 이미지"
            onClick={() => setIsCopyed(false)}
          />
        </div>
      )}
    </div>
  );
}
