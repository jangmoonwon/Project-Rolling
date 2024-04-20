import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";
import { LOGO_IMAGE } from "./constant";
import { Link, useNavigate, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

export const NavBar = ({ isHiddenButton, edit }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault();
    navigate(`/post/${id}/edit`);
  };

  return (
    <nav className={cx("container")}>
      <div className={cx("item")}>
        <Link to="/">
          <img src={LOGO_IMAGE} alt="nav logo" />
        </Link>
        <Link to="/post">
          <button className={cx("button", { hidden: isHiddenButton })}>
            롤링 페이퍼 만들기
          </button>
        </Link>
        {edit ? (
          <button className={cx("button")} onClick={handleEdit}>
            수정하기
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
