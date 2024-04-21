import React, { useState, useEffect } from "react";
import { Layout } from "layout/Layout";
import { HeaderService, EmptyPostCard } from "sharing";
import { useParams } from "react-router-dom";
import { getRecipientById, getMessages } from "util";
import { DELETED_ICON } from "./constant";

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
const messageCountTest = 23;

export const EditPage = () => {
  const { id } = useParams();

  const [backgroundColor, setBackgroundColor] = useState([]);
  const [backgroundImageURL, setBackgroundImageURL] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);

  useEffect(() => {
    const fetchRecipientId = async () => {
      try {
        const data = await getRecipientById(id);
        setBackgroundColor(data.backgroundColor);
        setBackgroundImageURL(data.backgroundImageURL);
      } catch (error) {
        console.error("Message creation failed:", error);
      }
    };
    fetchRecipientId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages(id);
        setRecentMessages(data);
      } catch (error) {
        console.error("Message creation failed:", error);
      }
    };
    fetchMessages();
  }, [id, recentMessages]);

  return (
    <div>
      <Layout isHiddenButton={true}>
        <HeaderService
          name={nameByIdTest}
          recentMessages={recentMessagesTest}
          messageCount={messageCountTest}
          topReactions={topReactionsTest}
          reactions={reactionsTest}
        />
        <EmptyPostCard
          id={id}
          recentMessages={recentMessages}
          edit={DELETED_ICON}
          color={backgroundColor}
          image={backgroundImageURL}
        />
      </Layout>
    </div>
  );
};
