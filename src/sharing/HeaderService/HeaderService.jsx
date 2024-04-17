import { CountVisitor } from "sharing/CountVisitor/CountVistor";
import styles from "./HeaderService.module.scss";
import classNames from "classnames/bind";
import { SortedEmojis } from "sharing/SortedEmojis/SortedEmojis";
import { EmojiExpantion } from "sharing/EmojiExpantion/EmojiExpantion";
import { ReactionPopoverButton } from "../ReactionPopoverButton/ReactionPopoverButton";
import { ShareButton } from "../ShareButton/ShareButton";

const cx = classNames.bind(styles);

export function HeaderService({
  name,
  recentMessages,
  messageCount,
  topReactions,
  reactions,
}) {
  return (
    <div className={cx("container")}>
      <div className={cx("Header-service")}>
        <p className={cx("name")}>To.{name}</p>
        <div className={cx("post-info")}>
          <CountVisitor
            recentMessages={recentMessages}
            messageCount={messageCount}
          />

          <div className={cx("partition28px")}></div>

          <SortedEmojis topReactions={topReactions} />

          <EmojiExpantion reactions={reactions} />

          <ReactionPopoverButton />

          <div className={cx("partition13px")}></div>

          <ShareButton />
        </div>
      </div>
    </div>
  );
}
