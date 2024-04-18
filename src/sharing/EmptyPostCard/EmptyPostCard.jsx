import styles from "./EmptyPostCard.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { PostCardLayout, CardProfile, CardContent, CardDate } from "sharing";

const cx = classNames.bind(styles);

// 테스트한 backgroundImage, backgroundColor삭제하기
export const EmptyPostCard = ({
  data,
  backgroundImage,
  backgroundColor = "beige",
}) => {
  return (
    <div className={cx("background", backgroundColor)}>
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
          <button key={i} className={cx("content")}>
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
  );
};
