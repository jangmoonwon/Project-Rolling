import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import styles from "./ReactionPopoverButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function ReactionPopoverButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmoji, setselectedEmoji] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getPickedEmoji = (emojiObject) => {
    setselectedEmoji(emojiObject.emoji);
    console.log(selectedEmoji);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("popover-button")} onClick={toggleDropdown}>
        <img src="../images/addEmojiIcon.svg" alt="화살표 이미지" />
        <p>추가</p>
      </div>
      {isOpen && (
        <div className={cx("emoji-picker")}>
          <EmojiPicker onEmojiClick={getPickedEmoji} />
        </div>
      )}
    </div>
  );
}
