import { useState, useEffect } from "react";
import styles from "./MessagePage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";
import { NavBar } from "NavBar";
import { NameInput } from "../../sharing/NameInput/NameInput";
import { Profile } from "../../sharing/Profile/Profile";
import { DropdownMenuBar } from "../../sharing/DropdownMenuBar/DropdownMenuBar";
import { TextEditor } from "../../sharing/TextEditor/TextEditor";
import { CreateButton } from "../../sharing/CreateButton/CreateButton";
import { getProfileImages } from "util/api/getProfileImages";

const cx = classNames.bind(styles);

export const MessagePage = () => {
  const [testImg, setTestImg] = useState([]);

  async function test() {
    try {
      const { imageUrls } = await getProfileImages();
      setTestImg(imageUrls);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    test();
  }, []);

  const profileImages = [...testImg];

  // -----

  const [senderName, setSenderName] = useState("");

  // 빈 배열로 변경
  const [profileImage, setProfileImage] = useState(DEFAULT_IMAGE);
  const [relationship, setRelationship] = useState("지인");
  const [content, setContent] = useState("");
  const [font, setFont] = useState("Noto Sans");

  const relationships = ["친구", "지인", "동료", "가족"];
  const fonts = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];

  /** onSubmit console 테스트 나중에 삭제 */
  const handleSubmit = (event) => {
    // 새로고침 방지
    event.preventDefault();

    console.log(`senderName : ${senderName}`);
    console.log(`profileImage : ${profileImage}`);
    console.log(`relationship : ${relationship}`);
    console.log(`content : ${content}`);
    console.log(`font : ${font}`);
  };

  return (
    <>
      <NavBar isHiddenButton={true} />
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
