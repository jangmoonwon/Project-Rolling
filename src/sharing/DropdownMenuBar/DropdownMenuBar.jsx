import React, { useState } from "react";
import { ARROW_DOWN, ARROW_UP } from "./constant";
import styles from "./DropdownMenuBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/** 드롭다운 메뉴바 */
export const DropdownMenuBar = ({ value, setValue, data, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setValue(item);
    setIsOpen(false);
  };

  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>{text}</h2>
      <div className={cx("dropdownBlock")} onClick={toggleDropdown}>
        <ul>{value}</ul>
        <img src={isOpen ? ARROW_UP : ARROW_DOWN} alt="화살표 이미지" />
      </div>
      {isOpen && (
        <ul className={cx("items")}>
          {data.map((item, i) => (
            <li
              className={cx("item")}
              key={i}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
