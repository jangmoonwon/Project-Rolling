import React, { useState } from "react";
import styles from "./NameInput.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/** 이름 입력창 */
export const NameInput = ({ value, setValue, title, text = "" }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleBlur = (event) => {
    const inputElement = event.target;
    const inputText = event.target.value;

    inputText === ""
      ? setErrorMessage("값을 입력해 주세요.")
      : setErrorMessage("");

    if (inputText === "") {
      inputElement.style.border = "1px solid #DC3A3A";
    } else {
      inputElement.style.border = "";
    }
  };

  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>{title}</h2>
      <input
        onBlur={handleBlur}
        className={cx("input")}
        onChange={(event) => setValue(event.target.value)}
        placeholder={`${text}이름을 입력해 주세요.`}
      />
      <p className={cx("error-message")}>{errorMessage}</p>
    </div>
  );
};
