import React, { useState, useEffect } from "react";
import { Layout } from "layout/Layout";
import { HeaderService, PostCard } from "sharing";
import { useParams } from "react-router-dom";
import { getRecipientById, getMessages, getReactions } from "util";

export const PostPage = () => {
  const { id } = useParams();

  const setdata = async () => {
    const recipientData = await getRecipientById(id);
    const reactions = await getReactions(id, 8);
    setRecipient(recipientData);
    setReactions(reactions);
  };

  const [backgroundColor, setBackgroundColor] = useState([]);
  const [backgroundImageURL, setBackgroundImageURL] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);
  const [recipient, setRecipient] = useState(null);
  const [reactions, setReactions] = useState(null);

  useEffect(() => {
    const fetchRecipientId = async () => {
      const data = await getRecipientById(id);
      setBackgroundColor(data.backgroundColor);
      setBackgroundImageURL(data.backgroundImageURL);
    };
    fetchRecipientId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessages(id,1000);
      setRecentMessages(data);
    };
    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    recipient && (
      <Layout isHiddenButton={true} isDisplay={true}>
        <HeaderService
          name={recipient.name}
          recentMessages={recipient.recentMessages}
          messageCount={recipient.messageCount}
          reactions={reactions}
          id={id}
        />
        <PostCard
          id={id}
          recentMessages={recentMessages}
          color={backgroundColor}
          image={backgroundImageURL}
        />
      </Layout>
    )
  );
};
