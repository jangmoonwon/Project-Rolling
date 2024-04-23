import styles from "./PostCard.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { PostCardLayout, DeleteButton } from "sharing";
import { Modal } from "sharing/MessageCard_with_Modal";
import { MessageCard } from "sharing/MessageCard_with_Modal";
// import { Modal } from "sharing/MessageCard_with_Modal/Modal/Modal";
const cx = classNames.bind(styles);

//modal을 여기서 띄워야함
// ㅇㅈ?
// 승렬: ㅇ ㅇㅈ
//ㄴ 이거까지 커밋하죠
export const EmptyPostCard = ({ id, recentMessages, edit, color, image }) => {
  const navigate = useNavigate();

  //   const [modalId, setModalId] = useState(-1);
  const handlemessage = () => {
    navigate(`/post/${id}/message`);
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

          {id !== undefined &&
            recentMessages.map((item, i) => {
              return <MessageCard idx={i} edit={edit} id={id} item={item} />;
            })}

          {/* {modalId !== -1 && (
            <Modal
              CardProfile={
                <Profile
                  image={item.profileImageURL}
                  name={item.sender}
                  relationship={item.relationship}
                />
              }
              textContent={<Content content={item.content} font={item.font} />}
              visible={item.id === modalId}
              date={<DateContent date={item.createdAt} />}
              setModalId={setModalId}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};
