import styles from "./DeleteButton.module.scss";
import classNames from "classnames/bind";
import { deleteRecipient, deleteMessage } from "util";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export const DeleteButton = ({ id, index, message, image }) => {
  const navigate = useNavigate();

  async function handleDeletePageClick() {
    console.log(id);
    try {
      await deleteRecipient(id);
      alert("롤링 페이퍼가 삭제되었습니다.");
      navigate(`/`);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteMessagesClick() {
    const messagesId = message.id;
    const sender = message.sender;

    try {
      await deleteMessage(messagesId);
      alert(`${sender}님의 메시지가 삭제되었습니다.`);
      navigate(`/post/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {image ? (
        <img
          onClick={handleDeleteMessagesClick}
          className={cx("icon")}
          src={image}
          alt="삭제하기"
        />
      ) : (
        <div className={cx("editBlock")}>
          <button
            onClick={handleDeletePageClick}
            type="button"
            className={cx("editButton")}
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
};
