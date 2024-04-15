import { useState } from "react";
import styles from "./ShareUrlButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function ShareUrlButton() {
  const [url, setUrl] = useState();

  const getUrl = () => {
    setUrl(window.location.href);
    console.log(url);
  };

  return (
    <div className={cx("container")} onClick={getUrl}>
      <img src="images/shareIcon.svg" alt="url 공유 버튼" />
    </div>
  );
}
