import { Layout } from "layout/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderService, EmptyPostCard } from "sharing";
import { getReactions, getRecipientById } from "util";

export const PostPage = () => {
  const [recipient, setRecipient] = useState(null);
  const [reactions, setReactions] = useState(null);

  const { id } = useParams();

  const setdata = async () => {
    const recipientData = await getRecipientById(id);
    const reactions = await getReactions(id, 8);
    setRecipient(recipientData);
    setReactions(reactions);
  };

  useEffect(() => {
    setdata();
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
        <EmptyPostCard />
      </Layout>
    )
  );
};
