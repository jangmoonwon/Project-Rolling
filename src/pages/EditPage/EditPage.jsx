import React, { useState, useEffect } from "react";
import { Layout } from "layout/Layout";
import { HeaderService, EmptyPostCard } from "sharing";
import { useParams } from "react-router-dom";
import { getRecipientById, getMessages, getReactions } from "util";
import { DELETED_ICON } from "./constant";

export const EditPage = () => {
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

  useEffect(() => {
    setdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    recipient && (
      <Layout isHiddenButton={true}>
        <HeaderService
          name={recipient.name}
          recentMessages={recipient.recentMessages}
          messageCount={recipient.messageCount}
          reactions={reactions}
          id={id}
        />
        <EmptyPostCard
          id={id}
          recentMessages={recentMessages}
          edit={DELETED_ICON}
          color={backgroundColor}
          image={backgroundImageURL}
        />
      </Layout>
    )
  );
};
