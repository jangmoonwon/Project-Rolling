import { BadgeEmoji } from "sharing/BadgeEmoji/BadgeEmoji";
import styles from "./SortedEmojis.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function SortedEmojis({ topReactions }) {
  return (
    <div className={cx("container")}>
      {topReactions.map((item, i) => {
        return <BadgeEmoji key={i} emoji={item.emoji} count={item.count} />;
      })}
    </div>
  );
}
