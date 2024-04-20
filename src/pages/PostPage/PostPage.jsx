import { Layout } from "layout/Layout";
import { HeaderService, EmptyPostCard } from "sharing";

const recentMessagesTest = [
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
    id: 7743,
    recipientId: 4814,
    sender: "코드잇",
    profileImageURL: "https://picsum.photos/id/571/100/100",
    relationship: "가족",
    content: "<p>안녕하세요</p>",
    font: "나눔명조",
    createdAt: "2024-03-08T05:29:37.613149Z",
  },
];

const topReactionsTest = [
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

const reactionsTest = [
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

const nameByIdTest = "hihi";
const messageCountTest = reactionsTest.length;

export const PostPage = () => {
  return (
    <Layout isHiddenButton={true} edit={true}>
      <HeaderService
        name={nameByIdTest}
        recentMessages={recentMessagesTest}
        messageCount={messageCountTest}
        topReactions={topReactionsTest}
        reactions={reactionsTest}
      />
      <EmptyPostCard />
    </Layout>
  );
};
