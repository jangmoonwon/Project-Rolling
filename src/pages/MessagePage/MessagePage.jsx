import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MessagePage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE, IMAGE_TEST1, IMAGE_TEST2 } from "./constant";
import { NavBar } from "NavBar";
import {
  NameInput,
  Profile,
  DropdownMenuBar,
  TextEditor,
  CreateButton,
} from "sharing";

const cx = classNames.bind(styles);

export const MessagePage = () => {
  const [senderName, setSenderName] = useState("");
  const [profileImage, setProfileImage] = useState(DEFAULT_IMAGE);
  const [relationship, setRelationship] = useState("지인");
  const [content, setContent] = useState("");
  const [font, setFont] = useState("Noto Sans");
  const { id } = useParams();

  const profileImages = [IMAGE_TEST1, IMAGE_TEST2];
  const relationships = ["친구", "지인", "동료", "가족"];
  const fonts = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];

  /** onSubmit console 테스트 */
  const handleSubmit = (event) => {
    // 새로고침 방지
    event.preventDefault();

    console.log(id);
    console.log(`senderName : ${senderName}`);
    console.log(`profileImage : ${profileImage}`);
    console.log(`relationship : ${relationship}`);
    console.log(`content : ${content}`);
    console.log(`font : ${font}`);
  };

  return (
    <>
      <NavBar />
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

        <CreateButton />
      </form>
    </>
  );
};
