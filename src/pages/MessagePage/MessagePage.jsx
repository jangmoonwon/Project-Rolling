import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MessagePage.module.scss";
import classNames from "classnames/bind";
import { getProfileImages } from "util/api/getProfileImages";
import { useParams } from "react-router-dom";
import { Layout } from "layout/Layout";
import {
  NameInput,
  Profile,
  DropdownMenuBar,
  TextEditor,
  CreateButton,
} from "sharing";

const cx = classNames.bind(styles);

export const MessagePage = () => {
  const [profileAllImage, setprofileAllImage] = useState([]);

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

  const [senderName, setSenderName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [relationship, setRelationship] = useState("지인");
  const [content, setContent] = useState("");
  const [font, setFont] = useState("Noto Sans");
  const { id } = useParams();

  const profileImages = [...profileAllImage];
  const relationships = ["친구", "지인", "동료", "가족"];
  const fonts = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];

  const handleSubmit = (event) => {
    // 새로고침 방지
    event.preventDefault();
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

        <Link to="/post/{id}">
          <CreateButton userName={senderName} content={content} />
        </Link>
      </form>
    </Layout>
  );
};
