import styles from "./EmptyPostCard.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { PostCardLayout, CardProfile, CardContent, CardDate } from "sharing";

const cx = classNames.bind(styles);

export const EmptyPostCard = ({ data, edit }) => {
  return (
    <div className={cx("TestBlock")}>
      {edit && (
        <div className={cx("editBlock")}>
          <button className={cx("editButton")}>삭제하기</button>
        </div>
      )}
      <div className={cx("content")}>
        <PostCardLayout>
          <div className={cx("button-box")}>
            <button>
              <Link to="/post/{id}/message">
                <img src={"/images/plusButton.png"} alt="플러스 모양 버튼" />
              </Link>
            </button>
          </div>
        </PostCardLayout>

        {data.map((item, i) => {
          return (
            <button key={i} className={cx("cardList")}>
              {edit && (
                <button>
                  <img className={cx("icon")} src={edit} alt="삭제하기" />
                </button>
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
