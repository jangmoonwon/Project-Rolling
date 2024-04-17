import styles from "./EmptyPostCard.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { PostCardLayout } from "sharing/PostCardLayout/PostCardLayout";

const cx = classNames.bind(styles);

export const EmptyPostCard = () => {
  return (
    <PostCardLayout>
      <div className={cx("button-box")}>
        <button>
          <Link to="/post/{id}/message">
            <img src={"/images/plusButton.png"} alt="플러스 모양 버튼" />
          </Link>
        </button>
      </div>
    </PostCardLayout>
  );
};
