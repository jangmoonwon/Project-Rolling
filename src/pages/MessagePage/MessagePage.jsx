import { useState, useEffect } from "react";
import styles from "./MessagePage.module.scss";
import classNames from "classnames/bind";
import { getProfileImages } from "util";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "layout/Layout";
import {
  NameInput,
  Profile,
  DropdownMenuBar,
  TextEditor,
  CreateButton,
} from "sharing";
import { createMessage } from "util";

const cx = classNames.bind(styles);

export const MessagePage = () => {
  const [profileAllImage, setprofileAllImage] = useState([]);
  const [senderName, setSenderName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [relationship, setRelationship] = useState("지인");
  const [content, setContent] = useState("");
  const [font, setFont] = useState("Noto Sans");
  const { id } = useParams();
  const navigate = useNavigate();

  const profileImages = [...profileAllImage];
  const relationships = ["친구", "지인", "동료", "가족"];
  const fonts = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];

  async function fetchImages() {
    try {
      const { imageUrls } = await getProfileImages();
      setProfileImage(imageUrls[0]);
      setprofileAllImage(imageUrls.slice(1));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    createMessage(id, senderName, relationship, content, font, profileImage)
      .then(() => {
        navigate(`/post/${id}`); // 성공적으로 메시지를 생성한 후에 경로 이동
      })
      .catch((error) => {
        console.error("Message creation failed:", error);
      });
  };

  return (
    <Layout isHiddenButton={true}>
      <form className={cx("container")} onSubmit={handleSubmit}>
        <NameInput
          value={senderName}
          setValue={setSenderName}
          title={"From."}
        />

        <Profile
          value={profileImage}
          setValue={setProfileImage}
          data={profileImages}
        />

        <DropdownMenuBar
          value={relationship}
          setValue={setRelationship}
          data={relationships}
          text="상대와의 관계"
        />

        <TextEditor value={content} setValue={setContent} />

        <div className={cx("marginTop")}>
          <DropdownMenuBar
            value={font}
            setValue={setFont}
            data={fonts}
            text="폰트 선택"
          />
        </div>

        <CreateButton userName={senderName} content={content} />
      </form>
    </Layout>
  );
};
