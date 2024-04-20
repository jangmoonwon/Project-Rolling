import styles from "./EmptyPostCard.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {
  PostCardLayout,
  CardProfile,
  CardContent,
  CardDate,
  DeleteButton,
} from "sharing";

const cx = classNames.bind(styles);

export const EmptyPostCard = ({ recentMessages, edit }) => {
  return (
    <div className={cx("background")}>
      {edit && <DeleteButton />}

      <div className={cx("content")}>
        {!edit && (
          <PostCardLayout>
            <div className={cx("button-box")}>
              <button>
                <Link to="/post/{id}/message">
                  <img src={"/images/plusButton.png"} alt="플러스 모양 버튼" />
                </Link>
              </button>
            </div>
          </PostCardLayout>
        )}

        {recentMessages.map((item, i) => {
          return (
            <button key={i} className={cx("cardList")}>
              {edit && <DeleteButton image={edit} />}

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
