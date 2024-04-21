import { BadgeEmoji } from "sharing";
import styles from "./SortedEmojis.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function SortedEmojis({ topReactions }) {
  return (
    topReactions !== 0 && (
      <div className={cx("container")}>
        {topReactions.slice(0, 3).map((item, i) => {
          return <BadgeEmoji key={i} emoji={item.emoji} count={item.count} />;
        })}
      </div>
    )
  );
}
