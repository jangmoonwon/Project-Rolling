import { CountVisitor } from "sharing/CountVisitor/CountVistor";
import styles from "./HeaderService.module.scss";
import classNames from "classnames/bind";
import {
  SortedEmojis,
  EmojiExpantion,
  ReactionPopoverButton,
  ShareButton,
} from "sharing";

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
          <p className={cx("message-count")}>{messageCount}</p>명이 작성했어요!
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
