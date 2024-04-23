import styles from "./PostCard.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostCardLayout,
  CardProfile,
  CardContent,
  CardDate,
  DeleteButton,
  Modal,
} from "sharing";

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
              <>

                <JustShadow visible={item.id === modalId} />
	
                <Modal
                  CardProfile={
                    <CardProfile
                      image={item.profileImageURL}
                      name={item.sender}
                      relationship={item.relationship}
                    />
                  }
                  textContent={
                    <CardContent content={item.content} font={item.font} />
                  }
                  visible={item.id === modalId}
                  date={<CardDate date={item.createdAt} />}
                  setModalId={setModalId}
                />


                <button
                  key={i}
                  className={cx("cardList")}
                  onClick={() => handleModal(item.id)}
                >
                  {edit && (
                    <DeleteButton
                      index={i}
                      id={id}
                      messages={recentMessages}
                      image={edit}
                    />
                  )}

                  <CardProfile
                    image={item.profileImageURL}
                    name={item.sender}
                    relationship={item.relationship}
                  />

                  <CardContent content={item.content} font={item.font} />

                  <CardDate date={item.createdAt} />
                </button>

              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
