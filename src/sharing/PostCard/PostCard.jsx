import styles from "./PostCard.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import {
  PostCardLayout,
  CardProfile,
  CardContent,
  CardDate,
  DeleteButton,
} from "sharing";

const cx = classNames.bind(styles);

export const EmptyPostCard = ({ id, recentMessages, edit, color, image }) => {
  const navigate = useNavigate();

  const handlemessage = () => {
    navigate(`/post/${id}/message`);
  };

  return (
    <div
      style={image && { backgroundImage: `url(${image})` }}
      className={cx("background", color && color)}
    >
      {edit && <DeleteButton id={id} />}
      <div className={cx("content")}>
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
            <button key={i} className={cx("cardList")}>
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
          );
        })}
      </div>
    </div>
  );
};
