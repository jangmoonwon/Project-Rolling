import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import styles from "./ReactionPopoverButton.module.scss";
import classNames from "classnames/bind";
import { ADDEMOJI_ICON } from "./constant";
import { addReaction, getReactions } from "util";

const cx = classNames.bind(styles);

export function ReactionPopoverButton({ id, setReactions, newReactions }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getPickedEmoji = async (emojiObject) => {
    await addReaction(id, emojiObject.emoji, "increase");
    await setReactionsdata();
  };

  const setReactionsdata = async () => {
    const reactions = await getReactions(id, 8);
    setReactions(reactions);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("popover-button")} onClick={toggleDropdown}>
        <img src={ADDEMOJI_ICON} alt="화살표 이미지" />
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
