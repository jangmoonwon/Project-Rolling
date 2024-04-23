import {
  Content,
  DeleteButton,
  JustShadow,
  Profile,
  Modal,
  DateContent,
} from "./ui";
import classNames from "classnames/bind";
import styles from "./MessageCard.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);

const Card = function ({ key, edit, id, item, handleModal }) {
  return (
    <button
      key={key}
      className={cx("card")}
      onClick={() => handleModal(item.id)}
    >
      {edit && (
        <DeleteButton index={key} id={id} message={item} image={edit} />
      )}

      <Profile
        image={item.profileImageURL}
        name={item.sender}
        relationship={item.relationship}
      />

      <Content content={item.content} font={item.font} />

      <DateContent date={item.createdAt} />
    </button>
  );
};

export const MessageCard = function ({ idx, edit, id, item }) {
  const key = idx;
  const [modalId, setModalId] = useState(-1);
  const handleModal = (messageId) => {
    setModalId(messageId);
  };
  return (
    <>
      <JustShadow visible={item.id === modalId} />

      <Modal
        CardProfile={
          <Profile
            image={item.profileImageURL}
            name={item.sender}
            relationship={item.relationship}
          />
        }
        textContent={<Content content={item.content} font={item.font} />}
        visible={item.id === modalId}
        date={<DateContent date={item.createdAt} />}
        setModalId={setModalId}
      />
      <Card
        key={key}
        edit={edit}
        id={id}
        item={item}
        handleModal={handleModal}
      />
    </>
  );
};
