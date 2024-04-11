import React from "react";
import {
  getRecipients,
  getRecipientById,
  getMessages,
  getReactions,
  createRecipient,
  createMessage,
  deleteRecipient,
  deleteMessage,
  addReaction,
} from "./util";

// ID값과 같이 각 api함수의 parameter는 코드에서 지정을 해야 합니다!!!

const PlayGround = () => {
  const testGetRecipients = async () => {
    try {
      const data = await getRecipients();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const testGetRecipientById = async () => {
    try {
      // 테스트를 위한 임시 ID 사용
      const recipientId = 5781;
      const data = await getRecipientById(recipientId);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const testCreateRecipient = async () => {
    try {
      const data = await createRecipient("새 대상", "blue");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const testDeleteRecipient = async () => {
    try {
      // 삭제할 대상의 ID. 실제 존재하는 ID로 변경해야 함
      const recipientId = 5786;
      const status = await deleteRecipient(recipientId);
      console.log(`Recipient deleted with status: ${status}`);
    } catch (error) {
      console.error(error);
    }
  };

  const testCreateMessage = async () => {
    try {
      const recipientId = 5786; // 메시지를 보낼 대상의 ID. 존재하는 대상의 ID로 변경해야 함
      const data = await createMessage(
        recipientId,
        "보내는 사람",
        "가족",
        "메시지 내용입니다.",
        "Noto Sans",
        "https://example.com/profile.jpg"
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const testGetMessages = async () => {
    try {
      const recipientId = 5786; // 메시지를 조회할 대상의 ID. 존재하는 대상의 ID로 변경해야 함
      const data = await getMessages(recipientId);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const testDeleteMessage = async () => {
    try {
      const messageId = 10333; // 삭제할 메시지의 ID. 실제 존재하는 메시지 ID로 변경해야 함
      const status = await deleteMessage(messageId);
      console.log(`Message deleted with status: ${status}`);
    } catch (error) {
      console.error(error);
    }
  };

  const testAddReaction = async () => {
    try {
      const recipientId = 5786; // 리액션을 추가할 대상의 ID. 존재하는 대상의 ID로 변경해야 함
      const data = await addReaction(recipientId, "😊", "increase");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const testGetReactions = async () => {
    try {
      const recipientId = 5786; // 리액션을 조회할 대상의 ID. 존재하는 대상의 ID로 변경해야 함
      const data = await getReactions(recipientId);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={testGetRecipients}>getRecipients</button>
      <button onClick={testGetRecipientById}>getRecipientById</button>
      <button onClick={testCreateRecipient}>createRecipient</button>
      <button onClick={testDeleteRecipient}>deleteRecipient</button>
      <button onClick={testCreateMessage}>createMessage</button>
      <button onClick={testGetMessages}>getMessages</button>
      <button onClick={testDeleteMessage}>deleteMessage</button>
      <button onClick={testAddReaction}>addReaction</button>
      <button onClick={testGetReactions}>getReactions</button>
    </div>
  );
};

export default PlayGround;
