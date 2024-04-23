import styles from "./PostCard.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostCardLayout, DeleteButton, MessageCard } from "sharing";

const cx = classNames.bind(styles);

const JustShadow = function ({ visible }) {
  if (!visible) {
    return <></>;
  }
  return <div className={cx("shadow")} />;
};

export const EmptyPostCard = ({ id, recentMessages, edit, color, image }) => {
  const navigate = useNavigate();

  const [modalId, setModalId] = useState(-1);

  const handlemessage = () => {
    navigate(`/post/${id}/message`);
  };

  const handleModal = (messageId) => {
    setModalId(messageId);
  };

  return (
    <div
      style={image && { backgroundImage: `url(${image})` }}
      className={cx("background", color && color)}
    >
      <div className={cx("content-container")}>
        {edit && <DeleteButton id={id} />}
        <div className={cx("card-list")}>
          {!edit && (
            <PostCardLayout>
              <div className={cx("button-box")}>
                <button onClick={handlemessage}>
                  <img src={"/images/plusButton.png"} alt="플러스 모양 버튼" />
                </button>
              </div>
            </PostCardLayout>
          )}

          {recentMessages.map((item, i) => {
            return (
              <MessageCard
                key={i}
                edit={edit}
                id={id}
                recentMessages={recentMessages}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
