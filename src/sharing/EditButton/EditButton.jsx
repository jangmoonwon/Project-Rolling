import styles from "./EditButton.module.scss";
import classNames from "classnames/bind";
import { useParams, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export const EditButton = ({edit}) => {
  const {id} = useParams();
  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault();
    navigate(`/post/${id}/edit`);
  };

  return (
    <div className={cx("container")}>
        {edit ? (
          <button className={cx("button")} onClick={handleEdit}>
            수정하기
          </button>
        ) : (
          ""
        )}
    </div>
  );
};
