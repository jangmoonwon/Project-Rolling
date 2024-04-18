import { Layout } from "layout/Layout";
import { HeaderService } from "../../sharing/HeaderService/HeaderService";
import { EmptyPostCard } from "sharing/EmptyPostCard/EmptyPostCard";

import { getMessages, getReactions, getRecipientById } from "util";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const PostPage = () => {
  const { id } = useParams();
  const [recentMessages, setRecentMessages] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [topReactions, setTopReactions] = useState([]);
  const [nameById, setNameById] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await getMessages(id); // 메시지를 비동기적으로 불러옴
      setRecentMessages(messages); // 상태에 메시지를 저장
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    const fetchReactions = async () => {
      const reactionList = await getReactions(id, 8); // 메시지를 비동기적으로 불러옴
      setReactions(reactionList); // 상태에 메시지를 저장
    };
    fetchReactions();
  }, []);

  useEffect(() => {
    const fetchTopReactions = async () => {
      const TopReactionList = await getReactions(id, 3); // 메시지를 비동기적으로 불러옴
      setTopReactions(TopReactionList); // 상태에 메시지를 저장
    };
    fetchTopReactions();
  }, []);

  useEffect(() => {
    // 비동기 함수를 정의합니다.
    const fetchRecipient = async () => {
      const recipient = await getRecipientById(id); // 비동기 요청을 보냅니다.
      setNameById(recipient.name); // 응답 데이터를 상태에 저장합니다.
    };
    fetchRecipient(); // 정의된 비동기 함수를 실행합니다.
  }, []);

  const messageCount = recentMessages.length; // 배열의 길이를 계산

  return (
    <Layout isHiddenButton={true}>
      <HeaderService
        name={nameById}
        recentMessages={recentMessages}
        messageCount={messageCount}
        topReactions={topReactions}
        reactions={reactions}
      />
      <EmptyPostCard />
    </Layout>
  );
};
