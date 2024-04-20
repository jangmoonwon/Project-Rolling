import { useState } from "react";
import { BadgeEmoji } from "sharing/BadgeEmoji/BadgeEmoji";
import styles from "./EmojiExpantion.module.scss";
import classNames from "classnames/bind";
import { ARROW_DOWN } from "./constant";

const cx = classNames.bind(styles);

export function EmojiExpantion({ reactions }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("arrow-button")} onClick={toggleDropdown}>
        <img src={ARROW_DOWN} alt="화살표 이미지" />
      </div>
      {isOpen && (
        <div className={cx("grid-container")}>
          <div className={cx("grid-style")}>
            {reactions.slice(0, 8).map((item, i) => (
              <BadgeEmoji key={i} emoji={item.emoji} count={item.count} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
