import { CountVisitor } from "sharing/CountVisitor/CountVistor";
import styles from "./HeaderService.module.scss";
import classNames from "classnames/bind";
import { SortedEmojis } from "sharing/SortedEmojis/SortedEmojis";
import { EmojiExpantion } from "sharing/EmojiExpantion/EmojiExpantion";
import { ReactionPopoverButton } from "sharing/ReactionPopover/ReactionPopoverButton";
import { ShareUrlButton } from "sharing/ShareUrlButton/ShareUrlButton";

const cx = classNames.bind(styles);

const recentMessages = [
  {
    id: 10157,
    recipientId: 5693,
    sender: "닼닼 모드",
    profileImageURL: "https://picsum.photos/id/859/100/100",
    relationship: "동료",
    content:
      "<p>다크 모드 너무너무 예쁘네요 :) !!</p><p>모달 바깥 부분 클릭해도 꺼졌으면 좋겠어요!!</p>",
    font: "나눔명조",
    createdAt: "2024-03-15T08:28:56.156123Z",
  },
  {
    id: 7743,
    recipientId: 4814,
    sender: "코드잇",
    profileImageURL: "https://picsum.photos/id/571/100/100",
    relationship: "가족",
    content: "<p>안녕하세요</p>",
    font: "나눔명조",
    createdAt: "2024-03-08T05:29:37.613149Z",
  },
  {
    id: 9872,
    recipientId: 5626,
    sender: "테스트에요~",
    profileImageURL: "https://picsum.photos/id/547/100/100",
    relationship: "가족",
    content:
      '<p><strong>그대들은 어떻게 살것인가 - 미야자키하야오 <span class="ql-cursor">�</span></strong></p>',
    font: "나눔손글씨 손편지체",
    createdAt: "2024-03-12T01:27:38.099811Z",
  },
];

const topReactions = [
  {
    id: 5256,
    emoji: "😃",
    count: 2,
  },
  {
    id: 5255,
    emoji: "😀",
    count: 2,
  },
  {
    id: 5254,
    emoji: "🫡",
    count: 1,
  },
];

const reactions = [
  {
    id: 5524,
    emoji: "🥰",
    count: 3,
  },
  {
    id: 5523,
    emoji: "😆",
    count: 2,
  },
  {
    id: 5521,
    emoji: "😃",
    count: 1,
  },
  {
    id: 5522,
    emoji: "😁",
    count: 1,
  },
  {
    id: 5525,
    emoji: "😍",
    count: 1,
  },
  {
    id: 5526,
    emoji: "😋",
    count: 1,
  },
  {
    id: 5520,
    emoji: "😀",
    count: 1,
  },
  {
    id: 5527,
    emoji: "🥲",
    count: 1,
  },
];

const nameById = "sohyun";
const messageCount = 23;

export function HeaderService({
  name = { nameById },
  recentMessages = { recentMessages },
  messageCount = { messageCount },
  topReactions = { topReactions },
  reactions = { reactions },
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

          <ShareUrlButton />
        </div>
      </div>
    </div>
  );
}
